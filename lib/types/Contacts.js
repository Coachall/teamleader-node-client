import { z } from "zod";
const ContactsInfoResponse = z.object({
    data: z.object({
        id: z.string().uuid(),
        first_name: z.string().optional(),
        last_name: z.string(),
        status: z.enum(["active", "deactivated"]),
        salutation: z.string().optional(),
        vat_number: z.string().optional(),
        emails: z
            .array(z.object({
            type: z.enum(["primary"]),
            email: z.string().email(),
        }))
            .optional(),
        telephones: z
            .array(z.object({
            type: z.enum(["phone", "mobile", "fax"]),
            number: z.string(),
        }))
            .optional(),
        website: z.string().url().optional(),
        addresses: z
            .array(z.object({
            type: z.enum(["primary", "invoicing", "delivery", "visiting"]),
            address: z.object({
                addressee: z.string().optional(),
                line_1: z.string(),
                postal_code: z.string(),
                city: z.string(),
                country: z.string(),
                area_level_two_id: z.string().uuid().optional(),
            }),
        }))
            .optional(),
        gender: z.enum(["male", "female"]).optional(),
        birthdate: z.string().optional(),
        iban: z.string().optional(),
        bic: z.string().optional(),
        national_identification_number: z.string().optional(),
        companies: z.array(z.object({
            position: z.string(),
            secondary_position: z.string(),
            division: z.string(),
            decision_maker: z.boolean(),
            company: z.object({
                type: z.string(),
                id: z.string().uuid(),
            }),
        })),
        language: z.string().optional(),
        payment_term: z.object({
            type: z.enum(["cash", "end_of_month", "after_invoice_date"]),
            days: z.number(),
        }),
        invoicing_preferences: z.object({
            electronic_invoicing_address: z.string(),
        }),
        remarks: z.string().optional(),
        tags: z.array(z.string()).optional(),
        custom_fields: z
            .array(z.object({
            id: z.string().uuid(),
            value: z.any(),
        }))
            .optional(),
        marketing_mails_consent: z.boolean().optional(),
        added_at: z.string(),
        updated_at: z.string(),
        web_url: z.string().url(),
    }),
});
const ContactsAdd = z.object({
    first_name: z.string().optional(),
    last_name: z.string(),
    emails: z
        .array(z.object({
        type: z.enum(["primary"]),
        email: z.string().email(),
    }))
        .optional(),
    salutation: z.string().optional(),
    telephones: z
        .array(z.object({
        type: z.enum(["phone", "mobile", "fax"]),
        number: z.string(),
    }))
        .optional(),
    website: z.string().url().optional(),
    addresses: z
        .array(z.object({
        type: z.enum(["primary", "invoicing", "delivery", "visiting"]),
        address: z.object({
            addressee: z.string().optional(),
            line_1: z.string(),
            postal_code: z.string(),
            city: z.string(),
            country: z.string(),
            area_level_two_id: z.string().uuid().optional(),
        }),
    }))
        .optional(),
    language: z.string().optional(),
    gender: z.enum(["male", "female"]).optional(),
    birthdate: z.string().optional(),
    iban: z.string().optional(),
    bic: z.string().optional(),
    national_identification_number: z.string().optional(),
    remarks: z.string().optional(),
    tags: z.array(z.string()).optional(),
    custom_fields: z
        .array(z.object({
        id: z.string().uuid(),
        value: z.any(),
    }))
        .optional(),
    marketing_mails_consent: z.boolean().optional(),
});
const ContactsUpdate = ContactsAdd.extend({
    id: z.string().uuid(),
    last_name: z.string().optional(),
});
const ContactsDelete = z.object({
    id: z.string().uuid(),
});
const ContactsTag = z.object({
    id: z.string().uuid(),
    tags: z.array(z.string()),
});
const ContactsLinkToCompany = z.object({
    id: z.string().uuid(),
    company_id: z.string().uuid(),
    position: z.string().optional(),
    decision_maker: z.boolean().optional(),
});
const ContactsUnlinkFromCompany = z.object({
    id: z.string().uuid(),
    company_id: z.string().uuid(),
});
// Responses
const contactsAddResponse = z.object({
    data: z.object({
        id: z.string(),
        type: z.string(),
    }),
});
//# sourceMappingURL=Contacts.js.map