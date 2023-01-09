import { z } from "zod";
declare const id: z.ZodString;
export type Uuid = z.infer<typeof id>;
declare const Tokens: z.ZodObject<{
    access_token: z.ZodString;
    refresh_token: z.ZodString;
}, "strip", z.ZodTypeAny, {
    access_token: string;
    refresh_token: string;
}, {
    access_token: string;
    refresh_token: string;
}>;
export type Tokens = z.infer<typeof Tokens>;
export type ResponseObject = {
    token_type: string;
    expires_in: number;
    access_token: string;
    refresh_token: string;
};
export type AccessTokenObject = {
    client_id: string;
    client_secret: string;
    access_token: string;
    code?: string;
    refresh_token: string;
    redirect_uri?: string;
    callback: Function;
};
export {};
