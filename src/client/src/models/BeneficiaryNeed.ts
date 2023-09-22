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

import { exists, mapValues } from "../runtime";
import type { Need } from "./Need";
import { NeedFromJSON, NeedFromJSONTyped, NeedToJSON } from "./Need";
import type { Organization } from "./Organization";
import {
  OrganizationFromJSON,
  OrganizationFromJSONTyped,
  OrganizationToJSON,
} from "./Organization";

/**
 *
 * @export
 * @interface BeneficiaryNeed
 */
export interface BeneficiaryNeed {
  /**
   *
   * @type {Need}
   * @memberof BeneficiaryNeed
   */
  need?: Need;
  /**
   *
   * @type {Organization}
   * @memberof BeneficiaryNeed
   */
  organization?: Organization;
}

/**
 * Check if a given object implements the BeneficiaryNeed interface.
 */
export function instanceOfBeneficiaryNeed(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function BeneficiaryNeedFromJSON(json: any): BeneficiaryNeed {
  return BeneficiaryNeedFromJSONTyped(json, false);
}

export function BeneficiaryNeedFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): BeneficiaryNeed {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    need: !exists(json, "need") ? undefined : NeedFromJSON(json["need"]),
    organization: !exists(json, "organization")
      ? undefined
      : OrganizationFromJSON(json["organization"]),
  };
}

export function BeneficiaryNeedToJSON(value?: BeneficiaryNeed | null): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    need: NeedToJSON(value.need),
    organization: OrganizationToJSON(value.organization),
  };
}
