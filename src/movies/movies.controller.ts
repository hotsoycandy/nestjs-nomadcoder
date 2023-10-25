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
import { MoviesService } from './movies.service';
import { Movie } from './entities/movie.entity';

@Controller('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  getAll(): Movie[] {
    return this.moviesService.getAll();
  }

  @Get('search')
  serach(@Query('year') searchingYear: string) {
    return `We are seraching for a movie made after ${searchingYear}`;
  }

  @Get('/:movieId')
  getOne(@Param('movieId') movieId: string): Movie {
    return this.moviesService.getOne(parseInt(movieId));
  }

  @Post()
  create(@Body() movieData) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:movieId')
  remove(@Param('movieId') movieId: string) {
    return this.moviesService.deleteOne(parseInt(movieId));
  }

  @Patch('/:movieId')
  patch(@Param('movieId') movieId: string, @Body() updateData): string {
    return {
      updateMovie: movieId,
      ...updateData,
    };
  }
}
