import {Entity, model, property} from '@loopback/repository';

@model({settings: {"strict":false}})
export class Script extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id?: string;

  @property({
    type: 'string',
  })
  language?: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'object',
  })
  questions?: object;

  // Define well-known properties here

  // Indexer property to allow additional data
  [prop: string]: any;

  constructor(data?: Partial<Script>) {
    super(data);
  }
}
