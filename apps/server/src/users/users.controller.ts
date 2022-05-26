import { LocalAuthGuard } from '@/auth/guards/local-auth.guard';
import { Controller, Get, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { PaginationResponse, UserResponse } from '@monorepo-ts-vue-nestjs/shared';

@Controller('/users')
@UseGuards(LocalAuthGuard)
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/')
    async getUsers(): Promise<PaginationResponse<UserResponse>> {
        return await this.usersService.getUsers();
    }
}
