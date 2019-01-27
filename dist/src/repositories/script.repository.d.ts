import { DefaultCrudRepository } from '@loopback/repository';
import { Script } from '../models';
import { MongodbDataSource } from '../datasources';
export declare class ScriptRepository extends DefaultCrudRepository<Script, typeof Script.prototype.id> {
    constructor(dataSource: MongodbDataSource);
}
