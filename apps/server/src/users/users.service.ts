import crypto from 'crypto';
import { UserCreateDto } from '@monorepo-ts-vue-nestjs/shared';
import { ConflictException, Injectable } from '@nestjs/common';
import { User } from '@/db/user.entity';
import { hashPassword } from '@/auth/utils/hash-password';
import { ConfigService } from '@nestjs/config';
import { UserProfileResponse } from '@monorepo-ts-vue-nestjs/shared';

@Injectable()
export class UsersService {
    constructor(private readonly configService: ConfigService) {}

    async getProfile(user: User): Promise<UserProfileResponse> {
        const { id, email, firstName, lastName, createdAt } = user;
        const avatar = this.getAvatar(email);
        return { id, email, firstName, lastName, avatar, createdAt };
    }

    async createUser(newUser: UserCreateDto): Promise<UserProfileResponse> {
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

        return await this.getProfile(user);
    }

    getAvatar(email: string): string {
        const hash = crypto.createHash('md5').update(email.toLowerCase()).digest('hex');
        const avatar = `https://www.gravatar.com/avatar/${hash}?s=200&d=mp`;
        return avatar;
    }
}
