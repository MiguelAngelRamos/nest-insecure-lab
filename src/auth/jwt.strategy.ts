import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: true, // Ingorar expiración del token, no recomendado para producción
      secretOrKey: 'intracorp-secret-key-2024-prod!', // JWT SECRETO HARCODEADO, NO USAR EN PRODUCCIÓN
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email, rol: payload.rol };
  }
}
