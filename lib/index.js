import axios from "axios";
const axiosApiInstance = axios.create();
class TLclient {
    constructor(config) {
        this.config = config;
        this.access_token = config.access_token;
        this.refresh_token = config.refresh_token;
        this.client_id = config.client_id;
        this.client_secret = config.client_secret;
        this.basePath = "https://api.focus.teamleader.eu/";
        this.headers = {
            Authorization: `Bearer ${this.access_token}`,
            Accept: "application/json",
        };
        this.newAccessToken = this.access_token;
        this.newRefreshToken = this.refresh_token;
        this.callback = config.callback;
    }
    async get(method, path, params, body) {
        const tokenObject = {
            client_id: this.client_id,
            client_secret: this.client_secret,
            refresh_token: this.newRefreshToken,
            access_token: this.newAccessToken,
            callback: this.callback,
        };
        const saveTokens = (newToken, newRefresh) => {
            this.newAccessToken = newToken;
            this.newRefreshToken = newRefresh;
        };
        const refresh = async (tokenObject) => {
            console.log("👩‍💻 Getting new access token");
            try {
                return await axios({
                    method: "POST",
                    url: "https://focus.teamleader.eu/oauth2/access_token",
                    data: {
                        client_id: tokenObject.client_id,
                        client_secret: tokenObject.client_secret,
                        refresh_token: tokenObject.refresh_token,
                        grant_type: "refresh_token",
                    },
                    headers: {
                        "Content-Type": "application/json; charset=utf-8",
                    },
                }).then(async (e) => {
                    this.access_token = e.data.access_token;
                    this.refresh_token = e.data.refresh_token;
                    this.callback(e.data);
                    saveTokens(e.data.access_token, e.data.refresh_token);
                    return e.data;
                });
                //return responseObject;
            }
            catch (error) {
                //console.log(error);
            }
            return;
            //.catch((error) => console.log("🛑 Error with renewal"));
        };
        axiosApiInstance.interceptors.request.use(async (config) => {
            config.headers = {
                Authorization: `Bearer ${this.access_token}`,
                Accept: "application/json",
            };
            return config;
        }, (error) => {
            Promise.reject(error);
        });
        // Response interceptor for API responses
        axiosApiInstance.interceptors.response.use((response) => {
            //@ts-ignore
            /* response.data.tokens = {
                //@ts-ignore

                refresh: this.refresh_token,
                access_token: response.config.headers?.Authorization,
            }; */
            return response;
        }, async (error) => {
            const originalRequest = error.config;
            // check for rate-limit and wait x milisecs before retrying original request
            if (error.response?.status === 429) {
                originalRequest._retry = true;
                const errorTime = new Date();
                const rerunTime = new Date(
                // @ts-ignore
                error.response?.headers["x-ratelimit-reset"]);
                const milisecs = rerunTime.getTime() - errorTime.getTime();
                function delay(ms) {
                    return new Promise((resolve) => setTimeout(resolve, ms));
                }
                console.log(`⏲ API rate-limit reached, waiting ${milisecs}ms`);
                return delay(milisecs).then(() => axiosApiInstance(originalRequest));
            }
            // check if unauthorized access and refresh access token
            if (error.response?.status === 401 && !originalRequest._retry) {
                originalRequest._retry = true;
                await refresh(tokenObject);
                const token = this.newAccessToken;
                originalRequest.headers["Authorization"] = "Bearer " + token;
                return axiosApiInstance(originalRequest);
            }
            return Promise.reject(error).catch((error) => console.log("Error: " + error));
        });
        return await axiosApiInstance({
            method: method,
            params: params,
            data: body,
            url: `${this.basePath}${path}`,
        }).then((e) => e.data);
    }
    // DEPARTMENTS
    // https://developer.teamleader.eu/#/reference/general/departments
    departmentsList(params) {
        return this.get("get", "departments.list", params);
    }
    departmentsInfo(id) {
        return this.get("get", "departments.info", { id: id });
    }
    // USERS
    // https://developer.teamleader.eu/#/reference/general/users
    usersMe() {
        return this.get("get", "users.me");
    }
    usersList(params) {
        return this.get("get", "users.list", params);
    }
    usersInfo(id) {
        return this.get("get", "users.info", { id: id });
    }
    // TEAMS
    // https://developer.teamleader.eu/#/reference/general/teams/teams.list
    teamsList() {
        return this.get("get", "teams.list");
    }
    // CUSTOM FIELDS
    // https://developer.teamleader.eu/#/reference/general/custom-fields/
    customFieldDefinitionsList(params) {
        return this.get("get", "customFieldDefinitions.list", params);
    }
    customFieldDefinitionsInfo(id) {
        return this.get("get", "customFieldDefinitions.info", { id: id });
    }
    // WORK TYPES
    // https://developer.teamleader.eu/#/reference/general/work-types/
    workTypesList(params) {
        return this.get("get", "workTypes.list", params);
    }
    // CONTACTS
    // https://developer.teamleader.eu/#/reference/crm/contacts/
    contactsInfo(id) {
        return this.get("get", "contacts.info", { id: id });
    }
    contactsAdd(body) {
        return this.get("post", "contacts.add", undefined, body);
    }
    contactsUpdate(body) {
        return this.get("post", "contacts.update", undefined, body);
    }
    contactsDelete(body) {
        return this.get("post", "contacts.delete", undefined, body);
    }
    contactsTag(body) {
        return this.get("post", "contacts.tag", undefined, body);
    }
    contactsUntag(body) {
        return this.get("post", "contacts.untag", undefined, body);
    }
    contactsLinkToCompany(body) {
        return this.get("post", "contacts.linkToCompany", undefined, body);
    }
    contactsUnlinkFromCompany(body) {
        return this.get("post", "contacts.unlinkFromCompany", undefined, body);
    }
    contactsUpdateCompanyLink(body) {
        return this.get("post", "contacts.updateCompanyLink", undefined, body);
    }
    // COMPANIES
    // https://developer.teamleader.eu/#/reference/crm/companies/
    companiesList(params) {
        return this.get("get", "companies.list", params);
    }
    companiesInfo(id) {
        return this.get("get", "companies.info", { id: id });
    }
    companiesAdd(body) {
        return this.get("post", "companies.add", undefined, body);
    }
    companiesUpdate(body) {
        return this.get("post", "companies.update", undefined, body);
    }
    companiesDelete(id) {
        return this.get("post", "companies.delete", undefined, { id: id });
    }
    companiesTag(body) {
        return this.get("post", "companies.tag", undefined, body);
    }
    companiesUntag(body) {
        return this.get("post", "companies.untag", undefined, body);
    }
    // DEALS
    // https://developer.teamleader.eu/#/reference/deals/deals/
    dealsList(params) {
        return this.get("get", "deals.list", params);
    }
    dealsInfo(id) {
        return this.get("get", "deals.info", { id: id });
    }
    dealsCreate(body) {
        return this.get("post", "deals.create", undefined, body);
    }
    dealsUpdate(body) {
        return this.get("post", "deals.update", undefined, body);
    }
    dealsMove(body) {
        return this.get("post", "deals.move", undefined, body);
    }
    dealsWin(id) {
        return this.get("post", "deals.win", undefined, { id: id });
    }
    dealsLose(body) {
        return this.get("post", "deals.lose", undefined, body);
    }
    dealsDelete(id) {
        return this.get("post", "deals.delete", undefined, { id: id });
    }
    // QUOTATIONS
    // https://developer.teamleader.eu/#/reference/deals/quotations/
    quotationsCreate(body) {
        return this.get("post", "quotations.create", undefined, body);
    }
    quotationsSend(body) {
        return this.get("post", "quotations.send", undefined, body);
    }
    // CALENDAR
    // https://developer.teamleader.eu/#/reference/calendar/
    eventsInfo(id) {
        return this.get("get", "events.info", { id: id });
    }
    // TAX RATES
    // https://developer.teamleader.eu/#/reference/invoicing/tax-rates/
    taxRatesList(params) {
        return this.get("get", "taxRates.list", params);
    }
    // PRODUCTS
    // https://developer.teamleader.eu/#/reference/products/products/
    productsList(params) {
        return this.get("get", "products.list", params);
    }
    productsInfo(id) {
        return this.get("get", "products.info", { id: id });
    }
    productsAdd(body) {
        return this.get("post", "products.add", undefined, body);
    }
    // OTHER
    // https://developer.teamleader.eu/#/reference/other/
    migrateId(body) {
        return this.get("post", "migrate.id", undefined, body);
    }
    webhooksRegister(body) {
        return this.get("post", "webhooks.register", undefined, body);
    }
    webhooksList() {
        return this.get("get", "webhooks.list", undefined);
    }
    webhooksUnregister(body) {
        return this.get("post", "webhooks.unregister", undefined, body);
    }
}
export default TLclient;
//# sourceMappingURL=index.js.map