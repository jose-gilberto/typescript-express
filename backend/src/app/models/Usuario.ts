import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity({ name: "usuarios" })
export class Usuario {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:155 })
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    senha: string;

}