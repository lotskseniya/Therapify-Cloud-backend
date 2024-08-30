import { IsInt, IsNumber, IsOptional, IsString } from 'class-validator'

export class ClientProgressAnxietyDto {
	@IsString()
	@IsOptional()
	createdAt?: string

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	suddendly_scared?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	fearful?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	faintness?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	nervousness?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	heart_racing?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	trembling?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	feeling_tense?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	headaches?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	panic?: number

	@IsOptional()
	@IsNumber({ maxDecimalPlaces: 2 })
	restlessness?: number
}
