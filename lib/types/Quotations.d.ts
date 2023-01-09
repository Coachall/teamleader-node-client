import { z } from "zod";
declare const QuotationCreate: z.ZodObject<{
    deal_id: z.ZodString;
    grouped_lines: z.ZodArray<z.ZodObject<{
        section: z.ZodOptional<z.ZodObject<{
            title: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            title: string;
        }, {
            title: string;
        }>>;
        line_items: z.ZodArray<z.ZodObject<{
            quantity: z.ZodNumber;
            description: z.ZodString;
            extended_description: z.ZodOptional<z.ZodString>;
            unit_price: z.ZodObject<{
                amount: z.ZodNumber;
                currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
                tax: z.ZodEnum<["excluding"]>;
            }, "strip", z.ZodTypeAny, {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            }, {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            }>;
            tax_rate_id: z.ZodString;
            discount: z.ZodOptional<z.ZodObject<{
                value: z.ZodNumber;
                type: z.ZodEnum<["percentage"]>;
            }, "strip", z.ZodTypeAny, {
                type: "percentage";
                value: number;
            }, {
                type: "percentage";
                value: number;
            }>>;
            product_id: z.ZodOptional<z.ZodString>;
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
        }, "strip", z.ZodTypeAny, {
            extended_description?: string | undefined;
            discount?: {
                type: "percentage";
                value: number;
            } | undefined;
            product_id?: string | undefined;
            purchase_price?: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
            } | undefined;
            description: string;
            quantity: number;
            unit_price: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            };
            tax_rate_id: string;
        }, {
            extended_description?: string | undefined;
            discount?: {
                type: "percentage";
                value: number;
            } | undefined;
            product_id?: string | undefined;
            purchase_price?: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
            } | undefined;
            description: string;
            quantity: number;
            unit_price: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            };
            tax_rate_id: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        section?: {
            title: string;
        } | undefined;
        line_items: {
            extended_description?: string | undefined;
            discount?: {
                type: "percentage";
                value: number;
            } | undefined;
            product_id?: string | undefined;
            purchase_price?: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
            } | undefined;
            description: string;
            quantity: number;
            unit_price: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            };
            tax_rate_id: string;
        }[];
    }, {
        section?: {
            title: string;
        } | undefined;
        line_items: {
            extended_description?: string | undefined;
            discount?: {
                type: "percentage";
                value: number;
            } | undefined;
            product_id?: string | undefined;
            purchase_price?: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
            } | undefined;
            description: string;
            quantity: number;
            unit_price: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            };
            tax_rate_id: string;
        }[];
    }>, "many">;
    discounts: z.ZodOptional<z.ZodArray<z.ZodObject<{
        type: z.ZodOptional<z.ZodEnum<["percentage"]>>;
        value: z.ZodOptional<z.ZodNumber>;
        description: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        type?: "percentage" | undefined;
        value?: number | undefined;
        description?: string | undefined;
    }, {
        type?: "percentage" | undefined;
        value?: number | undefined;
        description?: string | undefined;
    }>, "many">>;
    text: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    text?: string | undefined;
    discounts?: {
        type?: "percentage" | undefined;
        value?: number | undefined;
        description?: string | undefined;
    }[] | undefined;
    deal_id: string;
    grouped_lines: {
        section?: {
            title: string;
        } | undefined;
        line_items: {
            extended_description?: string | undefined;
            discount?: {
                type: "percentage";
                value: number;
            } | undefined;
            product_id?: string | undefined;
            purchase_price?: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
            } | undefined;
            description: string;
            quantity: number;
            unit_price: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            };
            tax_rate_id: string;
        }[];
    }[];
}, {
    text?: string | undefined;
    discounts?: {
        type?: "percentage" | undefined;
        value?: number | undefined;
        description?: string | undefined;
    }[] | undefined;
    deal_id: string;
    grouped_lines: {
        section?: {
            title: string;
        } | undefined;
        line_items: {
            extended_description?: string | undefined;
            discount?: {
                type: "percentage";
                value: number;
            } | undefined;
            product_id?: string | undefined;
            purchase_price?: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
            } | undefined;
            description: string;
            quantity: number;
            unit_price: {
                currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                amount: number;
                tax: "excluding";
            };
            tax_rate_id: string;
        }[];
    }[];
}>;
declare const QuotationsSend: z.ZodObject<{
    quotations: z.ZodArray<z.ZodString, "many">;
    from: z.ZodOptional<z.ZodObject<{
        sender: z.ZodObject<{
            type: z.ZodEnum<["user", "department"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "user" | "department";
            id: string;
        }, {
            type: "user" | "department";
            id: string;
        }>;
        email_address: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sender: {
            type: "user" | "department";
            id: string;
        };
        email_address: string;
    }, {
        sender: {
            type: "user" | "department";
            id: string;
        };
        email_address: string;
    }>>;
    recipients: z.ZodObject<{
        to: z.ZodArray<z.ZodObject<{
            customer: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["company", "contact"]>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "company" | "contact";
                id: string;
            }, {
                type: "company" | "contact";
                id: string;
            }>>;
            email_address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }, {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }>, "many">;
        cc: z.ZodOptional<z.ZodArray<z.ZodObject<{
            customer: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["company", "contact"]>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "company" | "contact";
                id: string;
            }, {
                type: "company" | "contact";
                id: string;
            }>>;
            email_address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }, {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }>, "many">>;
        bcc: z.ZodOptional<z.ZodArray<z.ZodObject<{
            customer: z.ZodOptional<z.ZodObject<{
                type: z.ZodEnum<["company", "contact"]>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "company" | "contact";
                id: string;
            }, {
                type: "company" | "contact";
                id: string;
            }>>;
            email_address: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }, {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }>, "many">>;
    }, "strip", z.ZodTypeAny, {
        cc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        bcc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        to: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[];
    }, {
        cc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        bcc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        to: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[];
    }>;
    subject: z.ZodString;
    content: z.ZodString;
    attachments: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    language: z.ZodEnum<["en", "nl", "fr", "ch", "jp", "de", "es", "pt", "it", "gr", "tr", "cs", "so", "sk", "ru", "ko", "ir", "iq", "hu", "gh", "bg", "bs", "br", "ar", "ag", "al", "af", "ro", "pl", "ca", "da", "uk", "no", "fi", "sv"]>;
}, "strip", z.ZodTypeAny, {
    from?: {
        sender: {
            type: "user" | "department";
            id: string;
        };
        email_address: string;
    } | undefined;
    attachments?: string[] | undefined;
    content: string;
    language: "br" | "tr" | "so" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nl" | "pl" | "pt" | "sv" | "ch" | "jp" | "gr" | "cs" | "sk" | "ru" | "ko" | "ir" | "iq" | "hu" | "gh" | "bg" | "bs" | "ar" | "ag" | "al" | "af" | "ro" | "ca" | "uk" | "no";
    quotations: string[];
    recipients: {
        cc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        bcc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        to: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[];
    };
    subject: string;
}, {
    from?: {
        sender: {
            type: "user" | "department";
            id: string;
        };
        email_address: string;
    } | undefined;
    attachments?: string[] | undefined;
    content: string;
    language: "br" | "tr" | "so" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nl" | "pl" | "pt" | "sv" | "ch" | "jp" | "gr" | "cs" | "sk" | "ru" | "ko" | "ir" | "iq" | "hu" | "gh" | "bg" | "bs" | "ar" | "ag" | "al" | "af" | "ro" | "ca" | "uk" | "no";
    quotations: string[];
    recipients: {
        cc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        bcc?: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[] | undefined;
        to: {
            customer?: {
                type: "company" | "contact";
                id: string;
            } | undefined;
            email_address: string;
        }[];
    };
    subject: string;
}>;
export type QuotationCreate = z.infer<typeof QuotationCreate>;
export type QuotationsSend = z.infer<typeof QuotationsSend>;
declare const QuotationsCreateResponse: z.ZodObject<{
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
export type QuotationsCreateResponse = z.infer<typeof QuotationsCreateResponse>;
export {};
