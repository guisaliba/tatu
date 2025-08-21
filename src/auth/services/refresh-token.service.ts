// import { hash, compare } from 'bcrypt';
// import { JwtService } from '@nestjs/jwt';
// import { PrismaService } from 'src/shared/services/prisma.service';
// import { Injectable, UnauthorizedException } from '@nestjs/common';

// @Injectable()
// export class RefreshTokenService {
//   constructor(
//     private prisma: PrismaService,
//     private jwt: JwtService
//   ) {}

//   async validateRefreshToken(token: string) {
//     // 1. Decode & verify JWT signature
//     const payload = this.jwt.verify(token, {
//       secret: process.env.JWT_REFRESH_SECRET,
//     });
//     if (payload.tokenType !== 'refresh') {
//       throw new UnauthorizedException('Invalid token type');
//     }

//     // 2. Lookup in DB
//     const tokenHash = await hash(token, 10);
//     const stored = await this.prisma.refreshToken.findFirst({
//       where: { userId: payload.sub, revoked: false },
//     });

//     if (!stored || !(await compare(token, stored.tokenHash))) {
//       throw new UnauthorizedException('Refresh token not valid');
//     }

//     // 3. Check expiration
//     if (stored.expiresAt < new Date()) {
//       throw new UnauthorizedException('Token expired');
//     }

//     return payload.sub; // userId
//   }
// }
