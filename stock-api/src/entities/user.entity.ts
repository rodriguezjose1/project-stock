import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

export enum TypeUser {
    FINAL_USER = 'final_user',
    ADMINISTRATOR = 'administrator',
};

@Entity({ name: 'users' })
export class User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', nullable: false })
    lastname: string;

    @Column({ type: 'enum', nullable: false, enum: TypeUser })
    type: TypeUser;

    @Column({ type: 'varchar', nullable: true })
    address: string;

    @Column({ type: 'varchar', nullable: true })
    city: string;

    @Column({ type: 'varchar', nullable: true })
    phone: string;

    @Column({ type: 'varchar', nullable: true })
    email: string;

    @Column({ type: 'varchar', nullable: true })
    password: string;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

}