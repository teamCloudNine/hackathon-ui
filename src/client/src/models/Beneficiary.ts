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

import { exists, mapValues } from '../runtime';
import type { BeneficiaryNeed } from './BeneficiaryNeed';
import {
    BeneficiaryNeedFromJSON,
    BeneficiaryNeedFromJSONTyped,
    BeneficiaryNeedToJSON,
} from './BeneficiaryNeed';

/**
 * 
 * @export
 * @interface Beneficiary
 */
export interface Beneficiary {
    /**
     * 
     * @type {number}
     * @memberof Beneficiary
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof Beneficiary
     */
    firstName?: string;
    /**
     * 
     * @type {string}
     * @memberof Beneficiary
     */
    lastName?: string;
    /**
     * 
     * @type {Date}
     * @memberof Beneficiary
     */
    dateOfBirth?: Date;
    /**
     * 
     * @type {string}
     * @memberof Beneficiary
     */
    identity?: string;
    /**
     * 
     * @type {string}
     * @memberof Beneficiary
     */
    phoneNumber?: string;
    /**
     * 
     * @type {number}
     * @memberof Beneficiary
     */
    cabinNumber?: number;
    /**
     * 
     * @type {Array<BeneficiaryNeed>}
     * @memberof Beneficiary
     */
    needs?: Array<BeneficiaryNeed>;
    /**
     * 
     * @type {string}
     * @memberof Beneficiary
     */
    comments?: string;
}

/**
 * Check if a given object implements the Beneficiary interface.
 */
export function instanceOfBeneficiary(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function BeneficiaryFromJSON(json: any): Beneficiary {
    return BeneficiaryFromJSONTyped(json, false);
}

export function BeneficiaryFromJSONTyped(json: any, ignoreDiscriminator: boolean): Beneficiary {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'firstName': !exists(json, 'firstName') ? undefined : json['firstName'],
        'lastName': !exists(json, 'lastName') ? undefined : json['lastName'],
        'dateOfBirth': !exists(json, 'dateOfBirth') ? undefined : (new Date(json['dateOfBirth'])),
        'identity': !exists(json, 'identity') ? undefined : json['identity'],
        'phoneNumber': !exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'cabinNumber': !exists(json, 'cabinNumber') ? undefined : json['cabinNumber'],
        'needs': !exists(json, 'needs') ? undefined : ((json['needs'] as Array<any>).map(BeneficiaryNeedFromJSON)),
        'comments': !exists(json, 'comments') ? undefined : json['comments'],
    };
}

export function BeneficiaryToJSON(value?: Beneficiary | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'firstName': value.firstName,
        'lastName': value.lastName,
        'dateOfBirth': value.dateOfBirth === undefined ? undefined : (value.dateOfBirth.toISOString()),
        'identity': value.identity,
        'phoneNumber': value.phoneNumber,
        'cabinNumber': value.cabinNumber,
        'needs': value.needs === undefined ? undefined : ((value.needs as Array<any>).map(BeneficiaryNeedToJSON)),
        'comments': value.comments,
    };
}

