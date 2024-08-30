import { Injectable } from '@nestjs/common'
import { PrismaService } from '../prisma.service'
import { ClientProgressAnxietyDto } from './dto/progress-anxiety-dto'

@Injectable()
export class ProgressAnxietyService {
	constructor(private prisma: PrismaService) {}

async getProgress(id: string) {
  const clientProgress = await this.prisma.client.findUnique({
    where: {
      id: `${id}`
    },
    include: {
      ClientProgressAnxietys: true,
    }
  })

  return {
   clientProgress
  }
}

	async createNewSurvey(dto: ClientProgressAnxietyDto, clientId: string) {
		return this.prisma.clientProgressAnxiety.create({
			data: {
				...dto,
				client: {
					connect: {
						id: clientId,
					},
				},
			},
		})
	}

	async updateSurvey(
		dto: Partial<ClientProgressAnxietyDto>,
		clientProgressAnxietyId: string,
		clientId: string,
	) {
		return this.prisma.clientProgressAnxiety.update({
			where: {
				clientId,
				id: clientProgressAnxietyId,
			},
			data: dto,
		})
	}

	async deleteSurvey(clientProgressAnxietyId: string) {
		return this.prisma.clientProgressAnxiety.delete({
			where: {
				id: clientProgressAnxietyId,
			},
		})
	}
}
