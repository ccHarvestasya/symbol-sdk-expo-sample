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
 * Type of namespace:
 * * 0 - Root namespace.
 * * 1 - Subnamespace.
 * 
 * @export
 */
export const NamespaceRegistrationTypeEnum = {
    NUMBER_0: 0,
    NUMBER_1: 1
} as const;
export type NamespaceRegistrationTypeEnum = typeof NamespaceRegistrationTypeEnum[keyof typeof NamespaceRegistrationTypeEnum];


export function NamespaceRegistrationTypeEnumFromJSON(json: any): NamespaceRegistrationTypeEnum {
    return NamespaceRegistrationTypeEnumFromJSONTyped(json, false);
}

export function NamespaceRegistrationTypeEnumFromJSONTyped(json: any, ignoreDiscriminator: boolean): NamespaceRegistrationTypeEnum {
    return json as NamespaceRegistrationTypeEnum;
}

export function NamespaceRegistrationTypeEnumToJSON(value?: NamespaceRegistrationTypeEnum | null): any {
    return value as any;
}

