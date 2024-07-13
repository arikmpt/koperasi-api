import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { validationExceptionFactory } from '@exceptions/validation.exception';
import { TransformInterceptor } from '@interceptors/transform.interceptor';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
    const app = await NestFactory.create(AppModule);

    const config = new DocumentBuilder()
        .setTitle('Koperasi API')
        .setDescription(
            'In this documentation you can see all end points available',
        )
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('docs', app, document);

    const service = new ConfigService();
    app.useGlobalPipes(
        new ValidationPipe({
            exceptionFactory: validationExceptionFactory,
        }),
    );
    app.useGlobalInterceptors(new TransformInterceptor());
    await app.listen(service.get<number>('port'));
}
bootstrap();
