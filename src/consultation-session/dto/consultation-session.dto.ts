import { IsBoolean, IsNumber, IsOptional } from "class-validator";

export class ConsultationSessionDto {
 @IsBoolean()
 @IsOptional()
 isCompleted?: boolean
	static consultationSessionId: any;
}

export class ConsultationSessionRoundDto {
 @IsNumber()
 totalDuration: number

 @IsBoolean()
 @IsOptional()
 isCompleted?: boolean
}
