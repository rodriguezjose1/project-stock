import { Injectable } from '@nestjs/common';
import { SaleItem } from 'src/entities/sale-item.entity';
import { DataSource, EntityManager, FindOptionsOrder, FindOptionsOrderValue, Repository } from 'typeorm';

@Injectable()
export class SaleItemsRepository extends Repository<SaleItem> {

    constructor(private dataSource: DataSource) {
        super(SaleItem, dataSource.createEntityManager());
    }

    public async createSaleItem(saleItem) {
        return await this.save(saleItem);
    }

    public async createSaleItems(manager: EntityManager, saleItems) {
        return await manager.createQueryBuilder().insert().into(SaleItem).values(saleItems).execute();
    }

    public async findSaleItems({ page, limit, ...filters }) {
        const skip = (page - 1) * limit;

        const [saleItems, total] = await this.findAndCount({
            // order: { lastname: 'ASC' },
            take: limit,
            skip,
        });

        return { saleItems, total };
    }


}