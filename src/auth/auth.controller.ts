import { Body, Controller, Get, Post } from '@nestjs/common';
import { RegisterDto } from './dto/register.dto.js';
import { AuthService } from './auth.service.js';

@Controller('api')
export class AuthController {
    
    constructor(private readonly authService: AuthService){}

    @Post("register")
    register(@Body() registerDto: RegisterDto){
        return this.authService.register();
    }
}
