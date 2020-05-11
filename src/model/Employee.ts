import {Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({name:'COMPANY.EMPLOYEES'})
export class Employee {

    @PrimaryGeneratedColumn({name:"EMP_ID"})
    public id: number;

    @Column({name:"FIRSTNAME"})
    public firstname: string;

    @Column({name:"LASTNAME"})
    public lastname: string;
    
    @Column({name:"EMAIL"})
    public email: string;

    @Column({name : 'JOB'})
    public job: string       
}


