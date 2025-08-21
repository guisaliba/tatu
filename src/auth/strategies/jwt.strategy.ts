import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly usersService: UsersService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: 'secretKey',
    });
  }

  async validate(payload: any): Promise<any> {
    // payload = { sub: userId, username: '...' } if you encoded it that way
    // const user: PublicUser = await this.usersService.findOne(payload.sub);

    // if (!user) {
    //   throw new UnauthorizedException('User no longer exists');
    // }

    // return { id: user.id, username: user.username, roles: user.roles };

    const user = '${payload.username} validated';
    return user as any; // Adjust the return type as needed
  }
}
