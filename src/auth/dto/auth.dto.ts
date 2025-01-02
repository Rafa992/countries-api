import { IsEmail, IsString, MinLength } from "class-validator";
export class RegisterDto { 
    @IsEmail() 
    email: string
    @MinLength(6, { 
        message: 'Password must be at least 6 characters long'
    })
    @IsString()
    password: string

    @IsString()
    name?: string

    @IsString()
    laterality: string

    @IsString()
    version: string

    @IsString()
    currentRange: string
}

export class LoginDto { 
    @IsEmail() 
    email: string
    @MinLength(6, {
        message: 'Password must be at least 6 characters long'
    })
    @IsString()
    password: string
}