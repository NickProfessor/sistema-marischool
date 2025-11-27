import { Module } from '@nestjs/common';
import { CoursesService } from './course.service';
import { CoursesController } from './course.controller';

@Module({
  controllers: [CoursesController],
  providers: [CoursesService],
})
export class CoursesModule {}