import { AccessTokenObject } from "./types/General.js";
import { ContactsAdd, contactsAddResponse, ContactsDelete, ContactsInfoResponse, ContactsLinkToCompany, ContactsListParams, ContactsListResponse, ContactsTag, ContactsUnlinkFromCompany, ContactsUntag, ContactsUpdate, ContactsUpdateCompanyLink } from "./types/Contacts.js";
import { CustomFieldDefinitionsInfo, CustomFieldDefinitionsList, CustomFieldDefinitionsListParams } from "./types/CustomFields.js";
import { DepartmentsInfoResponse, DepartmentsListParams, DepartmentsListResponse } from "./types/Departments.js";
import { Uuid } from "./types/General.js";
import { TeamsList } from "./types/Teams.js";
import { UsersInfo, UsersList, UsersListParams, UsersMe } from "./types/Users.js";
import { WorkTypesList, WorkTypesListParams } from "./types/WorkTypes.js";
import { CompaniesAddResponse, CompaniesListParams, CompaniesListResponse, CompaniesTag, CompaniesUntag, CompaniesUpdate, CompanyAdd, CompanyInfoResponse } from "./types/Companies.js";
import { DealsCreate, DealsCreateResponse, DealsInfoResponse, DealsListParams, DealsListResponse, DealsLose, DealsMove, DealsUpdate } from "./types/Deals.js";
import { QuotationCreate, QuotationsCreateResponse, QuotationsSend } from "./types/Quotations.js";
import { TaxRateParams, TaxRateResponse } from "./types/TaxRate.js";
import { ProductInfo, ProductsAdd, ProductsAddResponse, ProductsList, ProductsListParams } from "./types/Products.js";
import { ListWebhooksResponse, MigrateIdRequest, MigrateIdResponse, RegisterWebhookRequest } from "./types/Other.js";
import { EventsInfoResponse } from "./types/Calendar.js";
import { FilesUploadRequest, FilesUploadResponse } from "./types/Files.js";
import { InvoicesInfoResponse } from "./types/Invoices.js";
declare class TLclient {
    config: AccessTokenObject;
    private access_token;
    private refresh_token;
    private client_id;
    private client_secret;
    private basePath;
    private headers;
    private newAccessToken;
    private newRefreshToken;
    callback: Function;
    constructor(config: AccessTokenObject);
    private get;
    departmentsList(params?: DepartmentsListParams): Promise<DepartmentsListResponse>;
    departmentsInfo(id: Uuid): Promise<DepartmentsInfoResponse>;
    usersMe(): Promise<UsersMe>;
    usersList(params?: UsersListParams): Promise<UsersList>;
    usersInfo(id: Uuid): Promise<UsersInfo>;
    teamsList(): Promise<TeamsList>;
    customFieldDefinitionsList(params?: CustomFieldDefinitionsListParams): Promise<CustomFieldDefinitionsList>;
    customFieldDefinitionsInfo(id: Uuid): Promise<CustomFieldDefinitionsInfo>;
    workTypesList(params?: WorkTypesListParams): Promise<WorkTypesList>;
    contactsList(params?: ContactsListParams): Promise<ContactsListResponse>;
    contactsInfo(id: Uuid): Promise<ContactsInfoResponse>;
    contactsAdd(body: ContactsAdd): Promise<contactsAddResponse>;
    contactsUpdate(body: ContactsUpdate): Promise<null>;
    contactsDelete(body: ContactsDelete): Promise<null>;
    contactsTag(body: ContactsTag): Promise<null>;
    contactsUntag(body: ContactsUntag): Promise<null>;
    contactsLinkToCompany(body: ContactsLinkToCompany): Promise<null>;
    contactsUnlinkFromCompany(body: ContactsUnlinkFromCompany): Promise<null>;
    contactsUpdateCompanyLink(body: ContactsUpdateCompanyLink): Promise<null>;
    companiesList(params?: CompaniesListParams): Promise<CompaniesListResponse>;
    companiesInfo(id: Uuid): Promise<CompanyInfoResponse>;
    companiesAdd(body: CompanyAdd): Promise<CompaniesAddResponse>;
    companiesUpdate(body: CompaniesUpdate): Promise<null>;
    companiesDelete(id: Uuid): Promise<null>;
    companiesTag(body: CompaniesTag): Promise<null>;
    companiesUntag(body: CompaniesUntag): Promise<null>;
    dealsList(params?: DealsListParams): Promise<DealsListResponse>;
    dealsInfo(id: Uuid): Promise<DealsInfoResponse>;
    dealsCreate(body: DealsCreate): Promise<DealsCreateResponse>;
    dealsUpdate(body: DealsUpdate): Promise<null>;
    dealsMove(body: DealsMove): Promise<null>;
    dealsWin(id: Uuid): Promise<null>;
    dealsLose(body: DealsLose): Promise<null>;
    dealsDelete(id: Uuid): Promise<null>;
    quotationsCreate(body: QuotationCreate): Promise<QuotationsCreateResponse>;
    quotationsSend(body: QuotationsSend): Promise<null>;
    eventsInfo(id: Uuid): Promise<EventsInfoResponse>;
    taxRatesList(params?: TaxRateParams): Promise<TaxRateResponse>;
    productsList(params?: ProductsListParams): Promise<ProductsList>;
    productsInfo(id: Uuid): Promise<ProductInfo>;
    productsAdd(body: ProductsAdd): Promise<ProductsAddResponse>;
    invoicesInfo(id: Uuid): Promise<InvoicesInfoResponse>;
    filesUpload(body: FilesUploadRequest): Promise<FilesUploadResponse>;
    migrateId(body: MigrateIdRequest): Promise<MigrateIdResponse>;
    webhooksRegister(body: RegisterWebhookRequest): Promise<null>;
    webhooksList(): Promise<ListWebhooksResponse>;
    webhooksUnregister(body: RegisterWebhookRequest): Promise<null>;
}
export default TLclient;
