import { Controller, Post, UseGuards } from '@nestjs/common';
import { LocalAuthGuard } from './guards/local.guard';

@Controller('auth')
export class AuthController {
  // @UseGuards(LocalAuthGuard)
  // @Post('login')
  // async login(@Request() req): Promise<any> {
  //   return this.authService.login(req.user); // req.user comes from strategy
  // }
}
