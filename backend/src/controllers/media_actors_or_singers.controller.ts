import { NextFunction, Request, Response } from 'express';
import { User } from '@prisma/client';
import { CreateMediaActorOrSingerDto } from '@/dtos/media_actors_or_singers.dto';
import mediaActorOrSingerService from '@services/media_actor_or_singer.service';

class MediaActorOrSignerController {
  public mediaActorOrSingerService = new mediaActorOrSingerService();

  public getMediaActorsOrSingers = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      const findAllMediaActoersOrSingersData: User[] = await this.mediaActorOrSingerService.findAllMediaActorOrSinger();

      res.status(200).json({ data: findAllMediaActoersOrSingersData, message: 'findAll' });
    } catch (error) {
      next(error);
    }
  };

//   public getUserById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userId = Number(req.params.id);
//       const findOneUserData: User = await this.mediaActorOrSingerService.findMediaActorOrSingerById(userId);

//       res.status(200).json({ data: findOneUserData, message: 'findOne' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public createUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userData: CreateUserDto = req.body;
//       const createUserData: User = await this.mediaActorOrSingerService.createUser(userData);

//       res.status(201).json({ data: createUserData, message: 'created' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public updateUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userId = Number(req.params.id);
//       const userData: CreateUserDto = req.body;
//       const updateUserData: User = await this.mediaActorOrSingerService.updateUser(userId, userData);

//       res.status(200).json({ data: updateUserData, message: 'updated' });
//     } catch (error) {
//       next(error);
//     }
//   };

//   public deleteUser = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
//     try {
//       const userId = Number(req.params.id);
//       const deleteUserData: User = await this.mediaActorOrSingerService.deleteUser(userId);

//       res.status(200).json({ data: deleteUserData, message: 'deleted' });
//     } catch (error) {
//       next(error);
//     }
//   };
}

export default MediaActorOrSignerController;
