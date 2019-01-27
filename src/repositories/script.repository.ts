import {DefaultCrudRepository, juggler} from '@loopback/repository';
import {Script} from '../models';
import {MongodbDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class ScriptRepository extends DefaultCrudRepository<
  Script,
  typeof Script.prototype.id
> {
  constructor(
    @inject('datasources.mongodb') dataSource: MongodbDataSource,
  ) {
    super(Script, dataSource);
  }
}
