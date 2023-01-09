import axios from "axios";
import { AccessTokenObject } from "../types/General.js";
export const AccessToken = async (tokenObject: AccessTokenObject) => {
	return await axios
		.post("https://focus.teamleader.eu/oauth2/access_token", {
			client_id: tokenObject.client_id,
			client_secret: tokenObject.client_secret,
			code: tokenObject.code,
			grant_type: "authorization_code",
			redirect_uri: tokenObject.redirect_uri,
		})
		.then((response) => {
			const data = response.data;
			const responseObject = {
				token_type: data.token_type,
				expires_in: data.expires_in,
				access_token: data.access_token,
				refresh_token: data.refresh_token,
			};

			console.log(responseObject);
			return responseObject;
		});
};
