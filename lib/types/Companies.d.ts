import { z } from "zod";
declare const CompaniesListParams: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        email: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<["primary"]>;
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "primary";
            email: string;
        }, {
            type: "primary";
            email: string;
        }>>;
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        term: z.ZodOptional<z.ZodString>;
        updated_since: z.ZodOptional<z.ZodString>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        vat_number: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        email?: {
            type: "primary";
            email: string;
        } | undefined;
        vat_number?: string | undefined;
        tags?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
    }, {
        email?: {
            type: "primary";
            email: string;
        } | undefined;
        vat_number?: string | undefined;
        tags?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
    }>>;
    sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<["name", "added_at", "updated_at"]>;
        order: z.ZodEnum<["asc"]>;
    }, "strip", z.ZodTypeAny, {
        order: "asc";
        field: "name" | "added_at" | "updated_at";
    }, {
        order: "asc";
        field: "name" | "added_at" | "updated_at";
    }>, "many">>;
    page: z.ZodOptional<z.ZodObject<{
        size: z.ZodNumber;
        number: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        number: number;
        size: number;
    }, {
        number: number;
        size: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    filter?: {
        email?: {
            type: "primary";
            email: string;
        } | undefined;
        vat_number?: string | undefined;
        tags?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
    } | undefined;
    sort?: {
        order: "asc";
        field: "name" | "added_at" | "updated_at";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}, {
    filter?: {
        email?: {
            type: "primary";
            email: string;
        } | undefined;
        vat_number?: string | undefined;
        tags?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
    } | undefined;
    sort?: {
        order: "asc";
        field: "name" | "added_at" | "updated_at";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}>;
declare const CompaniesListResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodEnum<["active", "deactivated"]>;
        business_type: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        vat_number: z.ZodString;
        national_identification_number: z.ZodString;
        emails: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["primary", "invoicing"]>;
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "primary" | "invoicing";
            email: string;
        }, {
            type: "primary" | "invoicing";
            email: string;
        }>, "many">;
        telephones: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["phone", "fax"]>;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            type: "phone" | "fax";
        }, {
            number: string;
            type: "phone" | "fax";
        }>, "many">;
        website: z.ZodString;
        primary_address: z.ZodObject<{
            line_1: z.ZodString;
            postal_code: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            area_level_two_id: z.ZodObject<{
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
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        }, {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        }>;
        iban: z.ZodString;
        bic: z.ZodString;
        language: z.ZodString;
        preferred_currency: z.ZodString;
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
        responsible_user: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        added_at: z.ZodString;
        updated_at: z.ZodString;
        web_url: z.ZodString;
        tags: z.ZodArray<z.ZodString, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        tags: string[];
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    }, {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        tags: string[];
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        tags: string[];
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    }[];
}, {
    data: {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        tags: string[];
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    }[];
}>;
declare const CompanyInfoResponse: z.ZodObject<{
    data: z.ZodObject<z.extendShape<{
        id: z.ZodString;
        name: z.ZodString;
        status: z.ZodEnum<["active", "deactivated"]>;
        business_type: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        vat_number: z.ZodString;
        national_identification_number: z.ZodString;
        emails: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["primary", "invoicing"]>;
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "primary" | "invoicing";
            email: string;
        }, {
            type: "primary" | "invoicing";
            email: string;
        }>, "many">;
        telephones: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["phone", "fax"]>;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            type: "phone" | "fax";
        }, {
            number: string;
            type: "phone" | "fax";
        }>, "many">;
        website: z.ZodString;
        primary_address: z.ZodObject<{
            line_1: z.ZodString;
            postal_code: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            area_level_two_id: z.ZodObject<{
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
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        }, {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        }>;
        iban: z.ZodString;
        bic: z.ZodString;
        language: z.ZodString;
        preferred_currency: z.ZodString;
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
        responsible_user: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        added_at: z.ZodString;
        updated_at: z.ZodString;
        web_url: z.ZodString;
        tags: z.ZodArray<z.ZodString, "many">;
    }, {
        remarks: z.ZodString;
        custom_fields: z.ZodArray<z.ZodObject<{
            id: z.ZodString;
            value: z.ZodAny;
        }, "strip", z.ZodTypeAny, {
            value?: any;
            id: string;
        }, {
            value?: any;
            id: string;
        }>, "many">;
        marketing_mails_consent: z.ZodBoolean;
    }>, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        remarks: string;
        tags: string[];
        custom_fields: {
            value?: any;
            id: string;
        }[];
        marketing_mails_consent: boolean;
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    }, {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        remarks: string;
        tags: string[];
        custom_fields: {
            value?: any;
            id: string;
        }[];
        marketing_mails_consent: boolean;
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        remarks: string;
        tags: string[];
        custom_fields: {
            value?: any;
            id: string;
        }[];
        marketing_mails_consent: boolean;
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    };
}, {
    data: {
        id: string;
        name: string;
        status: "active" | "deactivated";
        language: string;
        vat_number: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            number: string;
            type: "phone" | "fax";
        }[];
        website: string;
        iban: string;
        bic: string;
        national_identification_number: string;
        payment_term: {
            type: "cash" | "end_of_month" | "after_invoice_date";
            days: number;
        };
        invoicing_preferences: {
            electronic_invoicing_address: string;
        };
        remarks: string;
        tags: string[];
        custom_fields: {
            value?: any;
            id: string;
        }[];
        marketing_mails_consent: boolean;
        added_at: string;
        updated_at: string;
        web_url: string;
        business_type: {
            type: string;
            id: string;
        };
        primary_address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two_id: {
                type: string;
                id: string;
            };
        };
        preferred_currency: string;
        responsible_user: {
            type: string;
            id: string;
        };
    };
}>;
declare const CompanyAdd: z.ZodObject<{
    name: z.ZodString;
    business_type_id: z.ZodOptional<z.ZodString>;
    vat_number: z.ZodOptional<z.ZodString>;
    national_identification_number: z.ZodOptional<z.ZodString>;
    emails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["primary", "invoicing"]>;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "primary" | "invoicing";
        email: string;
    }, {
        type: "primary" | "invoicing";
        email: string;
    }>, "many">>;
    telephones: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["phone", "fax"]>;
        number: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number: string;
        type: "phone" | "fax";
    }, {
        number: string;
        type: "phone" | "fax";
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
    iban: z.ZodOptional<z.ZodString>;
    bic: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    responsible_user_id: z.ZodOptional<z.ZodString>;
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
    vat_number?: string | undefined;
    emails?: {
        type: "primary" | "invoicing";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "fax";
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
    business_type_id?: string | undefined;
    responsible_user_id?: string | undefined;
    name: string;
}, {
    language?: string | undefined;
    vat_number?: string | undefined;
    emails?: {
        type: "primary" | "invoicing";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "fax";
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
    business_type_id?: string | undefined;
    responsible_user_id?: string | undefined;
    name: string;
}>;
declare const CompaniesUpdate: z.ZodObject<z.extendShape<{
    name: z.ZodString;
    business_type_id: z.ZodOptional<z.ZodString>;
    vat_number: z.ZodOptional<z.ZodString>;
    national_identification_number: z.ZodOptional<z.ZodString>;
    emails: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["primary", "invoicing"]>;
        email: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "primary" | "invoicing";
        email: string;
    }, {
        type: "primary" | "invoicing";
        email: string;
    }>, "many">>;
    telephones: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodEnum<["phone", "fax"]>;
        number: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        number: string;
        type: "phone" | "fax";
    }, {
        number: string;
        type: "phone" | "fax";
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
    iban: z.ZodOptional<z.ZodString>;
    bic: z.ZodOptional<z.ZodString>;
    language: z.ZodOptional<z.ZodString>;
    responsible_user_id: z.ZodOptional<z.ZodString>;
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
    name: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    name?: string | undefined;
    language?: string | undefined;
    vat_number?: string | undefined;
    emails?: {
        type: "primary" | "invoicing";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "fax";
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
    business_type_id?: string | undefined;
    responsible_user_id?: string | undefined;
    id: string;
}, {
    name?: string | undefined;
    language?: string | undefined;
    vat_number?: string | undefined;
    emails?: {
        type: "primary" | "invoicing";
        email: string;
    }[] | undefined;
    telephones?: {
        number: string;
        type: "phone" | "fax";
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
    business_type_id?: string | undefined;
    responsible_user_id?: string | undefined;
    id: string;
}>;
declare const CompaniesTag: z.ZodObject<{
    id: z.ZodString;
    tags: z.ZodArray<z.ZodString, "many">;
}, "strip", z.ZodTypeAny, {
    id: string;
    tags: string[];
}, {
    id: string;
    tags: string[];
}>;
export type CompaniesListParams = z.infer<typeof CompaniesListParams>;
export type CompaniesListResponse = z.infer<typeof CompaniesListResponse>;
export type CompanyInfoResponse = z.infer<typeof CompanyInfoResponse>;
export type CompanyAdd = z.infer<typeof CompanyAdd>;
export type CompaniesUpdate = z.infer<typeof CompaniesUpdate>;
export type CompaniesTag = z.infer<typeof CompaniesTag>;
export type CompaniesUntag = z.infer<typeof CompaniesTag>;
declare const companiesAddResponse: z.ZodObject<{
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
export type CompaniesAddResponse = z.infer<typeof companiesAddResponse>;
export {};
