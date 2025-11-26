import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity()
export class Collaborator{
    @PrimaryColumn()
    id: number

    @Column()
    name: string

    @Column()
    email: string

    @Column()
    password_hash: string
}