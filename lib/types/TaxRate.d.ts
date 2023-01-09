import { z } from "zod";
declare const TaxRateParams: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        department_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        department_id?: string | undefined;
    }, {
        department_id?: string | undefined;
    }>>;
    sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        order: z.ZodEnum<["asc", "desc"]>;
    }, "strip", z.ZodTypeAny, {
        order: "desc" | "asc";
        field: string;
    }, {
        order: "desc" | "asc";
        field: string;
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
        department_id?: string | undefined;
    } | undefined;
    sort?: {
        order: "desc" | "asc";
        field: string;
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}, {
    filter?: {
        department_id?: string | undefined;
    } | undefined;
    sort?: {
        order: "desc" | "asc";
        field: string;
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}>;
declare const TaxRateResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        description: z.ZodString;
        rate: z.ZodNumber;
        department: z.ZodObject<{
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
        id: string;
        description: string;
        department: {
            type: string;
            id: string;
        };
        rate: number;
    }, {
        id: string;
        description: string;
        department: {
            type: string;
            id: string;
        };
        rate: number;
    }>, "many">;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        id: string;
        description: string;
        department: {
            type: string;
            id: string;
        };
        rate: number;
    }[];
}, {
    included?: {} | undefined;
    data: {
        id: string;
        description: string;
        department: {
            type: string;
            id: string;
        };
        rate: number;
    }[];
}>;
export type TaxRateResponse = z.infer<typeof TaxRateResponse>;
export type TaxRateParams = z.infer<typeof TaxRateParams>;
export {};
