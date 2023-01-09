import { z } from "zod";
declare const workTypesList: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
    }, {
        id: string;
        name: string;
    }>, "many">;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        id: string;
        name: string;
    }[];
}, {
    included?: {} | undefined;
    data: {
        id: string;
        name: string;
    }[];
}>;
declare const params: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        term: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        ids?: string[] | undefined;
        term?: string | undefined;
    }, {
        ids?: string[] | undefined;
        term?: string | undefined;
    }>>;
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
    sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodString;
        order: z.ZodOptional<z.ZodEnum<["asc", "desc"]>>;
    }, "strip", z.ZodTypeAny, {
        order?: "desc" | "asc" | undefined;
        field: string;
    }, {
        order?: "desc" | "asc" | undefined;
        field: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    filter?: {
        ids?: string[] | undefined;
        term?: string | undefined;
    } | undefined;
    sort?: {
        order?: "desc" | "asc" | undefined;
        field: string;
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}, {
    filter?: {
        ids?: string[] | undefined;
        term?: string | undefined;
    } | undefined;
    sort?: {
        order?: "desc" | "asc" | undefined;
        field: string;
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}>;
export type WorkTypesList = z.infer<typeof workTypesList>;
export type WorkTypesListParams = z.infer<typeof params>;
export {};
