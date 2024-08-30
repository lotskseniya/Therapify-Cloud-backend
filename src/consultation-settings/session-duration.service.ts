import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { SessionDurationDto } from './dto/session-duration.dto'

@Injectable()
export class SessionDurationService {
	constructor(private prisma: PrismaService) {}

	async getDurationSettings(userId: string) {
		return this.prisma.sessionDuration.findUnique({
			where: {
				id: userId,
				userId: userId,
			},
		})
	}

	async createNewDurationSettings(userId: string, dto: SessionDurationDto) {
		
		const userSettings = await this.getDurationSettings(userId)
		if (userSettings) return userSettings
		
		return this.prisma.sessionDuration.create({
			data: {
				...dto,
				user: {
				  connect: {
					id: userId,
				  }
				}
			  }
		})
	}

	async updateDurationSettings(
		dto: Partial<SessionDurationDto>,
		sessionDurationId: string,
		userId: string,
	) {
		return this.prisma.sessionDuration.update({
			where: {
				userId,
				id: sessionDurationId,
			},
			data: dto,
		})
	}

	async deleteDurationSetting(sessionDurationId: string, userId: string) {
		return this.prisma.sessionDuration.delete({
			where: {
				id: sessionDurationId,
				userId,
			},
		})
	}
}
