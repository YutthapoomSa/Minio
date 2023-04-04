import { Module } from '@nestjs/common';
import { MinioService } from './minio.service';
import { MinioController } from './minio.controller';
import { MulterModule } from '@nestjs/platform-express';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [MulterModule, ConfigModule],
    controllers: [MinioController],
    providers: [MinioService, ConfigService],
    exports: [MinioService],
})
export class MinioModule {}
