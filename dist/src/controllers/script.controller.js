"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const rest_1 = require("@loopback/rest");
const models_1 = require("../models");
const repositories_1 = require("../repositories");
let ScriptController = class ScriptController {
    constructor(scriptRepository) {
        this.scriptRepository = scriptRepository;
    }
    async create(script) {
        return await this.scriptRepository.create(script);
    }
    async count(where) {
        return await this.scriptRepository.count(where);
    }
    async find(filter) {
        return await this.scriptRepository.find(filter);
    }
    async updateAll(script, where) {
        return await this.scriptRepository.updateAll(script, where);
    }
    async findById(id) {
        return await this.scriptRepository.findById(id);
    }
    async updateById(id, script) {
        await this.scriptRepository.updateById(id, script);
    }
    async replaceById(id, script) {
        await this.scriptRepository.replaceById(id, script);
    }
    async deleteById(id) {
        await this.scriptRepository.deleteById(id);
    }
};
__decorate([
    rest_1.post('/scripts', {
        responses: {
            '200': {
                description: 'Script model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Script } } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Script]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "create", null);
__decorate([
    rest_1.get('/scripts/count', {
        responses: {
            '200': {
                description: 'Script model count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Script))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "count", null);
__decorate([
    rest_1.get('/scripts', {
        responses: {
            '200': {
                description: 'Array of Script model instances',
                content: {
                    'application/json': {
                        schema: { type: 'array', items: { 'x-ts-type': models_1.Script } },
                    },
                },
            },
        },
    }),
    __param(0, rest_1.param.query.object('filter', rest_1.getFilterSchemaFor(models_1.Script))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "find", null);
__decorate([
    rest_1.patch('/scripts', {
        responses: {
            '200': {
                description: 'Script PATCH success count',
                content: { 'application/json': { schema: repository_1.CountSchema } },
            },
        },
    }),
    __param(0, rest_1.requestBody()),
    __param(1, rest_1.param.query.object('where', rest_1.getWhereSchemaFor(models_1.Script))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [models_1.Script, Object]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "updateAll", null);
__decorate([
    rest_1.get('/scripts/{id}', {
        responses: {
            '200': {
                description: 'Script model instance',
                content: { 'application/json': { schema: { 'x-ts-type': models_1.Script } } },
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "findById", null);
__decorate([
    rest_1.patch('/scripts/{id}', {
        responses: {
            '204': {
                description: 'Script PATCH success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Script]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "updateById", null);
__decorate([
    rest_1.put('/scripts/{id}', {
        responses: {
            '204': {
                description: 'Script PUT success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __param(1, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, models_1.Script]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "replaceById", null);
__decorate([
    rest_1.del('/scripts/{id}', {
        responses: {
            '204': {
                description: 'Script DELETE success',
            },
        },
    }),
    __param(0, rest_1.param.path.string('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScriptController.prototype, "deleteById", null);
ScriptController = __decorate([
    __param(0, repository_1.repository(repositories_1.ScriptRepository)),
    __metadata("design:paramtypes", [repositories_1.ScriptRepository])
], ScriptController);
exports.ScriptController = ScriptController;
//# sourceMappingURL=script.controller.js.map