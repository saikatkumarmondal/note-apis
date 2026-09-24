import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class RegisterDto{
    @IsNotEmpty()
    name: string;
    @IsEmail()
    email: string;
    @IsStrongPassword({minLength: 8})
    password: string;
}