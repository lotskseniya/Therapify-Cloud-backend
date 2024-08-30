import { IsEmail, IsNumber, IsOptional, IsString, Max, Min, MinLength } from "class-validator";

export class ConsultationSettingsDto {
    @IsOptional()
    @IsNumber()
    @Min(1)
    sessionDuration?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    breakDuration?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    longBreakDuration?: number

    @IsOptional()
    @IsNumber()
    @Min(1)
    @Max(7)
    sessionsCount?: number    
}

export class UserDto {
    @IsEmail()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    name?: string;

    @IsOptional()
    @MinLength(6, {
        message: 'Password is too short. It must be at least 6 characters'
    })
    @IsString()
    password?: string;
}