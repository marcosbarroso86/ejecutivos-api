import {Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from "typeorm";
import { Code } from "./Code";

@Entity({name:'EJECUTIVO_VENTA'})
export class Executive {

    @PrimaryGeneratedColumn({name:"EJECUTIVO_VENTA_ID"})
    public id: number;

    @Column({name:"NOMBRE"})
    public firstName: string;

    @Column({name:"APELLIDO"})
    public lastName: string;
    
    @Column({name : 'PASS'})
    public password: string    

    @Column({name : 'CUIL'})
    public cuil: string    

    @Column({name : 'EMAIL'})
    public email: string    
    
    @Column({name : 'RED'})
    public network: string   
    
    @Column({name : 'SEXO'})
    public gender: string   

    @Column({name : 'ZONA_FILIAL'})
    public filialZone: string
    
    @Column({name : 'ACTIVO'})
    public active: number;
    
    @Column({name : 'BLOQUEADO'})
    public locked: number;    
}


