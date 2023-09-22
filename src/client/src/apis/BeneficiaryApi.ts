// @ts-ignore
// @ts-nocheck
/* tslint:disable */
/* eslint-disable */
/**
 * People in Need - Springboard Service
 * This backend is meant to be a simple CRUD service for supporting  collaboration between organizations and the beneficiaries supported by them.
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
  Beneficiary,
} from '../models/index';
import {
    BeneficiaryFromJSON,
    BeneficiaryToJSON,
} from '../models/index';

export interface FindBeneficiaryRequest {
    id: number;
}

/**
 * BeneficiaryApi - interface
 * 
 * @export
 * @interface BeneficiaryApiInterface
 */
export interface BeneficiaryApiInterface {
    /**
     * Retrieve a beneficiary based on id. 
     * @summary Retrieve a Beneficiary.
     * @param {number} id Beneficiary identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BeneficiaryApiInterface
     */
    findBeneficiaryRaw(requestParameters: FindBeneficiaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Beneficiary>>;

    /**
     * Retrieve a beneficiary based on id. 
     * Retrieve a Beneficiary.
     */
    findBeneficiary(requestParameters: FindBeneficiaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Beneficiary>;

    /**
     * Retrieve a list of beneficiaries currently tracked. 
     * @summary List beneficiaries.
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof BeneficiaryApiInterface
     */
    listBeneficiariesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Beneficiary>>>;

    /**
     * Retrieve a list of beneficiaries currently tracked. 
     * List beneficiaries.
     */
    listBeneficiaries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Beneficiary>>;

}

/**
 * 
 */
export class BeneficiaryApi extends runtime.BaseAPI implements BeneficiaryApiInterface {

    /**
     * Retrieve a beneficiary based on id. 
     * Retrieve a Beneficiary.
     */
    async findBeneficiaryRaw(requestParameters: FindBeneficiaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Beneficiary>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findBeneficiary.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/beneficiaries/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => BeneficiaryFromJSON(jsonValue));
    }

    /**
     * Retrieve a beneficiary based on id. 
     * Retrieve a Beneficiary.
     */
    async findBeneficiary(requestParameters: FindBeneficiaryRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Beneficiary> {
        const response = await this.findBeneficiaryRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of beneficiaries currently tracked. 
     * List beneficiaries.
     */
    async listBeneficiariesRaw(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Beneficiary>>> {
        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/beneficiaries`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(BeneficiaryFromJSON));
    }

    /**
     * Retrieve a list of beneficiaries currently tracked. 
     * List beneficiaries.
     */
    async listBeneficiaries(initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Beneficiary>> {
        const response = await this.listBeneficiariesRaw(initOverrides);
        return await response.value();
    }

}
