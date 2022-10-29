import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateSaleDto } from './dto/create-sale.dto';
import { UpdateSaleDto } from './dto/update-sale.dto';
import { SalesService } from './sales.service';

@Controller('sales')
export class SalesController {
    constructor(private readonly salesService: SalesService) { }

    @Post()
    public async create(@Body() saleDto: CreateSaleDto) {
        const sale = await this.salesService.create(saleDto);

        return {
            success: true,
            data: {
                sale
            }
        };
    }
    @Get()
    async get(@Query() query: any) {
        const response = await this.salesService.get(query);
        return {
            success: true,
            data: response
        }
    }

    @Get(':id')
    public async getById(@Param('id') id: string) {
        const sale = await this.salesService.getById(id);

        return {
            success: true,
            data: {
                sale
            }
        };
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() updateSaleDto: UpdateSaleDto) {
        const sale = await this.salesService.update(id, updateSaleDto);

        return {
            success: true,
            data: {
                sale
            }
        };
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.salesService.remove(+id);
    }
}
