import { Injectable } from '@nestjs/common';
import { Sale } from 'src/entities/sale.entity';
import { SaleItemsService } from 'src/services/sale-items/sale-items.service';
import { ProductsService } from '../products/products.service';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SaleRepository } from './repository/sale.repository';

@Injectable()
export class SalesService {
    constructor(
        private saleRepository: SaleRepository,
        private saleItemsService: SaleItemsService,
        private productsService: ProductsService,
    ) {}

    async create(saleDto: any) {
        const { transactionHandler, manager} = this.saleRepository.getTransactionHandler();

        try {
            await transactionHandler.startTransaction();
 
            const { items, ...sale } = saleDto;
            const products = [];
            let total = 0, itemsQuantity = 0;
    
            const requests = items.map(async(item) => {
                const product = await this.productsService.getById(item.product);
                total += product.price * item.product_quantity;
                itemsQuantity += item.product_quantity;
                
                products.push({
                    product,
                    item
                });
            });
    
            await Promise.all(requests);
            
            sale.items_quantity = itemsQuantity;
            sale.total = total;
            sale.subtotal = total;
    
            const savedSale = await this.saleRepository.createSale(manager, sale);
            await this.saleItemsService.createSaleItems(manager, savedSale.id, products);
    
            await transactionHandler.commitTransaction();
            return savedSale;
        } catch (error) {
            await transactionHandler.rollbackTransaction();
        } finally {
            await transactionHandler.release();
        }
    }

    get(filters) {
        return this.saleRepository.findSales(filters);
    }

    public async getById(id: string) {
        // const sale = await this.saleRepository.findSaleById(id);
        // if (!sale) throw new NotFoundException('NOT_FOUND_USER');

        // return sale;
    }

    public async update(id: string, updateSaleDto: UpdateSaleDto) {
        // const sale = await this.saleRepository.updateSale(id, updateSaleDto);
        // if (!sale) throw new NotFoundException('NOT_FOUND_USER');

        // return sale;
    }

    remove(id: number) {
        return `This action removes a #${id} sale`;
    }
}
