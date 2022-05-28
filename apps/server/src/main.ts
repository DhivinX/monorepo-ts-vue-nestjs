import express from 'express';
import * as http from 'http';
import * as https from 'https';
import fs from 'fs';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';
import helmet from 'helmet';
import { AppModule } from './app.module';
import { YupValidationPipe } from './common';
import { ExpressAdapter } from '@nestjs/platform-express';

async function bootstrap() {
    const server = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(server));
    const configService = app.get(ConfigService);

    //app.setGlobalPrefix('/api');

    app.enableCors({
        origin: configService.get<string[]>('http.cors'),
        credentials: true,
    });

    app.use(helmet());
    app.use(cookieParser());
    app.useGlobalPipes(new YupValidationPipe());

    await app.init();

    if (configService.get<boolean>('http.secure')) {
        const httpsOptions = {
            key: fs.readFileSync(configService.get<string>('http.credentials.key')),
            cert: fs.readFileSync(configService.get<string>('http.credentials.cert')),
        };

        https.createServer(httpsOptions, server).listen(configService.get<number>('http.port'));
    } else {
        http.createServer(server).listen(configService.get<number>('http.port'));
    }
}

bootstrap();
