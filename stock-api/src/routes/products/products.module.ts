import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { ProductRepository } from './repository/products.repository';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService, ProductRepository],
  exports: [
    ProductsService
  ]
})
export class ProductsModule { }
