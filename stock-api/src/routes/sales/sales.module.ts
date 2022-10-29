import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Sale } from 'src/entities/sale.entity';
import { SaleItemsModule } from 'src/services/sale-items/sale-items.module';
import { ProductsModule } from '../products/products.module';
import { SaleRepository } from './repository/sale.repository';
import { SalesController } from './sales.controller';
import { SalesService } from './sales.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sale]),
    SaleItemsModule,
    ProductsModule
  ],
  controllers: [SalesController],
  providers: [SalesService, SaleRepository]
})
export class SalesModule {}
