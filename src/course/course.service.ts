import { Injectable } from '@nestjs/common';

@Injectable()
export class CoursesService {
  private courses = [
    { id: 1, name: 'Curso de NestJS', description: 'Aprenda NestJS do básico ao avançado.' },
    { id: 2, name: 'Curso de Angular', description: 'Aprenda Angular com exemplos práticos.' },
    { id: 3, name: 'Curso de Node.js', description: 'Domine Node.js e desenvolva aplicações back-end.' },
  ];

  findAll() {
    return this.courses;
  }
}