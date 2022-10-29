import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity({ name: 'sales' })
export class Sale {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'int', nullable: true, default: null })
    customer: number;

    @Column({ type: 'int', nullable: true, default: null })
    operator: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    total: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    subtotal: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    money: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false })
    change: number;

    @Column({ type: 'decimal', precision: 10, scale: 2, nullable: false})
    items_quantity: number;

    @CreateDateColumn({ type: "timestamp" })
    created_at: Date;

    @UpdateDateColumn({ type: "timestamp" })
    updated_at: Date;
}