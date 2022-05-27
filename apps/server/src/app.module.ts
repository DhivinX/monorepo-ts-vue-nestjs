import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { config } from './common';
import { DatabaseModule } from './db/database.module';
import { CliModule } from './cli/cli.module';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';

@Module({
    imports: [
        ConfigModule.forRoot({
            load: [config.yaml],
            isGlobal: true,
        }),

        DatabaseModule,
        CliModule,
        AuthModule,
        UsersModule,
    ],

    controllers: [],
    providers: [],
})
export class AppModule {}
