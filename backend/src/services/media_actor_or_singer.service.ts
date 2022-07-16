import { hash } from 'bcrypt';
import { PrismaClient, MediaActorOrSinger } from '@prisma/client';
import { CreateUserDto } from '@dtos/users.dto';
import { HttpException } from '@exceptions/HttpException';
import { isEmpty } from '@utils/util';

class MediaActorOrSingerService {
  public mediaActorOrSinger = new PrismaClient().mediaActorOrSinger;

  public async findAllMediaActorOrSinger(): Promise<MediaActorOrSinger[]> {
    const allMediaActorOrSingers: mediaActorOrSinger[] = await this.mediaActorOrSinger.findMany();
    return allMediaActorOrSingers;
  }

//   public async findMediaActorOrSingerById(id: number): Promise<MediaActorOrSinger> {
//     if (isEmpty(id)) throw new HttpException(400, "You're not Id");

//     const findMediaActorOrSinger: MediaActorOrSinger = await this.mediaActorOrSinger.findUnique({ where: { id: id } });
//     if (!findMediaActorOrSinger) throw new HttpException(409, "You're not user");

//     return findMediaActorOrSinger;
//   }

//   public async createUser(userData: CreateUserDto): Promise<MediaActorOrSinger> {
//     if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

//     const findUser: MediaActorOrSinger = await this.mediaActorOrSinger.findUnique({ where: { email: userData.email } });
//     if (findUser) throw new HttpException(409, `You're email ${userData.email} already exists`);

//     const hashedPassword = await hash(userData.password, 10);
//     const createUserData: MediaActorOrSinger = await this.mediaActorOrSinger.create({ data: { ...userData, password: hashedPassword } });
//     return createUserData;
//   }

//   public async updateUser(userId: number, userData: CreateUserDto): Promise<MediaActorOrSinger> {
//     if (isEmpty(userData)) throw new HttpException(400, "You're not userData");

//     const findUser: MediaActorOrSinger = await this.mediaActorOrSinger.findUnique({ where: { id: userId } });
//     if (!findUser) throw new HttpException(409, "You're not user");

//     const hashedPassword = await hash(userData.password, 10);
//     const updateUserData = await this.mediaActorOrSinger.update({ where: { id: userId }, data: { ...userData, password: hashedPassword } });
//     return updateUserData;
//   }

//   public async deleteUser(userId: number): Promise<MediaActorOrSinger> {
//     if (isEmpty(userId)) throw new HttpException(400, "You're not userId");

//     const findUser: MediaActorOrSinger = await this.mediaActorOrSinger.findUnique({ where: { id: userId } });
//     if (!findUser) throw new HttpException(409, "You're not user");

//     const deleteUserData = await this.mediaActorOrSinger.delete({ where: { id: userId } });
//     return deleteUserData;
//   }
}

export default MediaActorOrSingerService;
