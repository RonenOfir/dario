
import { IsEmail, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateUserDto {
    @IsNumber()
    id: number;

    @IsNotEmpty()
    fname: string;

    @IsNotEmpty()
    lname: string;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    password: string;
}