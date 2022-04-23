import { CoursesController } from './courses.controller';
import { Module } from '@nestjs/common';
import { CoursesService } from './courses.service';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule { }
