/* tslint:disable */
/* eslint-disable */
/**
 * People in Need - Springboard Service
 * For the backend supporting the Citi 2023 Techfest Hackathon project.  This backend is meant to be a simple CRUD service for supporting  collaboration between organizations and the beneficiaries supported by them.
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import * as runtime from '../runtime';
import type {
  Need,
} from '../models/index';
import {
    NeedFromJSON,
    NeedToJSON,
} from '../models/index';

export interface FindNeedRequest {
    id: string;
}

/**
 * NeedApi - interface
 * 
 * @export
 * @interface NeedApiInterface
 */
export interface NeedApiInterface {
    /**
     * Retrieve a need based on id. 
     * @summary Retrieve a need.
     * @param {string} id 
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NeedApiInterface
     */
    findNeedRaw(requestParameters: FindNeedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Need>>;

    /**
     * Retrieve a need based on id. 
     * Retrieve a need.
     */
    findNeed(requestParameters: FindNeedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Need>;

    /**
     * Retrieve a list of needs currently tracked. 
     * @summary List needs.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof NeedApiInterface
     */
    listNeedsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Need>>>;

    /**
     * Retrieve a list of needs currently tracked. 
     * List needs.
     */
    listNeeds(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Need>>;

}

/**
 * 
 */
export class NeedApi extends runtime.BaseAPI implements NeedApiInterface {

    /**
     * Retrieve a need based on id. 
     * Retrieve a need.
     */
    async findNeedRaw(requestParameters: FindNeedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Need>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findNeed.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/needs/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => NeedFromJSON(jsonValue));
    }

    /**
     * Retrieve a need based on id. 
     * Retrieve a need.
     */
    async findNeed(requestParameters: FindNeedRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Need> {
        const response = await this.findNeedRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of needs currently tracked. 
     * List needs.
     */
    async listNeedsRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Need>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/needs`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(NeedFromJSON));
    }

    /**
     * Retrieve a list of needs currently tracked. 
     * List needs.
     */
    async listNeeds(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Need>> {
        const response = await this.listNeedsRaw(initOverrides);
        return await response.value();
    }

}
