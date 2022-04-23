import { Body, Controller, Get, Param, Post } from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll() {
    return 'Listagem de cursos';
  }

  @Get(':id')
  findOne(@Param() params) {
    return `Curso número #${params.id}`;
  }

  @Post()
  create(@Body() body) {
    return body;
  }
}
