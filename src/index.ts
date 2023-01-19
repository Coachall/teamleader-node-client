import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { AccessTokenObject, ResponseObject } from "./types/General.js";
import {
	ContactsAdd,
	contactsAddResponse,
	ContactsDelete,
	ContactsInfoResponse,
	ContactsLinkToCompany,
	ContactsListParams,
	ContactsListResponse,
	ContactsTag,
	ContactsUnlinkFromCompany,
	ContactsUntag,
	ContactsUpdate,
	ContactsUpdateCompanyLink,
} from "./types/Contacts.js";
import {
	CustomFieldDefinitionsInfo,
	CustomFieldDefinitionsList,
	CustomFieldDefinitionsListParams,
} from "./types/CustomFields.js";
import {
	DepartmentsInfoResponse,
	DepartmentsListParams,
	DepartmentsListResponse,
} from "./types/Departments.js";
import { Tokens, Uuid } from "./types/General.js";
import { TeamsList } from "./types/Teams.js";
import {
	UsersInfo,
	UsersList,
	UsersListParams,
	UsersMe,
} from "./types/Users.js";
import { WorkTypesList, WorkTypesListParams } from "./types/WorkTypes.js";
import {
	CompaniesAddResponse,
	CompaniesListParams,
	CompaniesListResponse,
	CompaniesTag,
	CompaniesUntag,
	CompaniesUpdate,
	CompanyAdd,
	CompanyInfoResponse,
} from "./types/Companies.js";
import {
	DealsCreate,
	DealsCreateResponse,
	DealsInfoResponse,
	DealsListParams,
	DealsListResponse,
	DealsLose,
	DealsMove,
	DealsUpdate,
} from "./types/Deals.js";
import {
	QuotationCreate,
	QuotationsCreateResponse,
	QuotationsSend,
} from "./types/Quotations.js";
import { TaxRateParams, TaxRateResponse } from "./types/TaxRate.js";
import {
	ProductInfo,
	ProductsAdd,
	ProductsAddResponse,
	ProductsList,
	ProductsListParams,
} from "./types/Products.js";
import {
	ListWebhooksResponse,
	MigrateIdRequest,
	MigrateIdResponse,
	RegisterWebhookRequest,
} from "./types/Other.js";
import { EventsInfoResponse } from "./types/Calendar.js";
import { FilesUploadRequest, FilesUploadResponse } from "./types/Files.js";
const axiosApiInstance = axios.create();

interface OriginalRequest extends AxiosRequestConfig {
	_retry?: boolean;
}

class TLclient {
	private access_token: string;
	private refresh_token: string | undefined;
	private client_id: string;
	private client_secret: string;
	private basePath: string;
	private headers: object;
	private newAccessToken: string;
	private newRefreshToken: string;
	callback: Function;

	constructor(public config: AccessTokenObject) {
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

	private async get(
		method: string,
		path: string,
		params?: object,
		body?: object
	) {
		const tokenObject: AccessTokenObject = {
			client_id: this.client_id,
			client_secret: this.client_secret,
			refresh_token: this.newRefreshToken!,
			access_token: this.newAccessToken,
			callback: this.callback,
		};

		const saveTokens = (newToken: string, newRefresh: string) => {
			this.newAccessToken = newToken;
			this.newRefreshToken = newRefresh;
		};

		const refresh = async (
			tokenObject: AccessTokenObject
		): Promise<ResponseObject | undefined> => {
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
			} catch (error) {
				//console.log(error);
			}
			return;

			//.catch((error) => console.log("🛑 Error with renewal"));
		};

		axiosApiInstance.interceptors.request.use(
			async (config) => {
				config.headers = {
					Authorization: `Bearer ${this.access_token}`,
					Accept: "application/json",
				};
				return config;
			},
			(error) => {
				Promise.reject(error);
			}
		);

		// Response interceptor for API responses
		axiosApiInstance.interceptors.response.use(
			(response) => {
				//@ts-ignore
				/* response.data.tokens = {
					//@ts-ignore

					refresh: this.refresh_token,
					access_token: response.config.headers?.Authorization,
				}; */
				return response;
			},
			async (error: AxiosError) => {
				const originalRequest: OriginalRequest = error.config!;

				// check for rate-limit and wait x milisecs before retrying original request
				if (error.response?.status === 429) {
					originalRequest._retry = true;
					const errorTime = new Date();
					const rerunTime = new Date(
						// @ts-ignore
						error.response?.headers["x-ratelimit-reset"]
					);
					const milisecs = rerunTime.getTime() - errorTime.getTime();

					function delay(ms: number) {
						return new Promise((resolve) => setTimeout(resolve, ms));
					}

					console.log(`⏲ API rate-limit reached, waiting ${milisecs}ms`);

					return delay(milisecs).then(() => axiosApiInstance(originalRequest));
				}

				// check if unauthorized access and refresh access token

				if (error.response?.status === 401 && !originalRequest._retry) {
					originalRequest._retry = true;

					await refresh(tokenObject);

					//const token = this.newAccessToken;
					const token = this.access_token;
					originalRequest.headers!["Authorization"] = "Bearer " + token;

					return axiosApiInstance(originalRequest);
				}
				return Promise.reject(error).catch((error) =>
					console.log("Error: " + error)
				);
			}
		);

		return await axiosApiInstance({
			method: method,
			params: params,
			data: body,
			url: `${this.basePath}${path}`,
		})
			.then((e) => e.data)
			.catch((error) => error.response.data.errors);
	}

	// DEPARTMENTS
	// https://developer.teamleader.eu/#/reference/general/departments
	departmentsList(
		params?: DepartmentsListParams
	): Promise<DepartmentsListResponse> {
		return this.get("get", "departments.list", params);
	}

	departmentsInfo(id: Uuid): Promise<DepartmentsInfoResponse> {
		return this.get("get", "departments.info", { id: id });
	}

	// USERS
	// https://developer.teamleader.eu/#/reference/general/users
	usersMe(): Promise<UsersMe> {
		return this.get("get", "users.me");
	}

	usersList(params?: UsersListParams): Promise<UsersList> {
		return this.get("get", "users.list", params);
	}

	usersInfo(id: Uuid): Promise<UsersInfo> {
		return this.get("get", "users.info", { id: id });
	}

	// TEAMS
	// https://developer.teamleader.eu/#/reference/general/teams/teams.list
	teamsList(): Promise<TeamsList> {
		return this.get("get", "teams.list");
	}

	// CUSTOM FIELDS
	// https://developer.teamleader.eu/#/reference/general/custom-fields/
	customFieldDefinitionsList(
		params?: CustomFieldDefinitionsListParams
	): Promise<CustomFieldDefinitionsList> {
		return this.get("get", "customFieldDefinitions.list", params);
	}

	customFieldDefinitionsInfo(id: Uuid): Promise<CustomFieldDefinitionsInfo> {
		return this.get("get", "customFieldDefinitions.info", { id: id });
	}

	// WORK TYPES
	// https://developer.teamleader.eu/#/reference/general/work-types/
	workTypesList(params?: WorkTypesListParams): Promise<WorkTypesList> {
		return this.get("get", "workTypes.list", params);
	}

	// CONTACTS
	// https://developer.teamleader.eu/#/reference/crm/contacts/
	contactsList(params?: ContactsListParams): Promise<ContactsListResponse> {
		return this.get("get", "contacts.list", params);
	}
	contactsInfo(id: Uuid): Promise<ContactsInfoResponse> {
		return this.get("get", "contacts.info", { id: id });
	}
	contactsAdd(body: ContactsAdd): Promise<contactsAddResponse> {
		return this.get("post", "contacts.add", undefined, body);
	}
	contactsUpdate(body: ContactsUpdate): Promise<null> {
		return this.get("post", "contacts.update", undefined, body);
	}
	contactsDelete(body: ContactsDelete): Promise<null> {
		return this.get("post", "contacts.delete", undefined, body);
	}
	contactsTag(body: ContactsTag): Promise<null> {
		return this.get("post", "contacts.tag", undefined, body);
	}
	contactsUntag(body: ContactsUntag): Promise<null> {
		return this.get("post", "contacts.untag", undefined, body);
	}
	contactsLinkToCompany(body: ContactsLinkToCompany): Promise<null> {
		return this.get("post", "contacts.linkToCompany", undefined, body);
	}
	contactsUnlinkFromCompany(body: ContactsUnlinkFromCompany): Promise<null> {
		return this.get("post", "contacts.unlinkFromCompany", undefined, body);
	}
	contactsUpdateCompanyLink(body: ContactsUpdateCompanyLink): Promise<null> {
		return this.get("post", "contacts.updateCompanyLink", undefined, body);
	}

	// COMPANIES
	// https://developer.teamleader.eu/#/reference/crm/companies/
	companiesList(params?: CompaniesListParams): Promise<CompaniesListResponse> {
		return this.get("get", "companies.list", params);
	}
	companiesInfo(id: Uuid): Promise<CompanyInfoResponse> {
		return this.get("get", "companies.info", { id: id });
	}
	companiesAdd(body: CompanyAdd): Promise<CompaniesAddResponse> {
		return this.get("post", "companies.add", undefined, body);
	}
	companiesUpdate(body: CompaniesUpdate): Promise<null> {
		return this.get("post", "companies.update", undefined, body);
	}
	companiesDelete(id: Uuid): Promise<null> {
		return this.get("post", "companies.delete", undefined, { id: id });
	}
	companiesTag(body: CompaniesTag): Promise<null> {
		return this.get("post", "companies.tag", undefined, body);
	}
	companiesUntag(body: CompaniesUntag): Promise<null> {
		return this.get("post", "companies.untag", undefined, body);
	}

	// DEALS
	// https://developer.teamleader.eu/#/reference/deals/deals/
	dealsList(params?: DealsListParams): Promise<DealsListResponse> {
		return this.get("get", "deals.list", params);
	}
	dealsInfo(id: Uuid): Promise<DealsInfoResponse> {
		return this.get("get", "deals.info", { id: id });
	}
	dealsCreate(body: DealsCreate): Promise<DealsCreateResponse> {
		return this.get("post", "deals.create", undefined, body);
	}
	dealsUpdate(body: DealsUpdate): Promise<null> {
		return this.get("post", "deals.update", undefined, body);
	}
	dealsMove(body: DealsMove): Promise<null> {
		return this.get("post", "deals.move", undefined, body);
	}
	dealsWin(id: Uuid): Promise<null> {
		return this.get("post", "deals.win", undefined, { id: id });
	}
	dealsLose(body: DealsLose): Promise<null> {
		return this.get("post", "deals.lose", undefined, body);
	}
	dealsDelete(id: Uuid): Promise<null> {
		return this.get("post", "deals.delete", undefined, { id: id });
	}

	// QUOTATIONS
	// https://developer.teamleader.eu/#/reference/deals/quotations/
	quotationsCreate(body: QuotationCreate): Promise<QuotationsCreateResponse> {
		return this.get("post", "quotations.create", undefined, body);
	}
	quotationsSend(body: QuotationsSend): Promise<null> {
		return this.get("post", "quotations.send", undefined, body);
	}

	// CALENDAR
	// https://developer.teamleader.eu/#/reference/calendar/
	eventsInfo(id: Uuid): Promise<EventsInfoResponse> {
		return this.get("get", "events.info", { id: id });
	}

	// TAX RATES
	// https://developer.teamleader.eu/#/reference/invoicing/tax-rates/
	taxRatesList(params?: TaxRateParams): Promise<TaxRateResponse> {
		return this.get("get", "taxRates.list", params);
	}

	// PRODUCTS
	// https://developer.teamleader.eu/#/reference/products/products/
	productsList(params?: ProductsListParams): Promise<ProductsList> {
		return this.get("get", "products.list", params);
	}
	productsInfo(id: Uuid): Promise<ProductInfo> {
		return this.get("get", "products.info", { id: id });
	}
	productsAdd(body: ProductsAdd): Promise<ProductsAddResponse> {
		return this.get("post", "products.add", undefined, body);
	}

	// FILES
	// https://developer.teamleader.eu/#/reference/files/files/
	filesUpload(body: FilesUploadRequest): Promise<FilesUploadResponse> {
		return this.get("post", "files.upload", undefined, body);
	}

	// OTHER
	// https://developer.teamleader.eu/#/reference/other/
	migrateId(body: MigrateIdRequest): Promise<MigrateIdResponse> {
		return this.get("post", "migrate.id", undefined, body);
	}
	webhooksRegister(body: RegisterWebhookRequest): Promise<null> {
		return this.get("post", "webhooks.register", undefined, body);
	}

	webhooksList(): Promise<ListWebhooksResponse> {
		return this.get("get", "webhooks.list", undefined);
	}

	webhooksUnregister(body: RegisterWebhookRequest): Promise<null> {
		return this.get("post", "webhooks.unregister", undefined, body);
	}
}

export default TLclient;
