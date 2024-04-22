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


import * as runtime from '../runtime';
import type {
  AccountRestrictionsInfoDTO,
  AccountRestrictionsPage,
  MerkleStateInfoDTO,
  ModelError,
  Order,
} from '../models/index';
import {
    AccountRestrictionsInfoDTOFromJSON,
    AccountRestrictionsInfoDTOToJSON,
    AccountRestrictionsPageFromJSON,
    AccountRestrictionsPageToJSON,
    MerkleStateInfoDTOFromJSON,
    MerkleStateInfoDTOToJSON,
    ModelErrorFromJSON,
    ModelErrorToJSON,
    OrderFromJSON,
    OrderToJSON,
} from '../models/index';

export interface GetAccountRestrictionsRequest {
    address: string;
}

export interface GetAccountRestrictionsMerkleRequest {
    address: string;
}

export interface SearchAccountRestrictionsRequest {
    address?: string;
    pageSize?: number;
    pageNumber?: number;
    offset?: string;
    order?: Order;
}

/**
 * 
 */
export class RestrictionAccountRoutesApi extends runtime.BaseAPI {

    /**
     * Returns the account restrictions for a given address.
     * Get the account restrictions
     */
    async getAccountRestrictionsRaw(requestParameters: GetAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRestrictionsInfoDTO>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getAccountRestrictions.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/restrictions/account/{address}`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountRestrictionsInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns the account restrictions for a given address.
     * Get the account restrictions
     */
    async getAccountRestrictions(requestParameters: GetAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRestrictionsInfoDTO> {
        const response = await this.getAccountRestrictionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns the account restrictions merkle for a given address.
     * Get the account restrictions merkle
     */
    async getAccountRestrictionsMerkleRaw(requestParameters: GetAccountRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<MerkleStateInfoDTO>> {
        if (requestParameters.address === null || requestParameters.address === undefined) {
            throw new runtime.RequiredError('address','Required parameter requestParameters.address was null or undefined when calling getAccountRestrictionsMerkle.');
        }

        const queryParameters: any = {};

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/restrictions/account/{address}/merkle`.replace(`{${"address"}}`, encodeURIComponent(String(requestParameters.address))),
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => MerkleStateInfoDTOFromJSON(jsonValue));
    }

    /**
     * Returns the account restrictions merkle for a given address.
     * Get the account restrictions merkle
     */
    async getAccountRestrictionsMerkle(requestParameters: GetAccountRestrictionsMerkleRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<MerkleStateInfoDTO> {
        const response = await this.getAccountRestrictionsMerkleRaw(requestParameters, initOverrides);
        return await response.value();
    }

    /**
     * Returns an array of account restrictions.
     * Search account restrictions
     */
    async searchAccountRestrictionsRaw(requestParameters: SearchAccountRestrictionsRequest, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<runtime.ApiResponse<AccountRestrictionsPage>> {
        const queryParameters: any = {};

        if (requestParameters.address !== undefined) {
            queryParameters['address'] = requestParameters.address;
        }

        if (requestParameters.pageSize !== undefined) {
            queryParameters['pageSize'] = requestParameters.pageSize;
        }

        if (requestParameters.pageNumber !== undefined) {
            queryParameters['pageNumber'] = requestParameters.pageNumber;
        }

        if (requestParameters.offset !== undefined) {
            queryParameters['offset'] = requestParameters.offset;
        }

        if (requestParameters.order !== undefined) {
            queryParameters['order'] = requestParameters.order;
        }

        const headerParameters: runtime.HTTPHeaders = {};

        const response = await this.request({
            path: `/restrictions/account`,
            method: 'GET',
            headers: headerParameters,
            query: queryParameters,
        }, initOverrides);

        return new runtime.JSONApiResponse(response, (jsonValue) => AccountRestrictionsPageFromJSON(jsonValue));
    }

    /**
     * Returns an array of account restrictions.
     * Search account restrictions
     */
    async searchAccountRestrictions(requestParameters: SearchAccountRestrictionsRequest = {}, initOverrides?: RequestInit | runtime.InitOverrideFunction): Promise<AccountRestrictionsPage> {
        const response = await this.searchAccountRestrictionsRaw(requestParameters, initOverrides);
        return await response.value();
    }

}