import type { Client } from '@/../prisma/generated/client'
import { createParamDecorator, ExecutionContext } from '@nestjs/common'

export const CurrentClient = createParamDecorator(
    (data: keyof Client, ctx: ExecutionContext) => {
        const request = ctx.switchToHttp().getRequest();
        const client = request.client;

        return data ? client[data] : client
    }
)