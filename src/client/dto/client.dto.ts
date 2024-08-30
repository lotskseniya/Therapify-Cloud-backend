import { IsArray, IsBoolean, IsEnum, IsObject, IsOptional, IsString } from "class-validator";
import { Priority } from "prisma/generated/client";
import { Transform } from "class-transformer";
import { ClientProgressAnxietyDto } from "src/client-progress-A/dto/progress-anxiety-dto";

export class ClientDto {
 @IsString()
 @IsOptional()
 name: string

 @IsBoolean()
 @IsOptional()
 isCompleted?: boolean

 @IsString()
 @IsOptional()
 createdAt?: string

 @IsEnum(Priority)
 @IsOptional()
 @Transform(({ value }) => ('' + value).toLowerCase())
 priority: Priority

 @IsString()
 @IsOptional()
 contact: string

 @IsOptional()
 @IsObject()
 ClientProgressAnxietys?: ClientProgressAnxietyDto[]
}

