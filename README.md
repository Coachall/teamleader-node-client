# Teamleader Node Client

![](https://img.shields.io/github/languages/top/Coachall/teamleader-node-client "typescript") [![](https://img.shields.io/npm/dm/@coachall/teamleader-node-client "npm downloads")](https://www.npmjs.com/package/@coachall/teamleader-node-client)

A community developed API wrapper around the V2 [Teamleader Focus API](https://developer.teamleader.eu/). This package is completely written in Typescript and uses [Zod](https://github.com/colinhacks/zod) for schema validation and [Axios](https://axios-http.com/) for requests.

**WARNING**: This package is currently marked as 'experimental' and 'in development' and should be used at your own risk.

Endpoints wille be added whenever I need them in production / have some spare time. You can help speed up development by submitting a [pull request](https://github.com/Coachall/teamleader-node-client/pulls)

## Available endpoints

- General ✅
  - ✅ Departments (list, info)
  - ✅ Users (me, list, info)
  - ✅ Teams (list)
  - ✅ Custom Fields (list, info)
  - ✅ Work Types (list)
- CRM 👷‍♂️
  - 👷‍♂️ Contacts (~~list~~, info, add, update, delete, tag, untag, linkToCompany, unlinkFromCompany, updateCompanyLink)
  - ✅ Companies (list, info, add, update, delete, tag, untag)
- Deals 👷‍♂️
  - 👷‍♂️ Deals (list, info, create, update, move, win, lose, delete, ~~lostReasonsList~~ )
  - 👷‍♂️ Quotations (~~list~~, ~~info~~, ~~download~~, create, send, ~~update~~, ~~accept~~, ~~delete~~ )
- Calendar 👷‍♂️
  - 👷‍♂️ Events (~~list~~, info, ~~create~~, ~~update~~, ~~cancel~~ )
  - ~~Activity Types~~
- Invoicing 👷‍♂️
  - ✅ Tax Rates (list)
- Products ✅ (list, info, add)
- ~~Projects~~
- ~~Tasks~~
- ~~Time Tracking~~
- ~~Files~~
- Other 👷‍♂️
  - 👷‍♂️ Migrate (id, ~~taxRate~~, ~~ActivityType~~ )
  - ✅ Webhooks (register, list, unregister)

## Installation

```typescript
npm i @coachall/teamleader-node-client
yarn add @coachall/teamleader-node-client
```

Initialize the client:

```typescript
import TLclient from "@coachall/teamleader-node-client";

/*
The initial configuration of the client.
You will need to manage refresh and access tokens yourself with the callback function.
It is advised to use a lightweight database to store these (eg: Lowdb, SQLite)
*/

const config = {
  client_id: string,
  client_secret: string,
  refresh_token: string,
  access_token: string,
  redirect_uri: string,
  //callback function fires when a new token pair is requested. Use the results to overwrite the refresh_token and access_token above
  callback: (e) => {
    e.access_token: string
    e.refresh_token: string,
    e.token_type: string,
    e.expires_in: number,
  },
};

const client = new TLclient(config);
```

## Examples

```typescript
// Get all departments
const departments = await client.departmentsList();

console.log(departments);

/* ---- RESULT----
{
data: [
        {
            id: 'c506e35a-2177-0626-865f-c1fcdfgc2bd21',
            name: 'Coachall BV',
            currency: 'EUR',
            vat_number: 'BE 0743.533.110',
            emails: [Array],
            status: 'active'
        }
    ]
}
*/

// Get a single department

const ourDepartment = await client.departmentsInfo(
	"c506e35a-2177-0626-865f-c1fcdfgc2bd21"
);

console.log(ourDepartment);

/* ---- RESULT----
{
data: {
        id: 'c506e35a-2177-0626-865f-c1fcdfgc2bd21',
        name: 'Coachall BV',
        currency: 'EUR',
        vat_number: 'BE 0743.533.110',
        emails: [Array],
        status: 'active'
      }
}
*/

// Filter the departments

const filteredDepartments = await client.departmentsList({
	filter: {
		status: "archived",
	},
});

console.log(filteredDepartments);

/* ---- RESULT----
{
data: []
}
*/
```

## Endpoints

<details><summary>General</summary>
<p>

### Departments

Departments are used to split quotations and invoices for different legal entities or within one organisation.
https://developer.teamleader.eu/#/reference/general/departments

#### List

Get a list of departments.
https://developer.teamleader.eu/#/reference/general/departments/departments.list

```typescript
const departments: Promise<DepartmentsListResponse> = await client.departmentsList(params?: DepartmentsListParams);
```

#### Info

Get details for a single department. https://developer.teamleader.eu/#/reference/general/departments/departments.info

```typescript
const departmentsInfo: Promise<DepartmentsInfoResponse> = await client.departmentsList(id: Uuid);
```

---

### Users

Users are co-workers in a Teamleader account.
https://developer.teamleader.eu/#/reference/general/users

#### Me

Get the current authenticated user.
https://developer.teamleader.eu/#/reference/general/users/users.me

```typescript
const me: Promise<UsersMe> = await client.usersMe();
```

#### List

Get a list of all users. https://developer.teamleader.eu/#/reference/general/users/users.list

```typescript
const userList: Promise<UsersList> = await client.usersList(params?: UsersListParams);
```

#### Info

Get details for a single user. https://developer.teamleader.eu/#/reference/general/users/users.info

```typescript
const userInfo: Promise<UsersInfo> = await client.usersInfo(id: Uuid);
```

---

### Teams

https://developer.teamleader.eu/#/reference/general/teams

#### List

Get a list of all teams. https://developer.teamleader.eu/#/reference/general/users/teams.list

```typescript
const teams: Promise<TeamsList> = await client.teamsList();
```

---

### Custom Fields

Custom fields are used to add additional data/properties to entities within Teamleader.
https://developer.teamleader.eu/#/reference/general/custom-fields

#### List

Get a list of all the definitions of custom fields. https://developer.teamleader.eu/#/reference/general/custom-fields/customfielddefinitions.list

```typescript
const customfields: Promise<CustomFieldDefinitionsList> = await client.customFieldDefinitionsList(params?: CustomFieldDefinitionsListParams);
```

#### Info

Get info about a specific custom field definition. https://developer.teamleader.eu/#/reference/general/custom-fields/customfielddefinitions.info

```typescript
const customfieldInfo: Promise<CustomFieldDefinitionsInfo> = await client.customFieldDefinitionsInfo(id: Uuid);
```

---

### Work Types

Work types define the type of work for events or time tracking. Hourly rates can be added to work types, so that the work can be billed to a customer. https://developer.teamleader.eu/#/reference/general/work-types

#### List

Get a list of all the definitions of custom fields. https://developer.teamleader.eu/#/reference/general/work-types/worktypes.list

```typescript
const worktypes: Promise<WorkTypesList> = await client.workTypesList(params?: WorkTypesListParams);
```

</p>
</details>
