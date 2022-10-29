import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'saleitems' })
export class SaleItem {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: false })
    sale: number;

    @Column({ type: 'int', nullable: false })
    product: number;

    @Column({ type: 'varchar', nullable: false })
    product_name: number

    @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
    product_price: number

    @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
    product_quantity: number;

    @Column({ type: 'decimal', precision: 8, scale: 2, nullable: false })
    total: number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;

}