import { ArrayMinSize, IsArray, IsNumber, IsOptional, Max, Min, ValidateNested } from "class-validator";
import { ConsultationSettingsDto, UserDto } from './user.dto'; 
import { Type } from "class-transformer";
import { SessionDuration } from "prisma/generated/client";

export class UpdateUserDto extends UserDto {
    
    @IsOptional()
    @IsArray()
    sessionDurations?: ConsultationSettingsDto[]
}



