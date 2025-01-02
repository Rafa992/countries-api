import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config'; 
import { AuthModule } from './auth/auth.module'; 
import { UserModule } from './user/user.module';
import { WordsModule } from './words/words.module';

@Module({ 
  imports: [ConfigModule.forRoot(), AuthModule, UserModule, WordsModule],
})
export class AppModule {}