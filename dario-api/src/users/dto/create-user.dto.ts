
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsNotEmpty()
    name: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}