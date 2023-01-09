import { z } from "zod";
declare const customFieldDefinitionsListParams: z.ZodObject<{
    sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<["label", "context"]>;
        order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
        order?: "desc" | "asc" | undefined;
        field: "label" | "context";
    }, {
        order?: "desc" | "asc" | undefined;
        field: "label" | "context";
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
    sort?: {
        order?: "desc" | "asc" | undefined;
        field: "label" | "context";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}, {
    sort?: {
        order?: "desc" | "asc" | undefined;
        field: "label" | "context";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}>;
declare const customFieldDefinitionsList: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        context: z.ZodEnum<["contact", "company", "deal", "project", "milestone", "product", "invoice", "subscription", "ticket"]>;
        type: z.ZodEnum<["single_line", "multi_line", "single_select", "multi_select", "date", "money", "auto_increment", "integer", "number", "boolean", "email", "telephone", "url", "company", "contact", "product", "user"]>;
        label: z.ZodString;
        group: z.ZodNullable<z.ZodString>;
        required: z.ZodBoolean;
        configuration: z.ZodOptional<z.ZodObject<{
            options: z.ZodArray<z.ZodString, "many">;
            extra_option_allowed: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            options: string[];
            extra_option_allowed: boolean;
        }, {
            options: string[];
            extra_option_allowed: boolean;
        }>>;
    }, "strip", z.ZodTypeAny, {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    }, {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    }>, "many">;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    }[];
}, {
    included?: {} | undefined;
    data: {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    }[];
}>;
declare const customFieldDefinitionsInfo: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        context: z.ZodEnum<["contact", "company", "deal", "project", "milestone", "product", "invoice", "subscription", "ticket"]>;
        type: z.ZodEnum<["single_line", "multi_line", "single_select", "multi_select", "date", "money", "auto_increment", "integer", "number", "boolean", "email", "telephone", "url", "company", "contact", "product", "user"]>;
        label: z.ZodString;
        group: z.ZodNullable<z.ZodString>;
        required: z.ZodBoolean;
        configuration: z.ZodOptional<z.ZodObject<{
            options: z.ZodArray<z.ZodString, "many">;
            extra_option_allowed: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            options: string[];
            extra_option_allowed: boolean;
        }, {
            options: string[];
            extra_option_allowed: boolean;
        }>>;
    }, "strip", z.ZodTypeAny, {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    }, {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    }>;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    };
}, {
    included?: {} | undefined;
    data: {
        configuration?: {
            options: string[];
            extra_option_allowed: boolean;
        } | undefined;
        required: boolean;
        type: "number" | "boolean" | "url" | "user" | "integer" | "date" | "email" | "company" | "contact" | "product" | "single_line" | "multi_line" | "single_select" | "multi_select" | "money" | "auto_increment" | "telephone";
        id: string;
        label: string;
        group: string | null;
        context: "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket";
    };
}>;
export type CustomFieldDefinitionsList = z.infer<typeof customFieldDefinitionsList>;
export type CustomFieldDefinitionsListParams = z.infer<typeof customFieldDefinitionsListParams>;
export type CustomFieldDefinitionsInfo = z.infer<typeof customFieldDefinitionsInfo>;
export {};
