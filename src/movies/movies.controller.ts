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
import { CreateMovieDTO } from './dto/create-movie.dto';

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
  getOne(@Param('movieId') movieId: number): Movie {
    return this.moviesService.getOne(movieId);
  }

  @Post()
  create(@Body() movieData: CreateMovieDTO) {
    return this.moviesService.create(movieData);
  }

  @Delete('/:movieId')
  remove(@Param('movieId') movieId: number) {
    return this.moviesService.deleteOne(movieId);
  }

  @Patch('/:movieId')
  patch(@Param('movieId') movieId: number, @Body() updateData) {
    return this.moviesService.update(movieId, updateData);
  }
}
