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
 * Indicates how to sort the results: 
 * * ``asc`` - ascending
 * * ``desc`` - descending
 * 
 * @export
 */
export const Order = {
    Asc: 'asc',
    Desc: 'desc'
} as const;
export type Order = typeof Order[keyof typeof Order];


export function OrderFromJSON(json: any): Order {
    return OrderFromJSONTyped(json, false);
}

export function OrderFromJSONTyped(json: any, ignoreDiscriminator: boolean): Order {
    return json as Order;
}

export function OrderToJSON(value?: Order | null): any {
    return value as any;
}
