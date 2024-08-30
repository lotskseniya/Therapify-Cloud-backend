import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'prisma/generated/client';

@Injectable()
export class PrismaService extends PrismaClient implements OnModuleInit{
     private _clientProgressAnxiety: any;
    public get clientProgressAnxiety(): any {
        return this._clientProgressAnxiety;
    }
    public set clientProgressAnxiety(value: any) {
        this._clientProgressAnxiety = value;
    }
     async onModuleInit() {
        await this.$connect()
    }
}