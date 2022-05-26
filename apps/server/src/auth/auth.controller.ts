import { AuthLoginDto } from '@monorepo-ts-vue-nestjs/shared';
import { Body, Controller, Post, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { OptionalLocalAuthGuard } from './guards/optional-local-auth.guard';
import { UserSession } from './decorators/user-session.decorator';
import { AuthLoginResponse } from '@monorepo-ts-vue-nestjs/shared';
import { Session } from '@/db/session.entity';

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('/login')
    @UseGuards(OptionalLocalAuthGuard)
    async login(
        @UserSession() session: Session,
        @Body() body: AuthLoginDto,
        @Res({ passthrough: true }) response: Response
    ): Promise<AuthLoginResponse> {
        return this.authService.login(session, body, response);
    }

    @Post('/logout')
    @UseGuards(LocalAuthGuard)
    async logout(@UserSession() session: Session, @Res({ passthrough: true }) response: Response) {
        return this.authService.logout(session, response);
    }
}
