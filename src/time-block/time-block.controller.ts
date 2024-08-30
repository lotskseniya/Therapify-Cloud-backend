import { Controller, Get, Post, Body, Patch, Param, Delete, ValidationPipe, HttpCode, Put, UsePipes } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { TimeBlockService } from './time-block.service';
import { TimeBlockDto } from './dto/time-block.dto'; 
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { UpdateOrderDto } from './dto/update-order.dto';

@Controller('user/time-blocks')
export class TimeBlockController {
  constructor(private readonly timeBlockService: TimeBlockService) {}
 
  @Get()
  @Auth()
  async getAllTimeBlocks(@CurrentUser('id') userId: string) {
    return this.timeBlockService.getAllTimeBlocks(userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  async createNewTimeBlock(@Body() dto: TimeBlockDto, @CurrentUser('id') userId: string) {
  return this.timeBlockService.createNewTimeBlock(dto, userId)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put('update-order')
  @Auth()
  updateTimeBlockOrder(@Body() UpdateOrderDto: UpdateOrderDto) {
    return this.timeBlockService.updateTimeBlockOrder(UpdateOrderDto.ids)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth()
  async updateTimeBlock(
    @Body() dto: TimeBlockDto,
    @CurrentUser('id') userId: string,
    @Param('id') id: string
  ) {
    return this.timeBlockService.updateTimeBlock(dto, id, userId)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth()
  async deleteTimeBlock(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.timeBlockService.deleteTimeBlock(id, userId)
  }
  }

 