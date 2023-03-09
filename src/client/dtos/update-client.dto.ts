import { IsEmail, IsString, IsOptional, IsNotEmpty } from 'class-validator';

export class UpdateClientDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  lastName: string;

  @IsEmail()
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  email: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  password: string;
}
