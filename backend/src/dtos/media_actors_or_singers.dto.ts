import {IsString, IsInt, IsDateString } from 'class-validator';

export class CreateMediaActorOrSingerDto {
  @IsString()
  public firstname: string;

  @IsString() 
  public lastname: string;

  @IsInt()
  public height_in_cm: Number;

  @IsDateString()
  public date_of_birth: string;
}