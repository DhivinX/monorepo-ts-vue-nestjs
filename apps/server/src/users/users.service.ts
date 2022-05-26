import { PaginationResponse, UserResponse } from '@monorepo-ts-vue-nestjs/shared';
import { UserCreateDto } from '@monorepo-ts-vue-nestjs/shared';
import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@/db/user.entity';
import { hashPassword } from '@/auth/utils/hash-password';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
    constructor(private readonly configService: ConfigService) {}

    async createUser(newUser: UserCreateDto): Promise<UserResponse> {
        const findUser = await User.findOne({
            where: {
                email: newUser.email,
            },
        });

        if (findUser) throw new ConflictException('A user with this email address already exists');

        const user: User = new User();

        user.email = newUser.email;
        user.hash = hashPassword(newUser.password, this.configService.get<string>('keys.pwdsalt'));
        user.firstName = newUser.firstName;
        user.lastName = newUser.lastName;

        await user.save();

        const { id, email, firstName, lastName, createdAt } = user;
        return { id, email, firstName, lastName, createdAt };
    }

    async getUsers(): Promise<PaginationResponse<UserResponse>> {
        return {
            page: 0,
            pages: 0,
            total: 0,
            elements: [],
        };
    }
}
