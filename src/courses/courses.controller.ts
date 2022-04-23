import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(200).send('list courses');
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Curso número #${params.id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() body) {
    return `Atualização do curso #${id}`;
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return `Removido o curso #${id}`;
  }
}
