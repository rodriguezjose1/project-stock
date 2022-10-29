import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'products' })
export class Product {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', nullable: false })
    code: string;

    @Column({ type: 'varchar', nullable: false })
    name: string;

    @Column({ type: 'varchar', default: '', nullable: false })
    desc: string;

    @Column({ type: 'varchar', default: '', nullable: false })
    brand: string;

    @Column({ type: 'varchar', default: '', nullable: false })
    category: string;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    price: number;

    @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
    quantity: number;

    @Column({ type: 'decimal',precision: 8, scale: 2, default: 0, nullable: false })
    discount: number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

}