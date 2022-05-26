import { UsersService } from '@/users/users.service';
import { ConflictException, Injectable } from '@nestjs/common';
import { Command, Console } from 'nestjs-console';

@Injectable()
@Console()
export class CliService {
    constructor(private readonly usersService: UsersService) {}

    @Command({
        command: 'newuser <email> <password> <firstname> <lastname>',
        description: 'Create new user account',
    })
    async commandCreateUser(
        email: string,
        password: string,
        firstName: string,
        lastName: string
    ): Promise<void> {
        try {
            await this.usersService.createUser({
                email,
                password,
                firstName,
                lastName,
            });

            console.log('Account has been created');
        } catch (e) {
            if (e instanceof ConflictException) {
                console.log('Account already exists');
            }
        }
    }
}
