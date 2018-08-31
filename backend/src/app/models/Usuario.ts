import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import * as bcrypt from 'bcryptjs';

@Entity({ name: "usuarios" })
export class Usuario {

    constructor (obj ?: any) {
        if (obj != null) {
            this.nome = obj.nome;
            this.email = obj.email;
            this.senha = obj.senha;
        }
    }

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length:155 })
    nome: string;

    @Column({ unique: true })
    email: string;

    @Column({ select: false })
    senha: string;

    @BeforeInsert()
    criptografarSenha() {
        const hash = bcrypt.hashSync(this.senha, 10);
        this.senha = hash;
    }

}