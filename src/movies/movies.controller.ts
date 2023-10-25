import { Controller, Get, Post, Patch, Delete, Param } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('/:movieId')
  getOne(@Param('movieId') movieId: string): string {
    return `This will return a movie with the id: ${movieId}`;
  }

  @Post()
  create(): string {
    return 'This will create movie';
  }

  @Delete('/:movieId')
  remove(@Param('movieId') movieId: string): string {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:movieId')
  patch(@Param('movieId') movieId: string): string {
    return `This will patch a movie with the id: ${movieId}`;
  }
}
