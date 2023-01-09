import { z } from "zod";
declare const ProductsListParams: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        term: z.ZodOptional<z.ZodString>;
        updated_since: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
    }, {
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
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
}, "strip", z.ZodTypeAny, {
    filter?: {
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
    } | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}, {
    filter?: {
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
    } | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}>;
declare const ProductsList: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodOptional<z.ZodString>;
        code: z.ZodString;
        added_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        description?: string | undefined;
        code: string;
        id: string;
        name: string;
        added_at: string;
    }, {
        description?: string | undefined;
        code: string;
        id: string;
        name: string;
        added_at: string;
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        description?: string | undefined;
        code: string;
        id: string;
        name: string;
        added_at: string;
    }[];
}, {
    data: {
        description?: string | undefined;
        code: string;
        id: string;
        name: string;
        added_at: string;
    }[];
}>;
declare const ProductInfo: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        description: z.ZodString;
        code: z.ZodString;
        purchase_price: z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
        }, "strip", z.ZodTypeAny, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }>;
        selling_price: z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
        }, "strip", z.ZodTypeAny, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }>;
    }, "strip", z.ZodTypeAny, {
        code: string;
        id: string;
        name: string;
        description: string;
        purchase_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        selling_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
    }, {
        code: string;
        id: string;
        name: string;
        description: string;
        purchase_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        selling_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        code: string;
        id: string;
        name: string;
        description: string;
        purchase_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        selling_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
    };
}, {
    data: {
        code: string;
        id: string;
        name: string;
        description: string;
        purchase_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        selling_price: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
    };
}>;
declare const ProductsAdd: z.ZodObject<{
    name: z.ZodString;
    description: z.ZodOptional<z.ZodString>;
    code: z.ZodString;
    purchase_price: z.ZodOptional<z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }>>;
    selling_price: z.ZodOptional<z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    description?: string | undefined;
    purchase_price?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    selling_price?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    code: string;
    name: string;
}, {
    description?: string | undefined;
    purchase_price?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    selling_price?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    code: string;
    name: string;
}>;
export type ProductsListParams = z.infer<typeof ProductsListParams>;
export type ProductsList = z.infer<typeof ProductsList>;
export type ProductInfo = z.infer<typeof ProductInfo>;
export type ProductsAdd = z.infer<typeof ProductsAdd>;
declare const ProductsAddResponse: z.ZodObject<{
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
export type ProductsAddResponse = z.infer<typeof ProductsAddResponse>;
export {};
