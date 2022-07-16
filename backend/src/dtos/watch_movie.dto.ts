import { IsEmail, IsString } from 'class-validator';

export class WatchMovieDto {
  @IsString()
  public token: string;

  @IsString()
  public movie_id: string;
}
