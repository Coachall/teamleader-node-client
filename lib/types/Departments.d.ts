import { z } from "zod";
declare const response: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        currency: z.ZodString;
        vat_number: z.ZodString;
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
        status: z.ZodEnum<["active", "archived"]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        vat_number: string;
    }, {
        id: string;
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        vat_number: string;
    }>, "many">;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        id: string;
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        vat_number: string;
    }[];
}, {
    included?: {} | undefined;
    data: {
        id: string;
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        vat_number: string;
    }[];
}>;
declare const params: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        status: z.ZodOptional<z.ZodArray<z.ZodEnum<["active", "archived"]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        status?: ("active" | "archived")[] | undefined;
        ids?: string[] | undefined;
    }, {
        status?: ("active" | "archived")[] | undefined;
        ids?: string[] | undefined;
    }>>;
}, "strip", z.ZodTypeAny, {
    filter?: {
        status?: ("active" | "archived")[] | undefined;
        ids?: string[] | undefined;
    } | undefined;
}, {
    filter?: {
        status?: ("active" | "archived")[] | undefined;
        ids?: string[] | undefined;
    } | undefined;
}>;
declare const infoResponse: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        currency: z.ZodString;
        vat_number: z.ZodString;
        address: z.ZodObject<{
            line_1: z.ZodString;
            postal_code: z.ZodString;
            city: z.ZodString;
            country: z.ZodString;
            area_level_two: z.ZodObject<{
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
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two: {
                type: string;
                id: string;
            };
        }, {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two: {
                type: string;
                id: string;
            };
        }>;
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
            email: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "phone" | "fax";
            email: string;
        }, {
            type: "phone" | "fax";
            email: string;
        }>, "many">;
        website: z.ZodString;
        iban: z.ZodString;
        bic: z.ZodString;
        fiscal_regime: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["active", "archived"]>;
    }, "strip", z.ZodTypeAny, {
        id: string;
        address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two: {
                type: string;
                id: string;
            };
        };
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            type: "phone" | "fax";
            email: string;
        }[];
        website: string;
        iban: string;
        bic: string;
        vat_number: string;
        fiscal_regime: string | null;
    }, {
        id: string;
        address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two: {
                type: string;
                id: string;
            };
        };
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            type: "phone" | "fax";
            email: string;
        }[];
        website: string;
        iban: string;
        bic: string;
        vat_number: string;
        fiscal_regime: string | null;
    }>;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        id: string;
        address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two: {
                type: string;
                id: string;
            };
        };
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            type: "phone" | "fax";
            email: string;
        }[];
        website: string;
        iban: string;
        bic: string;
        vat_number: string;
        fiscal_regime: string | null;
    };
}, {
    included?: {} | undefined;
    data: {
        id: string;
        address: {
            line_1: string;
            postal_code: string;
            city: string;
            country: string;
            area_level_two: {
                type: string;
                id: string;
            };
        };
        name: string;
        status: "active" | "archived";
        currency: string;
        emails: {
            type: "primary" | "invoicing";
            email: string;
        }[];
        telephones: {
            type: "phone" | "fax";
            email: string;
        }[];
        website: string;
        iban: string;
        bic: string;
        vat_number: string;
        fiscal_regime: string | null;
    };
}>;
export type DepartmentsListParams = z.infer<typeof params>;
export type DepartmentsListResponse = z.infer<typeof response>;
export type DepartmentsInfoResponse = z.infer<typeof infoResponse>;
export {};
