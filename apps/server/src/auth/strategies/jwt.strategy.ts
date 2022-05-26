import { Strategy } from 'passport-jwt';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ConfigService } from '@nestjs/config';
import { Session } from '@/db/session.entity';

export interface JwtPayload {
    id: string;
}

function cookieExtractor(req: any): null | string {
    return req && req.cookies ? (req.cookies?.jwt as string) ?? null : null;
}

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy, 'local') {
    constructor(configService: ConfigService) {
        super({
            jwtFromRequest: cookieExtractor,
            secretOrKey: configService.get<string>('keys.jwt'),
        });
    }

    async validate(payload: JwtPayload, done: (error, userSession) => void) {
        if (!payload || !payload.id) {
            return done(new UnauthorizedException(), false);
        }

        const userSession = await Session.findOne({
            relations: ['user'],

            where: {
                token: payload.id,
            },
        });

        if (!userSession) {
            return done(new UnauthorizedException(), false);
        }

        userSession.lastSeen = new Date();
        userSession.save();

        done(null, userSession);
    }
}
