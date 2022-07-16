import { NextFunction, Request, Response } from 'express';
import { Movie } from '@prisma/client';
import MoviesService from '@/services/movies.service';
import { json } from 'envalid';

class MoviesController {
  public moviesServices = new MoviesService();

  public getMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllMoviesData: Movie[] = await this.moviesServices.findAllMovie();

      res.status(200).json({ data: findAllMoviesData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

  public getTopRecentMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const top_recent_number = Number(req.params.top_recent);
      const findTopRecentMovieData: Movie[] = await this.moviesServices.findTopRecentMovie(top_recent_number);

      res.status(200).json({ data: findTopRecentMovieData, message: "findAllTopRecentMovie"});
    } catch (error) {
      next(error);
    }
  }

  public getTopPopularMovies = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findTopPopularMovieData: Movie[] = await this.moviesServices.findTopPopularMovie();
      res.status(200).json({data: findTopPopularMovieData, message: "findAllTopPopularMovie"});
    } catch (error) {
      next(error);
    }
  }

  public getMovieWatchData = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findMovieWatchData: any = await this.moviesServices.getMovieWatchData(req.body.token, req.body.movie_id);
      res.status(200).json({data: findMovieWatchData, message: "findMovieWatchData"})
    } catch (error) {
      next(error);
    }
  }

}

export default MoviesController;
