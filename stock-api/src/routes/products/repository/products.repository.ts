import { Injectable } from '@nestjs/common';
import { Product } from 'src/entities/product.entity';
import { DataSource, Repository } from 'typeorm';

@Injectable()
export class ProductRepository extends Repository<Product> {

    constructor(private dataSource: DataSource) {
        super(Product, dataSource.createEntityManager());
    }

    public async createProduct(product) {
        return await this.save(product);
    }
    
    public async findProducts({ page, limit, ...filters }) {
        const skip = (page - 1) * limit;
    
        console.log(filters);

        const [products, total] = await this.findAndCount({
            where: {
                ...filters,
            },
            order: { name: 'ASC' },
            take: limit,
            skip,
        });

        return { products, total };
    }


    public async findProductById(id) {
        const product = await this.findOne({ where: { id } });
        if (!product) return null;

        return product;
    }

    public async findProductByCode(code) {
        const product = await this.findOne({ where: { code } });
        if (!product) return null;

        console.log(product);

        return product;
    }

    public async updateProduct(id, product) {
        const productDB = await this.findOne({ where: { id } });
        if (!productDB) return null;

        const updatedProduct = Object.assign(productDB, product);

        return await this.save(updatedProduct);
    }

}