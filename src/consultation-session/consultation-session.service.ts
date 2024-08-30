import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import {
	ConsultationSessionDto,
	ConsultationSessionRoundDto,
} from './dto/consultation-session.dto'

@Injectable()
export class ConsultationSessionService {
	constructor(private prisma: PrismaService) {}

	async getTodaySession(userId: string) {
		const today = new Date().toISOString().split('T')[0]

		return this.prisma.consultationSession.findFirst({
			where: {
				createdAt: {
					gte: new Date(today),
				},
				userId: userId,
			},
			include: {
				sessionsRounds: {
					orderBy: {
						id: 'desc',
					},
				},
			},
		})
	}

	async createNewSession(userId: string) {
		const todaySession = await this.getTodaySession(userId)

		if (todaySession) return todaySession

		// const userSessionSettings = await this.prisma.sessionDuration.findUnique({
		// 	where: {
		// 		id: userId,
		// 		userId: userId,
		// 	},
		// 	select: {
		// 		sessionsCount: true,
		// 	},
		// })

		const userSessionSettings = await this.prisma.user.findUnique({
			where: {
				id: userId,
			},
			select: {
				sessionDurations: {
					select: {
						sessionsCount: true,
					},
				},
				}
		})

		if (!userSessionSettings) throw new NotFoundException('User settings not found')

		return this.prisma.consultationSession.create({
			data: {
				sessionsRounds: {
					createMany: {
						data: Array.from(
							{ length: userSessionSettings.sessionDurations[0].sessionsCount },
							() => ({
								totalDuration: 0,
							}),
						),
					},
				},
				user: {
					connect: {
						id: userId,
					},
				},
			},
			include: {
				sessionsRounds: true,
			},
		})
	}

	async updateSession(
		dto: Partial<ConsultationSessionDto>,
		sessionId: string,
		userId: string,
	) {
		return this.prisma.consultationSession.update({
			where: {
				userId,
				id: sessionId,
			},
			data: dto,
		})
	}

	async updateRound(
		dto: Partial<ConsultationSessionRoundDto>,
		sessionsRoundId: string,
	) {
		return this.prisma.sessionsRound.update({
			where: {
				id: sessionsRoundId,
			},
			data: dto,
		})
	}

	async deleteSession(sessionId: string, userId: string) {
		return this.prisma.consultationSession.delete({
			where: {
				id: sessionId,
				userId,
			},
		})
	}
}
