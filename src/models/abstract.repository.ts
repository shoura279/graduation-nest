import { Document, FilterQuery, Model, ProjectionType, QueryOptions } from "mongoose";

export abstract class AbstractRepository<ay7aga> {
    constructor(private nModel: Model<ay7aga & Document>) {
    }

    public create(item: ay7aga) {
        const createdDocument = new this.nModel(item)
        return createdDocument.save()
    }

    public getOne(
        query: FilterQuery<ay7aga>,
        params?: ProjectionType<ay7aga>,
        options?: QueryOptions<ay7aga>
    ) {
        return this.nModel.findOne(query, params, options)
    }

    public update(query: FilterQuery<ay7aga>, item: any, options?: QueryOptions) {
        return this.nModel.findOneAndUpdate(query, item, options)
    }

    public async exists(query: FilterQuery<ay7aga>): Promise<boolean> {
        const exist = await this.nModel.findOne(query)
        return exist ? true : false;
    }

    public delete(query: FilterQuery<ay7aga>) {
        return this.nModel.deleteOne(query)
    }
}