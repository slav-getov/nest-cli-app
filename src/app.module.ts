import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { CatsController } from './cat.controller';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { User } from './user/user.entity';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'nestsqlz',
      username: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: [Product, User],
      password: 'Sdftyu23$&dfrthA',
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProductsModule,
  ],
  controllers: [AppController, CatsController],
  providers: [AppService],
})
export class AppModule {}
