import { Entity } from '@loopback/repository';
export declare class Script extends Entity {
    id?: string;
    language?: string;
    title: string;
    questions?: object;
    [prop: string]: any;
    constructor(data?: Partial<Script>);
}
