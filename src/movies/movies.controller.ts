import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Param,
  Body,
  Query,
} from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get()
  getAll(): string {
    return 'This will return all movies';
  }

  @Get('search')
  serach(@Query('year') searchingYear: string) {
    return `We are seraching for a movie made after ${searchingYear}`;
  }

  @Get('/:movieId')
  getOne(@Param('movieId') movieId: string): string {
    return `This will return a movie with the id: ${movieId}`;
  }

  @Post()
  create(@Body() movieData): string {
    return movieData;
  }

  @Delete('/:movieId')
  remove(@Param('movieId') movieId: string): string {
    return `This will delete a movie with the id: ${movieId}`;
  }

  @Patch('/:movieId')
  patch(@Param('movieId') movieId: string, @Body() updateData): string {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
