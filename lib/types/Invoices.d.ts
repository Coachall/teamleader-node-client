import { z } from "zod";
declare const invoicesResponse: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
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
        invoice_number: z.ZodString;
        invoice_date: z.ZodString;
        status: z.ZodEnum<["draft", "outstanding", "matched"]>;
        due_on: z.ZodString;
        paid: z.ZodBoolean;
        paid_at: z.ZodString;
        sent: z.ZodBoolean;
        purchase_order_number: z.ZodString;
        invoicee: z.ZodObject<{
            name: z.ZodString;
            vat_number: z.ZodString;
            customer: z.ZodObject<{
                type: z.ZodString;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id: string;
            }, {
                type: string;
                id: string;
            }>;
            for_attention_of: z.ZodObject<{
                name: z.ZodString;
                contact: z.ZodObject<{
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
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            }, {
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            }>;
            email: z.ZodString;
            national_identification_number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            name: string;
            email: string;
            national_identification_number: string;
            vat_number: string;
            customer: {
                type: string;
                id: string;
            };
            for_attention_of: {
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            };
        }, {
            name: string;
            email: string;
            national_identification_number: string;
            vat_number: string;
            customer: {
                type: string;
                id: string;
            };
            for_attention_of: {
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            };
        }>;
        discounts: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["percentage"]>;
            value: z.ZodNumber;
            description: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "percentage";
            value: number;
            description: string;
        }, {
            type: "percentage";
            value: number;
            description: string;
        }>, "many">;
        grouped_lines: z.ZodArray<z.ZodObject<{
            section: z.ZodOptional<z.ZodObject<{
                title: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                title: string;
            }, {
                title: string;
            }>>;
            line_items: z.ZodArray<z.ZodObject<{
                product: z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                }, {
                    type: string;
                    id: string;
                }>;
                product_category: z.ZodObject<{
                    id: z.ZodString;
                    type: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                }, {
                    type: string;
                    id: string;
                }>;
                quantity: z.ZodNumber;
                description: z.ZodString;
                extended_description: z.ZodString;
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
                tax: z.ZodObject<{
                    type: z.ZodString;
                    id: z.ZodString;
                }, "strip", z.ZodTypeAny, {
                    type: string;
                    id: string;
                }, {
                    type: string;
                    id: string;
                }>;
                discount: z.ZodObject<{
                    type: z.ZodEnum<["percentage"]>;
                    value: z.ZodNumber;
                }, "strip", z.ZodTypeAny, {
                    type: "percentage";
                    value: number;
                }, {
                    type: "percentage";
                    value: number;
                }>;
            }, "strip", z.ZodTypeAny, {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }, {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }>, "many">;
        }, "strip", z.ZodTypeAny, {
            section?: {
                title: string;
            } | undefined;
            line_items: {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }[];
        }, {
            section?: {
                title: string;
            } | undefined;
            line_items: {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }[];
        }>, "many">;
        deal: z.ZodObject<{
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
        status: "draft" | "outstanding" | "matched";
        deal: {
            type: string;
            id: string;
        };
        department: {
            type: string;
            id: string;
        };
        purchase_order_number: string;
        grouped_lines: {
            section?: {
                title: string;
            } | undefined;
            line_items: {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }[];
        }[];
        discounts: {
            type: "percentage";
            value: number;
            description: string;
        }[];
        invoice_number: string;
        invoice_date: string;
        due_on: string;
        paid: boolean;
        paid_at: string;
        sent: boolean;
        invoicee: {
            name: string;
            email: string;
            national_identification_number: string;
            vat_number: string;
            customer: {
                type: string;
                id: string;
            };
            for_attention_of: {
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            };
        };
    }, {
        id: string;
        status: "draft" | "outstanding" | "matched";
        deal: {
            type: string;
            id: string;
        };
        department: {
            type: string;
            id: string;
        };
        purchase_order_number: string;
        grouped_lines: {
            section?: {
                title: string;
            } | undefined;
            line_items: {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }[];
        }[];
        discounts: {
            type: "percentage";
            value: number;
            description: string;
        }[];
        invoice_number: string;
        invoice_date: string;
        due_on: string;
        paid: boolean;
        paid_at: string;
        sent: boolean;
        invoicee: {
            name: string;
            email: string;
            national_identification_number: string;
            vat_number: string;
            customer: {
                type: string;
                id: string;
            };
            for_attention_of: {
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            };
        };
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        id: string;
        status: "draft" | "outstanding" | "matched";
        deal: {
            type: string;
            id: string;
        };
        department: {
            type: string;
            id: string;
        };
        purchase_order_number: string;
        grouped_lines: {
            section?: {
                title: string;
            } | undefined;
            line_items: {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }[];
        }[];
        discounts: {
            type: "percentage";
            value: number;
            description: string;
        }[];
        invoice_number: string;
        invoice_date: string;
        due_on: string;
        paid: boolean;
        paid_at: string;
        sent: boolean;
        invoicee: {
            name: string;
            email: string;
            national_identification_number: string;
            vat_number: string;
            customer: {
                type: string;
                id: string;
            };
            for_attention_of: {
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            };
        };
    };
}, {
    data: {
        id: string;
        status: "draft" | "outstanding" | "matched";
        deal: {
            type: string;
            id: string;
        };
        department: {
            type: string;
            id: string;
        };
        purchase_order_number: string;
        grouped_lines: {
            section?: {
                title: string;
            } | undefined;
            line_items: {
                description: string;
                product: {
                    type: string;
                    id: string;
                };
                quantity: number;
                extended_description: string;
                unit_price: {
                    currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
                    amount: number;
                    tax: "excluding";
                };
                tax: {
                    type: string;
                    id: string;
                };
                discount: {
                    type: "percentage";
                    value: number;
                };
                product_category: {
                    type: string;
                    id: string;
                };
            }[];
        }[];
        discounts: {
            type: "percentage";
            value: number;
            description: string;
        }[];
        invoice_number: string;
        invoice_date: string;
        due_on: string;
        paid: boolean;
        paid_at: string;
        sent: boolean;
        invoicee: {
            name: string;
            email: string;
            national_identification_number: string;
            vat_number: string;
            customer: {
                type: string;
                id: string;
            };
            for_attention_of: {
                name: string;
                contact: {
                    type: string;
                    id: string;
                };
            };
        };
    };
}>;
export type InvoicesInfoResponse = z.infer<typeof invoicesResponse>;
export {};
