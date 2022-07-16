import { IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
  @IsEmail()
  public email: string;

  @IsString()
  public photoURL: string;

  @IsString()
  public phoneNumber: string;

  @IsString()
  public fullname: string;
}
