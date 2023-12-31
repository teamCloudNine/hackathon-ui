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
  Organization,
  OrganizationCreationRequest,
} from '../models/index';
import {
    OrganizationFromJSON,
    OrganizationToJSON,
    OrganizationCreationRequestFromJSON,
    OrganizationCreationRequestToJSON,
} from '../models/index';

export interface CreateOrganizationRequest {
    organizationCreationRequest: OrganizationCreationRequest;
}

export interface FindOrganizationRequest {
    id: string;
}

export interface ListOrganizationsRequest {
    needId?: string;
}

/**
 * OrganizationApi - interface
 * 
 * @export
 * @interface OrganizationApiInterface
 */
export interface OrganizationApiInterface {
    /**
     * Create an organization. 
     * @summary Create an organization.
     * @param {OrganizationCreationRequest} organizationCreationRequest Organization to create
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationApiInterface
     */
    createOrganizationRaw(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Organization>>;

    /**
     * Create an organization. 
     * Create an organization.
     */
    createOrganization(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Organization>;

    /**
     * Retrieve an organization based on id. 
     * @summary Retrieve an organization.
     * @param {string} id Organization identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationApiInterface
     */
    findOrganizationRaw(requestParameters: FindOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Organization>>;

    /**
     * Retrieve an organization based on id. 
     * Retrieve an organization.
     */
    findOrganization(requestParameters: FindOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Organization>;

    /**
     * Retrieve a list of organizations currently tracked. 
     * @summary List organizations.
     * @param {string} [needId] Need identifier
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof OrganizationApiInterface
     */
    listOrganizationsRaw(requestParameters: ListOrganizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Organization>>>;

    /**
     * Retrieve a list of organizations currently tracked. 
     * List organizations.
     */
    listOrganizations(requestParameters: ListOrganizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Organization>>;

}

/**
 * 
 */
export class OrganizationApi extends runtime.BaseAPI implements OrganizationApiInterface {

    /**
     * Create an organization. 
     * Create an organization.
     */
    async createOrganizationRaw(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Organization>> {
        if (requestParameters.organizationCreationRequest === null || requestParameters.organizationCreationRequest === undefined) {
            throw new runtime.RequiredError('organizationCreationRequest','Required parameter requestParameters.organizationCreationRequest was null or undefined when calling createOrganization.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        headerParameters['Content-Type'] = 'application/json';

        const response = await this.request({
            path: `/organizations`,
            method: 'POST',
            headers: headerParameters,
            query: queryParameters,
            body: OrganizationCreationRequestToJSON(requestParameters.organizationCreationRequest),
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

    /**
     * Create an organization. 
     * Create an organization.
     */
    async createOrganization(requestParameters: CreateOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Organization> {
        const response = await this.createOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve an organization based on id. 
     * Retrieve an organization.
     */
    async findOrganizationRaw(requestParameters: FindOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Organization>> {
        if (requestParameters.id === null || requestParameters.id === undefined) {
            throw new runtime.RequiredError('id','Required parameter requestParameters.id was null or undefined when calling findOrganization.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/organizations/{id}`.replace(`{${"id"}}`, encodeURIComponent(String(requestParameters.id))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => OrganizationFromJSON(jsonValue));
    }

    /**
     * Retrieve an organization based on id. 
     * Retrieve an organization.
     */
    async findOrganization(requestParameters: FindOrganizationRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Organization> {
        const response = await this.findOrganizationRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Retrieve a list of organizations currently tracked. 
     * List organizations.
     */
    async listOrganizationsRaw(requestParameters: ListOrganizationsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<Array<Organization>>> {
        const queryParameters: any = {};

        if (requestParameters.needId !== undefined) {
            queryParameters['needId'] = requestParameters.needId;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/organizations`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => jsonValue.map(OrganizationFromJSON));
    }

    /**
     * Retrieve a list of organizations currently tracked. 
     * List organizations.
     */
    async listOrganizations(requestParameters: ListOrganizationsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<Array<Organization>> {
        const response = await this.listOrganizationsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}
