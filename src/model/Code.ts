import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import { Executive } from "./Executive";

@Entity({name:'CODIGO_VALIDACION'})
export class Code {

    @PrimaryGeneratedColumn({name:"CODIGO_VALIDACION_ID"})
    public id: number;

    @Column({name:"CODIGO_VALIDACION"})
    public code: string;

    @Column({name:"FECHA_CREACION"})
    public creationDate: Date;

    @ManyToOne(type => Executive)
    @JoinColumn({ name: 'ID_EJECUTIVO_VENTA', referencedColumnName: 'id' })
    executive: Executive;
    
}


