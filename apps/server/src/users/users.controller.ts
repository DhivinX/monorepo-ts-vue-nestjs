import { Controller, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { AuthUser } from '@/auth/decorators/auth-user.decorator';
import { User } from '@/db/user.entity';

@Controller('/users')
export class UsersController {
    constructor(private readonly usersService: UsersService) {}

    @Get('/current')
    async getCurrent(@AuthUser() user: User) {
        return await this.usersService.getProfile(user);
    }
}
