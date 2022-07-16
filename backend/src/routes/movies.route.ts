import { Router } from 'express';
import { Routes } from '@interfaces/routes.interface';
import MoviesController from '@/controllers/movies.controller';
import { WatchMovieDto } from '@dtos/watch_movie.dto';
import validationMiddleware from '@middlewares/validation.middleware';

class MoviesRoute implements Routes {
  public path = '/movies';
  public router = Router();
  public moviesController = new MoviesController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.moviesController.getMovies);
    this.router.get(`${this.path}/:top_recent(\\d+)`, this.moviesController.getTopRecentMovies);
    this.router.get(`${this.path}/top_popular`, this.moviesController.getTopPopularMovies);
    this.router.post(`${this.path}/watch`, validationMiddleware(WatchMovieDto, 'body'), this.moviesController.getMovieWatchData);
    // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default MoviesRoute;
