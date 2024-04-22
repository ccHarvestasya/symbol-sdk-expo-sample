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


/**
 * Type of account key:
 * * 0 - Unset.
 * * 1 - Linked account public key.
 * * 2 - Node public key on which remote is allowed to harvest.
 * * 4 - VRF public key.
 * 
 * @export
 */
export const AccountKeyTypeFlagsEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1,
    NUMBER_2: 2,
    NUMBER_4: 4
} as const;
export type AccountKeyTypeFlagsEnum = typeof AccountKeyTypeFlagsEnum[keyof typeof AccountKeyTypeFlagsEnum];


export function AccountKeyTypeFlagsEnumFromJSON(json: any): AccountKeyTypeFlagsEnum {
    return AccountKeyTypeFlagsEnumFromJSONTyped(json, false);
}

export function AccountKeyTypeFlagsEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): AccountKeyTypeFlagsEnum {
    return json as AccountKeyTypeFlagsEnum;
}

export function AccountKeyTypeFlagsEnumToJSON(value?: AccountKeyTypeFlagsEnum | null): any {
    return value as any;
}

