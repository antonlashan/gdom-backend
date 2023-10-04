import { Model, Table, Column, DataType } from 'sequelize-typescript';

@Table({
    tableName: 'sports_event',
    createdAt: false,
    updatedAt: false,
})
export default class SportsEvent extends Model {
    @Column({
        type: DataType.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        field: 'event_id',
    })
    eventId!: number;

    @Column({
        type: DataType.STRING(100),
        field: 'event_name',
    })
    eventName!: string;

    @Column({
        type: DataType.DECIMAL(10, 2),
        field: 'odds',
    })
    get odds(): number {
        return parseFloat(this.getDataValue('odds'));
    }

    set odds(value: number) {
        this.setDataValue('odds', value);
    }
}
