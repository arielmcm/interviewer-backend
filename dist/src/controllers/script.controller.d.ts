import { Count, Filter, Where } from '@loopback/repository';
import { Script } from '../models';
import { ScriptRepository } from '../repositories';
export declare class ScriptController {
    scriptRepository: ScriptRepository;
    constructor(scriptRepository: ScriptRepository);
    create(script: Script): Promise<Script>;
    count(where?: Where): Promise<Count>;
    find(filter?: Filter): Promise<Script[]>;
    updateAll(script: Script, where?: Where): Promise<Count>;
    findById(id: string): Promise<Script>;
    updateById(id: string, script: Script): Promise<void>;
    replaceById(id: string, script: Script): Promise<void>;
    deleteById(id: string): Promise<void>;
}
