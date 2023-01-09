import { z } from "zod";
declare const ContactsInfoResponse: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        first_name: z.ZodOptional<z.ZodString>;
        last_name: z.ZodString;
        status: z.ZodEnum<["active", "deactivated"]>;
        salutation: z.ZodOptional<z.ZodString>;
        vat_number: z.ZodOptional<z.ZodString>;
        emails: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["primary"]>;
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "primary";
            email: string;
        }, {
            type: "primary";
            email: string;
        }>, "many">>;
        telephones: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["phone", "mobile", "fax"]>;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }>, "many">>;
        website: z.ZodOptional<z.ZodString>;
        addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["primary", "invoicing", "delivery", "visiting"]>;
            address: z.ZodObject<{
                addressee: z.ZodOptional<z.ZodString>;
                line_1: z.ZodString;
                postal_code: z.ZodString;
                city: z.ZodString;
                country: z.ZodString;
                area_level_two_id: z.ZodOptional<z.ZodString>;
            }, "strip", z.ZodTypeAny, {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            }, {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            type: "primary" | "invoicing" | "delivery" | "visiting";
            address: {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            };
        }, {
            type: "primary" | "invoicing" | "delivery" | "visiting";
            address: {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            };
        }>, "many">>;
        gender: z.ZodOptional<z.ZodEnum<["male", "female"]>>;
        birthdate: z.ZodOptional<z.ZodString>;
        iban: z.ZodOptional<z.ZodString>;
        bic: z.ZodOptional<z.ZodString>;
        national_identification_number: z.ZodOptional<z.ZodString>;
        companies: z.ZodArray<z.ZodObject<{
            position: z.ZodString;
            secondary_position: z.ZodString;
            division: z.ZodString;
            decision_maker: z.ZodBoolean;
            company: z.ZodObject<{
                type: z.ZodString;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id: string;
            }, {
                type: string;
                id: string;
            }>;
        }, "strip", z.ZodTypeAny, {
            position: string;
            secondary_position: string;
            division: string;
            decision_maker: boolean;
            company: {
                type: string;
                id: string;
            };
        }, {
            position: string;
            secondary_position: string;
            division: string;
            decision_maker: boolean;
            company: {
                type: string;
                id: string;
            };
        }>, "many">;
        language: z.ZodOptional<z.ZodString>;
        payment_term: z.ZodObject<{
            type: z.ZodEnum<["cash", "end_of_month", "after_invoice_date"]>;
            days: z.ZodNumber;
        }, "strip", z.ZodTypeAny, {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        }, {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        }>;
        invoicing_preferences: z.ZodObject<{
            electronic_invoicing_address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            electronic_invoicing_address: string;
        }, {
            electronic_invoicing_address: string;
        }>;
        remarks: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            value: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            value?: any;
            id: string;
        }, {
            value?: any;
            id: string;
        }>, "many">>;
        marketing_mails_consent: z.ZodOptional<z.ZodBoolean>;
        added_at: z.ZodString;
        updated_at: z.ZodString;
        web_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        language?: string | undefined;
        first_name?: string | undefined;
        salutation?: string | undefined;
        vat_number?: string | undefined;
        emails?: {
            type: "primary";
            email: string;
        }[] | undefined;
        telephones?: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[] | undefined;
        website?: string | undefined;
        addresses?: {
            type: "primary" | "invoicing" | "delivery" | "visiting";
            address: {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            };
        }[] | undefined;
        gender?: "male" | "female" | undefined;
        birthdate?: string | undefined;
        iban?: string | undefined;
        bic?: string | undefined;
        national_identification_number?: string | undefined;
        remarks?: string | undefined;
        tags?: string[] | undefined;
        custom_fields?: {
            value?: any;
            id: string;
        }[] | undefined;
        marketing_mails_consent?: boolean | undefined;
        id: string;
        status: "active" | "deactivated";
        last_name: string;
        companies: {
            position: string;
            secondary_position: string;
            division: string;
            decision_maker: boolean;
            company: {
                type: string;
                id: string;
            };
        }[];
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        added_at: string;
        updated_at: string;
        web_url: string;
    }, {
        language?: string | undefined;
        first_name?: string | undefined;
        salutation?: string | undefined;
        vat_number?: string | undefined;
        emails?: {
            type: "primary";
            email: string;
        }[] | undefined;
        telephones?: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[] | undefined;
        website?: string | undefined;
        addresses?: {
            type: "primary" | "invoicing" | "delivery" | "visiting";
            address: {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            };
        }[] | undefined;
        gender?: "male" | "female" | undefined;
        birthdate?: string | undefined;
        iban?: string | undefined;
        bic?: string | undefined;
        national_identification_number?: string | undefined;
        remarks?: string | undefined;
        tags?: string[] | undefined;
        custom_fields?: {
            value?: any;
            id: string;
        }[] | undefined;
        marketing_mails_consent?: boolean | undefined;
        id: string;
        status: "active" | "deactivated";
        last_name: string;
        companies: {
            position: string;
            secondary_position: string;
            division: string;
            decision_maker: boolean;
            company: {
                type: string;
                id: string;
            };
        }[];
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        added_at: string;
        updated_at: string;
        web_url: string;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        language?: string | undefined;
        first_name?: string | undefined;
        salutation?: string | undefined;
        vat_number?: string | undefined;
        emails?: {
            type: "primary";
            email: string;
        }[] | undefined;
        telephones?: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[] | undefined;
        website?: string | undefined;
        addresses?: {
            type: "primary" | "invoicing" | "delivery" | "visiting";
            address: {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            };
        }[] | undefined;
        gender?: "male" | "female" | undefined;
        birthdate?: string | undefined;
        iban?: string | undefined;
        bic?: string | undefined;
        national_identification_number?: string | undefined;
        remarks?: string | undefined;
        tags?: string[] | undefined;
        custom_fields?: {
            value?: any;
            id: string;
        }[] | undefined;
        marketing_mails_consent?: boolean | undefined;
        id: string;
        status: "active" | "deactivated";
        last_name: string;
        companies: {
            position: string;
            secondary_position: string;
            division: string;
            decision_maker: boolean;
            company: {
                type: string;
                id: string;
            };
        }[];
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        added_at: string;
        updated_at: string;
        web_url: string;
    };
}, {
    data: {
        language?: string | undefined;
        first_name?: string | undefined;
        salutation?: string | undefined;
        vat_number?: string | undefined;
        emails?: {
            type: "primary";
            email: string;
        }[] | undefined;
        telephones?: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[] | undefined;
        website?: string | undefined;
        addresses?: {
            type: "primary" | "invoicing" | "delivery" | "visiting";
            address: {
                addressee?: string | undefined;
                area_level_two_id?: string | undefined;
                line_1: string;
                postal_code: string;
                city: string;
                country: string;
            };
        }[] | undefined;
        gender?: "male" | "female" | undefined;
        birthdate?: string | undefined;
        iban?: string | undefined;
        bic?: string | undefined;
        national_identification_number?: string | undefined;
        remarks?: string | undefined;
        tags?: string[] | undefined;
        custom_fields?: {
            value?: any;
            id: string;
        }[] | undefined;
        marketing_mails_consent?: boolean | undefined;
        id: string;
        status: "active" | "deactivated";
        last_name: string;
        companies: {
            position: string;
            secondary_position: string;
            division: string;
            decision_maker: boolean;
            company: {
                type: string;
                id: string;
            };
        }[];
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        added_at: string;
        updated_at: string;
        web_url: string;
    };
}>;
declare const ContactsAdd: z.ZodObject<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodString;
    emails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["primary"]>;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "primary";
        email: string;
    }, {
        type: "primary";
        email: string;
    }>, "many">>;
    salutation: z.ZodOptional<z.ZodString>;
    telephones: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["phone", "mobile", "fax"]>;
        number: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number: string;
        type: "phone" | "mobile" | "fax";
    }, {
        number: string;
        type: "phone" | "mobile" | "fax";
    }>, "many">>;
    website: z.ZodOptional<z.ZodString>;
    addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["primary", "invoicing", "delivery", "visiting"]>;
        address: z.ZodObject<{
            addressee: z.ZodOptional<z.ZodString>;
            line_1: z.ZodString;
            postal_code: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            area_level_two_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        }, {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }, {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }>, "many">>;
    language: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<["male", "female"]>>;
    birthdate: z.ZodOptional<z.ZodString>;
    iban: z.ZodOptional<z.ZodString>;
    bic: z.ZodOptional<z.ZodString>;
    national_identification_number: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        value: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        value?: any;
        id: string;
    }, {
        value?: any;
        id: string;
    }>, "many">>;
    marketing_mails_consent: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    language?: string | undefined;
    first_name?: string | undefined;
    salutation?: string | undefined;
    emails?: {
        type: "primary";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "mobile" | "fax";
    }[] | undefined;
    website?: string | undefined;
    addresses?: {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }[] | undefined;
    gender?: "male" | "female" | undefined;
    birthdate?: string | undefined;
    iban?: string | undefined;
    bic?: string | undefined;
    national_identification_number?: string | undefined;
    remarks?: string | undefined;
    tags?: string[] | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    marketing_mails_consent?: boolean | undefined;
    last_name: string;
}, {
    language?: string | undefined;
    first_name?: string | undefined;
    salutation?: string | undefined;
    emails?: {
        type: "primary";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "mobile" | "fax";
    }[] | undefined;
    website?: string | undefined;
    addresses?: {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }[] | undefined;
    gender?: "male" | "female" | undefined;
    birthdate?: string | undefined;
    iban?: string | undefined;
    bic?: string | undefined;
    national_identification_number?: string | undefined;
    remarks?: string | undefined;
    tags?: string[] | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    marketing_mails_consent?: boolean | undefined;
    last_name: string;
}>;
declare const ContactsUpdate: z.ZodObject<z.extendShape<{
    first_name: z.ZodOptional<z.ZodString>;
    last_name: z.ZodString;
    emails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["primary"]>;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "primary";
        email: string;
    }, {
        type: "primary";
        email: string;
    }>, "many">>;
    salutation: z.ZodOptional<z.ZodString>;
    telephones: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["phone", "mobile", "fax"]>;
        number: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number: string;
        type: "phone" | "mobile" | "fax";
    }, {
        number: string;
        type: "phone" | "mobile" | "fax";
    }>, "many">>;
    website: z.ZodOptional<z.ZodString>;
    addresses: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["primary", "invoicing", "delivery", "visiting"]>;
        address: z.ZodObject<{
            addressee: z.ZodOptional<z.ZodString>;
            line_1: z.ZodString;
            postal_code: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            area_level_two_id: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        }, {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        }>;
    }, "strip", z.ZodTypeAny, {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }, {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }>, "many">>;
    language: z.ZodOptional<z.ZodString>;
    gender: z.ZodOptional<z.ZodEnum<["male", "female"]>>;
    birthdate: z.ZodOptional<z.ZodString>;
    iban: z.ZodOptional<z.ZodString>;
    bic: z.ZodOptional<z.ZodString>;
    national_identification_number: z.ZodOptional<z.ZodString>;
    remarks: z.ZodOptional<z.ZodString>;
    tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        value: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        value?: any;
        id: string;
    }, {
        value?: any;
        id: string;
    }>, "many">>;
    marketing_mails_consent: z.ZodOptional<z.ZodBoolean>;
}, {
    id: z.ZodString;
    last_name: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    language?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    salutation?: string | undefined;
    emails?: {
        type: "primary";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "mobile" | "fax";
    }[] | undefined;
    website?: string | undefined;
    addresses?: {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }[] | undefined;
    gender?: "male" | "female" | undefined;
    birthdate?: string | undefined;
    iban?: string | undefined;
    bic?: string | undefined;
    national_identification_number?: string | undefined;
    remarks?: string | undefined;
    tags?: string[] | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    marketing_mails_consent?: boolean | undefined;
    id: string;
}, {
    language?: string | undefined;
    first_name?: string | undefined;
    last_name?: string | undefined;
    salutation?: string | undefined;
    emails?: {
        type: "primary";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "mobile" | "fax";
    }[] | undefined;
    website?: string | undefined;
    addresses?: {
        type: "primary" | "invoicing" | "delivery" | "visiting";
        address: {
            addressee?: string | undefined;
            area_level_two_id?: string | undefined;
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
        };
    }[] | undefined;
    gender?: "male" | "female" | undefined;
    birthdate?: string | undefined;
    iban?: string | undefined;
    bic?: string | undefined;
    national_identification_number?: string | undefined;
    remarks?: string | undefined;
    tags?: string[] | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    marketing_mails_consent?: boolean | undefined;
    id: string;
}>;
declare const ContactsDelete: z.ZodObject<{
    id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
}, {
    id: string;
}>;
declare const ContactsTag: z.ZodObject<{
    id: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    tags: string[];
}, {
    id: string;
    tags: string[];
}>;
declare const ContactsLinkToCompany: z.ZodObject<{
    id: z.ZodString;
    company_id: z.ZodString;
    position: z.ZodOptional<z.ZodString>;
    decision_maker: z.ZodOptional<z.ZodBoolean>;
}, "strip", z.ZodTypeAny, {
    position?: string | undefined;
    decision_maker?: boolean | undefined;
    id: string;
    company_id: string;
}, {
    position?: string | undefined;
    decision_maker?: boolean | undefined;
    id: string;
    company_id: string;
}>;
declare const ContactsUnlinkFromCompany: z.ZodObject<{
    id: z.ZodString;
    company_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    company_id: string;
}, {
    id: string;
    company_id: string;
}>;
export type ContactsInfoResponse = z.infer<typeof ContactsInfoResponse>;
export type ContactsAdd = z.infer<typeof ContactsAdd>;
export type ContactsUpdate = z.infer<typeof ContactsUpdate>;
export type ContactsDelete = z.infer<typeof ContactsDelete>;
export type ContactsTag = z.infer<typeof ContactsTag>;
export type ContactsUntag = z.infer<typeof ContactsTag>;
export type ContactsLinkToCompany = z.infer<typeof ContactsLinkToCompany>;
export type ContactsUnlinkFromCompany = z.infer<typeof ContactsUnlinkFromCompany>;
export type ContactsUpdateCompanyLink = z.infer<typeof ContactsLinkToCompany>;
declare const contactsAddResponse: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        type: string;
        id: string;
    };
}, {
    data: {
        type: string;
        id: string;
    };
}>;
export type contactsAddResponse = z.infer<typeof contactsAddResponse>;
export {};
