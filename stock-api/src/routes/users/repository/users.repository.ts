import { Injectable } from '@nestjs/common';
import { User } from 'src/entities/user.entity';
import { DataSource, FindOptionsOrder, FindOptionsOrderValue, Repository } from 'typeorm';

@Injectable()
export class UserRepository extends Repository<User> {

    constructor(private dataSource: DataSource) {
        super(User, dataSource.createEntityManager());
    }

    public async createUser(user) {
        return await this.save(user);
    }
    
    public async findUsers({ page, limit, ...filters }) {
        const skip = (page - 1) * limit;

        const [users, total] = await this.findAndCount({
            order: { lastname: 'ASC' },
            take: limit,
            skip,
        });

        return { users, total };
    }

    public async findUserById(id) {
        const user = await this.findOne({ where: { id } });
        if (!user) return null;

        return user;
    }

    public async updateUser(id, user) {
        const userDB = await this.findOne({ where: { id } });
        if (!userDB) return null;

        const updatedUser = Object.assign(userDB, user);

        return await this.save(updatedUser);
    }

}