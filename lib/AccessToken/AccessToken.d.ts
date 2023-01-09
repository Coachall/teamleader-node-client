import { AccessTokenObject } from "../types/General.js";
export declare const AccessToken: (tokenObject: AccessTokenObject) => Promise<{
    token_type: any;
    expires_in: any;
    access_token: any;
    refresh_token: any;
}>;
