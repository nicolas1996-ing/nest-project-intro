import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule); // creación app de nest
  await app.listen(3000); // puerto donde se ejecuta la app
}
bootstrap();
