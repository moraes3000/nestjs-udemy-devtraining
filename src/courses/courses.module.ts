import { CoursesController } from './courses.controller';
import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Module({
  controller: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
