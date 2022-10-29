import { Controller, Get, Post, Body, Patch, Param, Delete, Query, Put } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }

    @Post()
    public async create(@Body() productDto: CreateProductDto) {
        console.log(productDto);
        const product = await this.productsService.create(productDto);

        return {
            success: true,
            data: {
                product
            }
        };
    }
    @Get()
    async get(@Query() query: any) {
        const response = await this.productsService.get(query);
        return {
            success: true,
            data: response
        }
    }

    @Get('codes/:code')
    async getByCode(@Param('code') code: any) {
        const product = await this.productsService.getByCode(code);
        return {
            success: true,
            data: {
                product
            }
        }
    }

    @Get(':id')
    public async getById(@Param('id') id: string) {
        const product = await this.productsService.getById(id);

        return {
            success: true,
            data: {
                product
            }
        };
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() updateUserDto: UpdateProductDto) {
        const product = await this.productsService.update(id, updateUserDto);

        return {
            success: true,
            data: {
                product
            }
        };
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.productsService.remove(+id);
    }
}
