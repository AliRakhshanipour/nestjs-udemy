import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = 3000;

  await app.listen(port, () => {
    console.log(`server is running on http://localhost:${port}`);
  });
}
bootstrap();
