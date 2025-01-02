import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; 
import * as cookieParser from 'cookie-parser' 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api'); 
  app.use(cookieParser()) 
  app.enableCors({ 
    origin: ['http://localhost:3000', 'https://chemical-elements-kappa.vercel.app'],
    credentials: true, 
    exposedHeaders: 'Set-Cookie' 
  })
  const port = process.env.PORT || 4000;
  await app.listen(port); 
}
bootstrap();