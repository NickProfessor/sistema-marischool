import { Controller, Get } from '@nestjs/common';
import { CoursesService } from './course.service';

@Controller('courses')
export class CoursesController {
  constructor(private readonly coursesService: CoursesService) {}

  @Get()
  findAll() {
    return this.coursesService.findAll();
  }
}