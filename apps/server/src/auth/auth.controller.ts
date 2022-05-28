import { AuthLoginDto } from '@monorepo-ts-vue-nestjs/shared';
import { Body, Controller, Post, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { AuthSession } from './decorators/auth-session.decorator';
import { AuthLoginResponse } from '@monorepo-ts-vue-nestjs/shared';
import { Session } from '@/db/session.entity';
import { Public } from './decorators/public.decorator';

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Public()
    @Post('/login')
    async login(
        @AuthSession() session: Session,
        @Body() body: AuthLoginDto,
        @Res({ passthrough: true }) response: Response
    ): Promise<AuthLoginResponse> {
        return this.authService.login(session, body, response);
    }

    @Post('/logout')
    async logout(@AuthSession() session: Session, @Res({ passthrough: true }) response: Response) {
        return this.authService.logout(session, response);
    }
}
