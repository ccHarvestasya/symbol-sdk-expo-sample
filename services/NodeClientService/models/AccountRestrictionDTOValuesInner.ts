/* tslint:disable */
/* eslint-disable */
/**
 * Catapult REST Endpoints
 * OpenAPI Specification of catapult-rest
 *
 * The version of the OpenAPI document: 1.0.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
import type { TransactionTypeEnum } from './TransactionTypeEnum';
import {
    TransactionTypeEnumFromJSON,
    TransactionTypeEnumFromJSONTyped,
    TransactionTypeEnumToJSON,
} from './TransactionTypeEnum';

/**
 * 
 * @export
 * @interface AccountRestrictionDTOValuesInner
 */
export interface AccountRestrictionDTOValuesInner {
}

/**
 * Check if a given object implements the AccountRestrictionDTOValuesInner interface.
 */
export function instanceOfAccountRestrictionDTOValuesInner(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function AccountRestrictionDTOValuesInnerFromJSON(json: any): AccountRestrictionDTOValuesInner {
    return AccountRestrictionDTOValuesInnerFromJSONTyped(json, false);
}

export function AccountRestrictionDTOValuesInnerFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountRestrictionDTOValuesInner {
    return json;
}

export function AccountRestrictionDTOValuesInnerToJSON(value?: AccountRestrictionDTOValuesInner | null): any {
    return value;
}

