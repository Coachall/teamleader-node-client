export type AccessTokenObject = {
    client_id: string;
    client_secret: string;
    access_token: string;
    code?: string;
    refresh_token: string;
    redirect_uri?: string;
};
