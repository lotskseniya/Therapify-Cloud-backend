import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { AuthDto } from 'src/auth/dto/auth.dto'
import { hash } from 'argon2'
import { UserDto } from './dto/user.dto'
import {
	startOfDay,
	subDays,
	endOfWeek,
	addWeeks,
	endOfMonth,
	addMonths,
	subWeeks,
	startOfMonth,
	addDays,
	endOfDay,
	startOfWeek,
	isBefore,
	startOfTomorrow,
	lastDayOfISOWeek,
	endOfTomorrow,
	endOfToday,
} from 'date-fns'
import type { EndOfWeekOptions } from "date-fns";
import { UpdateUserDto } from './dto/update-user.dto'
import { SessionDurationService } from 'src/consultation-settings/session-duration.service'
import { SessionDurationDto } from 'src/consultation-settings/dto/session-duration.dto'
import { equal } from 'assert'
import { equals } from 'class-validator'

@Injectable()
export class UserService {
	constructor(private prisma: PrismaService) {}

	async getById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id,
			},
			include: {
				clients: true,
				sessionDurations: true,
			},
		})
	}

	getByEmail(email: string) {
		return this.prisma.user.findUnique({
			where: {
				email,
			},
		})
	}

	async getProfile(id: string) {
		const profile = await this.getById(id)
		const totalClients = profile.clients.length

		const completedConsultations = await this.prisma.consultationSession.count({
			where: {
				userId: id,
				isCompleted: true,
			},
		})
		const yesterday = subDays(new Date(), 1)
		const today = endOfDay(new Date())
		const tomorrow = endOfDay(addDays(new Date(), 1))
		const thisWeek = endOfWeek(today, { weekStartsOn: 1 })
		const nextWeek = endOfWeek(startOfWeek(addWeeks(thisWeek, 1)), { weekStartsOn: 1 })
		const thisMonth = endOfMonth(today)
		const nextMonth = endOfMonth(addMonths(thisMonth, 1))
		const later = startOfMonth(addMonths(nextMonth, 1))
		
		const todayClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					gt: yesterday.toISOString(),
					lte: today.toISOString(),
				},
			},
		})

		const tomorrowClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					gt: today.toISOString(),
					lte: tomorrow.toISOString(),
				},
			},
		})

		const thisWeekClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					lte: thisWeek.toISOString(),
				},
			},
		})

		const nextWeekClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					gt: thisWeek.toISOString(),
					lte: nextWeek.toISOString(),
					not: tomorrow.toISOString(),
				},
			},
		})

		const thisMonthClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					lte: thisMonth.toISOString(),
				},
			},
		})

		const nextMonthClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					gt: thisMonth.toISOString(),
					lte: nextMonth.toISOString(),
				},
			},
		})

		const laterClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					gte: later.toISOString(),
				},
			},
		})

		const previousClients = await this.prisma.client.count({
			where: {
				userId: id,
				createdAt: {
					lt: today.toISOString(),
				},
			},
		})

		const { password, ...data } = profile

		return {
			user: data,
			userStatistics: [
				{ label: 'Today Clients', value: todayClients },
				{ label: 'Tomorrow Clients', value: tomorrowClients },
				{ label: 'This Week Clients', value: thisWeekClients },
				{ label: 'Next Week Clients', value: nextWeekClients },
				{ label: 'This Month Clients', value: thisMonthClients },
				{ label: 'Next Month Clients', value: nextMonthClients },
				{ label: 'Later Consultations', value: laterClients },
				{ label: 'Completed Consultations', value: completedConsultations },
				{ label: 'Previous Consultations (scheduled, but uncompleted)', value: previousClients},
                { label: 'Total Clients', value: totalClients },
			],
		}
	}

	async create(dto: AuthDto) {
		const user = {
			email: dto.email,
			name: '',
			password: await hash(dto.password),
		}
		return this.prisma.user.create({
			data: user,
		})
	}

	async update(id: string, dto: UpdateUserDto) {
		let data = dto

		if (dto.password) {
			data = {
				...dto,
				password: await hash(dto.password),
			}
		}

		return this.prisma.user.update({
			where: {
				id,
			},
			data: {
				email: dto.email,
				name: dto.name,
				sessionDurations: {
					deleteMany: {},
					createMany: {
						data: dto.sessionDurations.map((duration: SessionDurationDto) => ({
							...duration,
						})),
					},
				},
			},
			select: {
				id: true,
				email: true,
				name: true,
				sessionDurations: true,
				clients: true,
			},
		})
	}

	// async update(id: string, dto: UserDto) {
	//   let data = dto

	//   if (dto.password) {
	//     data = {
	//       ...dto,
	//       password: await hash(dto.password)
	//     }
	//   }

	//   return this.prisma.user.update({
	//     where: {
	//       id,
	//     },
	//     data,
	//     select: {
	//       id: true,
	//       email: true,
	//       name: true,
	//       sessionDurations: true
	//     }
	//   })
	//  }

	// async update(id: string, sessionDurationId: string, dto: UpdateUserDto) {
	//   let data = dto

	//   if (dto.password) {
	//     data = {
	//       ...dto,
	//       password: await hash(dto.password)
	//     }
	//   }

	//   return this.prisma.user.update({
	//     where: {
	//       id,
	//     },
	//     data: {
	//       sessionDurations: {
	//         update: {
	//           where: {
	//             id: sessionDurationId
	//           },
	//           data: {
	//             ...dto
	//           }
	//         }
	//       }
	//     },
	//     select: {
	//       id: true,
	//       email: true,
	//       name: true,
	//       sessionDurations: true
	//     }
	//   })
	//  }
}
