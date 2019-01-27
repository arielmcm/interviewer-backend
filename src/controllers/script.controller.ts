import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Script} from '../models';
import {ScriptRepository} from '../repositories';

export class ScriptController {
  constructor(
    @repository(ScriptRepository)
    public scriptRepository : ScriptRepository,
  ) {}

  @post('/scripts', {
    responses: {
      '200': {
        description: 'Script model instance',
        content: {'application/json': {schema: {'x-ts-type': Script}}},
      },
    },
  })
  async create(@requestBody() script: Script): Promise<Script> {
    return await this.scriptRepository.create(script);
  }

  @get('/scripts/count', {
    responses: {
      '200': {
        description: 'Script model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Script)) where?: Where,
  ): Promise<Count> {
    return await this.scriptRepository.count(where);
  }

  @get('/scripts', {
    responses: {
      '200': {
        description: 'Array of Script model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Script}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Script)) filter?: Filter,
  ): Promise<Script[]> {
    return await this.scriptRepository.find(filter);
  }

  @patch('/scripts', {
    responses: {
      '200': {
        description: 'Script PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() script: Script,
    @param.query.object('where', getWhereSchemaFor(Script)) where?: Where,
  ): Promise<Count> {
    return await this.scriptRepository.updateAll(script, where);
  }

  @get('/scripts/{id}', {
    responses: {
      '200': {
        description: 'Script model instance',
        content: {'application/json': {schema: {'x-ts-type': Script}}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Script> {
    return await this.scriptRepository.findById(id);
  }

  @patch('/scripts/{id}', {
    responses: {
      '204': {
        description: 'Script PATCH success',
      },
    },
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() script: Script,
  ): Promise<void> {
    await this.scriptRepository.updateById(id, script);
  }

  @put('/scripts/{id}', {
    responses: {
      '204': {
        description: 'Script PUT success',
      },
    },
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() script: Script,
  ): Promise<void> {
    await this.scriptRepository.replaceById(id, script);
  }

  @del('/scripts/{id}', {
    responses: {
      '204': {
        description: 'Script DELETE success',
      },
    },
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.scriptRepository.deleteById(id);
  }
}
