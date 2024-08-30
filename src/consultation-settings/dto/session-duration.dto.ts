import { IsNumber, IsOptional } from "class-validator";


export class SessionDurationDto {
    @IsNumber()
    @IsOptional()
    sessionDuration?: number

    @IsNumber()
    @IsOptional()
    breakDuration?: number

    @IsNumber()
    @IsOptional()
    longBreakDuration?: number

    @IsNumber()
    @IsOptional()
    sessionsCount?: number
}