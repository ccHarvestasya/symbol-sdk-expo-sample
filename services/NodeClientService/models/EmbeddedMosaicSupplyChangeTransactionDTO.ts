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
import type { MosaicSupplyChangeActionEnum } from './MosaicSupplyChangeActionEnum';
import {
    MosaicSupplyChangeActionEnumFromJSON,
    MosaicSupplyChangeActionEnumFromJSONTyped,
    MosaicSupplyChangeActionEnumToJSON,
} from './MosaicSupplyChangeActionEnum';
import type { NetworkTypeEnum } from './NetworkTypeEnum';
import {
    NetworkTypeEnumFromJSON,
    NetworkTypeEnumFromJSONTyped,
    NetworkTypeEnumToJSON,
} from './NetworkTypeEnum';

/**
 * 
 * @export
 * @interface EmbeddedMosaicSupplyChangeTransactionDTO
 */
export interface EmbeddedMosaicSupplyChangeTransactionDTO {
    /**
     * Public key.
     * @type {string}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    signerPublicKey: string;
    /**
     * Entity version.
     * @type {number}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    version: number;
    /**
     * 
     * @type {NetworkTypeEnum}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    network: NetworkTypeEnum;
    /**
     * 
     * @type {number}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    type: number;
    /**
     * Mosaic identifier. If the most significant bit of byte 0 is set, a namespaceId (alias)
     * is used instead of the real mosaic identifier.
     * 
     * @type {string}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    mosaicId: string;
    /**
     * Absolute amount. An amount of 123456789 (absolute) for a mosaic with divisibility 6 means 123.456789 (relative).
     * @type {string}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    delta: string;
    /**
     * 
     * @type {MosaicSupplyChangeActionEnum}
     * @memberof EmbeddedMosaicSupplyChangeTransactionDTO
     */
    action: MosaicSupplyChangeActionEnum;
}

/**
 * Check if a given object implements the EmbeddedMosaicSupplyChangeTransactionDTO interface.
 */
export function instanceOfEmbeddedMosaicSupplyChangeTransactionDTO(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "signerPublicKey" in value;
    isInstance = isInstance && "version" in value;
    isInstance = isInstance && "network" in value;
    isInstance = isInstance && "type" in value;
    isInstance = isInstance && "mosaicId" in value;
    isInstance = isInstance && "delta" in value;
    isInstance = isInstance && "action" in value;

    return isInstance;
}

export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSON(json: any): EmbeddedMosaicSupplyChangeTransactionDTO {
    return EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json, false);
}

export function EmbeddedMosaicSupplyChangeTransactionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): EmbeddedMosaicSupplyChangeTransactionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'signerPublicKey': json['signerPublicKey'],
        'version': json['version'],
        'network': NetworkTypeEnumFromJSON(json['network']),
        'type': json['type'],
        'mosaicId': json['mosaicId'],
        'delta': json['delta'],
        'action': MosaicSupplyChangeActionEnumFromJSON(json['action']),
    };
}

export function EmbeddedMosaicSupplyChangeTransactionDTOToJSON(value?: EmbeddedMosaicSupplyChangeTransactionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'signerPublicKey': value.signerPublicKey,
        'version': value.version,
        'network': NetworkTypeEnumToJSON(value.network),
        'type': value.type,
        'mosaicId': value.mosaicId,
        'delta': value.delta,
        'action': MosaicSupplyChangeActionEnumToJSON(value.action),
    };
}

