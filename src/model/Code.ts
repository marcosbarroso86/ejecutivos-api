import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Executive } from "./Executive";

@Entity({name:'CLAVE'})
export class Code {

    @PrimaryGeneratedColumn({name:"CLAVE_ID"})
    public id: number;

    @Column({name:"CLAVE"})
    public code: string;

    @ManyToOne(type => Executive)
    @JoinColumn({ name: 'ID_EJECUTIVO', referencedColumnName: 'id' })
    executive: Executive;
    
}


