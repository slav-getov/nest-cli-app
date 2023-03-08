import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './client/client.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsModule } from './products/products.module';
import { Product } from './products/product.entity';
import { Client } from './client/client.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      database: 'nestsqlz',
      username: 'postgres',
      host: 'localhost',
      port: 5432,
      entities: [Product, Client],
      password: 'Sdftyu23$&dfrthA',
      synchronize: true,
    }),
    AuthModule,
    UserModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
