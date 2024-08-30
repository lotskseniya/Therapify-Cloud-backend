import {
	Controller,
	Get,
	Post,
	Body,
	Patch,
	Param,
	Delete,
	ValidationPipe,
	HttpCode,
	Put,
	UsePipes,
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { ProgressAnxietyService } from './progress-anxiety.service'
import { ClientProgressAnxietyDto } from './dto/progress-anxiety-dto'
import { CurrentClient } from 'src/auth/decorators/client.decorator'

@Controller('user/progress-monitor')
export class ProgressAnxietyController {
	constructor(
		private readonly progressAnxietyService: ProgressAnxietyService,
	) {}

	@Get(':id')
	@Auth()
	async getAllResults(@CurrentClient('id') clientId: string) {
		return this.progressAnxietyService.getProgress(clientId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post('')
	@Auth()
	async createNewSurvey(
		@Body() dto: ClientProgressAnxietyDto,
		@CurrentClient('id') clientId: string,
	) {
		return this.progressAnxietyService.createNewSurvey(dto, clientId)
	}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Put(':id')
	@Auth()
	async updateSurvey(
		@Body() dto: ClientProgressAnxietyDto,
		@CurrentClient('id') clientId: string,
		@Param('id') id: string,
	) {
		return this.progressAnxietyService.updateSurvey(dto, id, clientId)
	}

	@HttpCode(200)
	@Delete(':id')
	@Auth()
	async deleteSurvey(@Param('id') id: string) {
		return this.progressAnxietyService.deleteSurvey(id)
	}
}
