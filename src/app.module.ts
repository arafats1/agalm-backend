import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { CategoriesModule } from './categories/categories.module';
import { ItemsModule } from './items/items.module';
import { UsersModule } from './users/users.module';
import { ImagesModule } from './images/images.module';

@Module({
  imports: [PrismaModule, CategoriesModule, ItemsModule, UsersModule, ImagesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
