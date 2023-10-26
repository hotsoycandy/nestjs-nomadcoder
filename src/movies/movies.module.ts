import { Module } from '@nestjs/common';

@Module({
  imports: [MoviesModule],
  controllers: [MoviesController],
  providers: [MoviesService],
})
export class MoviesModule {}
