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
import type { ActivityStatus } from "./ActivityStatus";
import {
  ActivityStatusFromJSON,
  ActivityStatusFromJSONTyped,
  ActivityStatusToJSON,
} from "./ActivityStatus";

/**
 *
 * @export
 * @interface ActivityCreationRequest
 */
export interface ActivityCreationRequest {
  /**
   *
   * @type {number}
   * @memberof ActivityCreationRequest
   */
  organizationId?: number;
  /**
   *
   * @type {number}
   * @memberof ActivityCreationRequest
   */
  beneficiaryId?: number;
  /**
   *
   * @type {number}
   * @memberof ActivityCreationRequest
   */
  needId?: number;
  /**
   *
   * @type {Date}
   * @memberof ActivityCreationRequest
   */
  startDate?: Date;
  /**
   *
   * @type {Date}
   * @memberof ActivityCreationRequest
   */
  endDate?: Date;
  /**
   *
   * @type {ActivityStatus}
   * @memberof ActivityCreationRequest
   */
  status?: ActivityStatus;
  /**
   *
   * @type {string}
   * @memberof ActivityCreationRequest
   */
  comments?: string;
}

/**
 * Check if a given object implements the ActivityCreationRequest interface.
 */
export function instanceOfActivityCreationRequest(value: object): boolean {
  let isInstance = true;

  return isInstance;
}

export function ActivityCreationRequestFromJSON(
  json: any
): ActivityCreationRequest {
  return ActivityCreationRequestFromJSONTyped(json, false);
}

export function ActivityCreationRequestFromJSONTyped(
  json: any,
  ignoreDiscriminator: boolean
): ActivityCreationRequest {
  if (json === undefined || json === null) {
    return json;
  }
  return {
    organizationId: !exists(json, "organizationId")
      ? undefined
      : json["organizationId"],
    beneficiaryId: !exists(json, "beneficiaryId")
      ? undefined
      : json["beneficiaryId"],
    needId: !exists(json, "needId") ? undefined : json["needId"],
    startDate: !exists(json, "startDate")
      ? undefined
      : new Date(json["startDate"]),
    endDate: !exists(json, "endDate") ? undefined : new Date(json["endDate"]),
    status: !exists(json, "status")
      ? undefined
      : ActivityStatusFromJSON(json["status"]),
    comments: !exists(json, "comments") ? undefined : json["comments"],
  };
}

export function ActivityCreationRequestToJSON(
  value?: ActivityCreationRequest | null
): any {
  if (value === undefined) {
    return undefined;
  }
  if (value === null) {
    return null;
  }
  return {
    organizationId: value.organizationId,
    beneficiaryId: value.beneficiaryId,
    needId: value.needId,
    startDate:
      value.startDate === undefined ? undefined : value.startDate.toISOString(),
    endDate:
      value.endDate === undefined ? undefined : value.endDate.toISOString(),
    status: ActivityStatusToJSON(value.status),
    comments: value.comments,
  };
}
