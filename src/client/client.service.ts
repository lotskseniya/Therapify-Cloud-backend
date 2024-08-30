import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ClientDto } from './dto/client.dto';

@Injectable()
export class ClientService {
 constructor(private prisma: PrismaService) {}

 async getAllClients(userId: string) {
  return this.prisma.client.findMany({
    where: {
      userId,
    },
    include: {
      ClientProgressAnxietys: true,
    }
  })
 }

async createNewClient(dto: ClientDto, userId: string) {
  return this.prisma.client.create({
    data: {
      ...dto,
      user: {
        connect: {
          id: userId,
        },
      },
      ClientProgressAnxietys: {
        create: dto.ClientProgressAnxietys,
      },
    },
  });
}

async updateClient(dto: Partial<ClientDto>, clientId: string, userId: string) {
  return this.prisma.client.update({
    where: {
      userId,
      id: clientId,
    },
    data: {
      ...dto,
      ClientProgressAnxietys: {
        create: dto.ClientProgressAnxietys,
      },
    },
  });
}

 async deleteClient(clientId: string) {
  return this.prisma.client.delete({
    where: {
      id: clientId,
    }
  })
 }
}
