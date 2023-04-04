import { Controller, Post, Get, UploadedFile, UseInterceptors, Param } from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { MinioService } from './minio.service';

@Controller('minio')
export class MinioController {
    constructor(private readonly minioService: MinioService) {}

    @Post('File')
    @UseInterceptors(FilesInterceptor('file'))
    async uploadFile(@UploadedFile() file: Express.Multer.File) {
        const fileName = await this.minioService.uploadFile(file);
        const fileUrl = await this.minioService.getFileUrl(fileName);
        return { fileName, fileUrl };
    }

    @Get('file/:fileName')
    async getFile(@Param('fileName') fileName: string) {
        const fileUrl = await this.minioService.getFileUrl(fileName);
        return { fileName, fileUrl };
    }
}
