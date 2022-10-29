import { Body, Controller, Delete, Get, Param, Post, Put, Query } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    @Post()
    public async create(@Body() userDto: CreateUserDto) {
        console.log(userDto);
        const user = await this.usersService.create(userDto);

        return {
            success: true,
            data: {
                user
            }
        };
    }
    @Get()
    async get(@Query() query: any) {
        const response = await this.usersService.get(query);
        return {
            success: true,
            data: response
        }
    }

    @Get(':id')
    public async getById(@Param('id') id: string) {
        const user = await this.usersService.getById(id);

        return {
            success: true,
            data: {
                user
            }
        };
    }

    @Put(':id')
    public async update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
        const user = await this.usersService.update(id, updateUserDto);

        return {
            success: true,
            data: {
                user
            }
        };
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersService.remove(+id);
    }
}
