import { Router } from 'express';
import MediaActorsOrSingers from '@/controllers/media_actors_or_singers.controller';
import { CreateMediaActorOrSingerDto } from '@/dtos/media_actors_or_singers.dto';
import { Routes } from '@interfaces/routes.interface';
import validationMiddleware from '@middlewares/validation.middleware';

class MediaActorsOrSingersRoute implements Routes {
  public path = '/media-actors-or-singer';
  public router = Router();
  public mediaActorsOrSingersController = new MediaActorsOrSingers();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.mediaActorsOrSingersController.getMediaActorsOrSingers);
    // this.router.get(`${this.path}/:id(\\d+)`, this.usersController.getUserById);
    // this.router.post(`${this.path}`, validationMiddleware(CreateUserDto, 'body'), this.usersController.createUser);
    // this.router.put(`${this.path}/:id(\\d+)`, validationMiddleware(CreateUserDto, 'body', true), this.usersController.updateUser);
    // this.router.delete(`${this.path}/:id(\\d+)`, this.usersController.deleteUser);
  }
}

export default MediaActorsOrSingersRoute;
