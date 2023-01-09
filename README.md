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

```javascript
npm i @coachall/teamleader-node-client
yarn add @coachall/teamleader-node-client
```

Initialize the client:

```javascript
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

Examples:

```javascript
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
```
