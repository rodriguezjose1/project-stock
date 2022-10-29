import { Module } from '@nestjs/common';
import { SaleItemsService } from './sale-items.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SaleItemsRepository } from './repository/sale-item.repository';
import { Sale } from 'src/entities/sale.entity';
import { ProductsModule } from 'src/routes/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Sale]),
    ProductsModule
  ],
  providers: [SaleItemsService, SaleItemsRepository],
  exports: [
    SaleItemsService,
  ]
})
export class SaleItemsModule { }
