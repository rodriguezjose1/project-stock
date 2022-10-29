import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
    constructor(
        private userRepository: UserRepository,
    ) { }

    create(userDto: CreateUserDto) {
        return this.userRepository.createUser(userDto);
    }

    get(filters) {
        return this.userRepository.findUsers(filters);
    }

    public async getById(id: string) {
        const user = await this.userRepository.findUserById(id);
        if (!user) throw new NotFoundException('NOT_FOUND_USER');

        return user;
    }

    public async update(id: string, updateUserDto: UpdateUserDto) {
        const user = await this.userRepository.updateUser(id, updateUserDto);
        if (!user) throw new NotFoundException('NOT_FOUND_USER');

        return user;
    }

    remove(id: number) {
        return `This action removes a #${id} user`;
    }
}
