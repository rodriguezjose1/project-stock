import { Injectable } from '@nestjs/common';
import { Sale } from 'src/entities/sale.entity';
import { DataSource, EntityManager, QueryRunner, Repository } from 'typeorm';

@Injectable()
export class SaleRepository extends Repository<Sale> {

    constructor(private dataSource: DataSource) {
        super(Sale, dataSource.createEntityManager());
    }

    getTransactionHandler(): any {
        const runner = this.dataSource.createQueryRunner();
        return {
            transactionHandler: runner,
            manager: runner.manager
        }
    }

    public async createSale(manager: EntityManager, sale) {
        return await manager.save(Sale, sale);
    }
    
    
    public async findSales({ page, limit, ...filters }) {
        const skip = (page - 1) * limit;

        const [sales, total] = await this.findAndCount({
            // order: { lastname: 'ASC' },
            take: limit,
            skip,
        });

        return { sales, total };
    }


}