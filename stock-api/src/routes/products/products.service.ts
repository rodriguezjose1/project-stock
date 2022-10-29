import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductRepository } from './repository/products.repository';

@Injectable()
export class ProductsService {
    constructor(
        private productRepository: ProductRepository,
    ) { }

    create(productDto: CreateProductDto) {
        return this.productRepository.createProduct(productDto);
    }

    get(filters) {
        return this.productRepository.findProducts(filters);
    }

    getByCode(filters) {
        return this.productRepository.findProductByCode(filters);
    }

    public async getById(id: string) {
        const product = await this.productRepository.findProductById(id);
        if (!product) throw new NotFoundException('NOT_FOUND_PRODUCT');

        return product;
    }

    public async update(id: string, updateProductDto: UpdateProductDto) {
        const product = await this.productRepository.updateProduct(id, updateProductDto);
        if (!product) throw new NotFoundException('NOT_FOUND_PRODUCT');

        return product;
    }

    remove(id: number) {
        return `This action removes a #${id} product`;
    }
}
