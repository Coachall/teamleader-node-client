import { z } from "zod";

const id = z.string().uuid();
export type Uuid = z.infer<typeof id>;

const Tokens = z.object({
	access_token: z.string(),
	refresh_token: z.string(),
});
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
