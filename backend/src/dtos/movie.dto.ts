

export class CreateMovieDto {
    @IsEmail()
    public email: string;
  
    @IsString()
    public password: string;
}
