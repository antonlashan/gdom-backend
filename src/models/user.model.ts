import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'user',
    createdAt: false,
    updatedAt: false,
})
export default class User extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'id',
    })
    id!: number;

    @Column({
        type: DataType.STRING(100),
        field: 'email',
    })
    email!: string;

    @Column({
        type: DataType.STRING(100),
        field: 'password',
    })
    password!: string;
}
