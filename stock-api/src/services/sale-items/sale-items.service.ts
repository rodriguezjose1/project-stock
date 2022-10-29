import { Injectable } from '@nestjs/common';
import { SaleItem } from 'src/entities/sale-item.entity';
import { SaleRepository } from 'src/routes/sales/repository/sale.repository';
import { EntityManager } from 'typeorm';
import { SaleItemsRepository } from './repository/sale-item.repository';

@Injectable()
export class SaleItemsService {
    constructor(
        private saleItemsRepository: SaleItemsRepository,
    ) { }

    create(saleItemDto) {
        return this.saleItemsRepository.createSaleItem(saleItemDto);
    }

    async createSaleItems (entityManager: EntityManager, sale, saleData) {
        const saleItems = saleData.map(({ product, item }) => {
            return {
                sale,
                product: product.id,
                product_name: product.name,
                product_price: product.price,
                product_quantity: item.product_quantity,
                total: product.price * item.product_quantity,
            };
        });

        const savedSaleItems = await this.saleItemsRepository.createSaleItems(entityManager, saleItems);

        return savedSaleItems;
    }

    get(filters) {
        return this.saleItemsRepository.findSaleItems(filters);
    }

    public async getById(id: string) {
        // const sale = await this.saleItemsRepository.findSaleById(id);
        // if (!sale) throw new NotFoundException('NOT_FOUND_USER');

        // return sale;
    }

    public async update(id: string, updateSaleItemDto) {
        // const sale = await this.saleItemsRepository.updateSale(id, updateSaleItemDto);
        // if (!sale) throw new NotFoundException('NOT_FOUND_USER');

        // return sale;
    }

    remove(id: number) {
        return `This action removes a #${id} sale`;
    }
}
