import { z } from "zod";
const currency = z.enum([
    "BAM",
    "CAD",
    "CHF",
    "CLP",
    "CNY",
    "COP",
    "CZK",
    "DKK",
    "EUR",
    "GBP",
    "INR",
    "ISK",
    "JPY",
    "MAD",
    "MXN",
    "NOK",
    "PEN",
    "PLN",
    "RON",
    "SEK",
    "TRY",
    "USD",
    "ZAR",
]);
const invoicesResponse = z.object({
    data: z.object({
        id: z.string().uuid(),
        department: z.object({
            type: z.string(),
            id: z.string().uuid(),
        }),
        invoice_number: z.string(),
        invoice_date: z.string(),
        status: z.enum(["draft", "outstanding", "matched"]),
        due_on: z.string(),
        paid: z.boolean(),
        paid_at: z.string(),
        sent: z.boolean(),
        purchase_order_number: z.string(),
        invoicee: z.object({
            name: z.string(),
            vat_number: z.string(),
            customer: z.object({
                type: z.string(),
                id: z.string().uuid(),
            }),
            for_attention_of: z.object({
                name: z.string(),
                contact: z.object({
                    type: z.string(),
                    id: z.string().uuid(),
                }),
            }),
            email: z.string(),
            national_identification_number: z.string(),
        }),
        discounts: z.array(z.object({
            type: z.enum(["percentage"]),
            value: z.number(),
            description: z.string(),
        })),
        // TODO: complete these lines
        grouped_lines: z.array(z.object({
            section: z
                .object({
                title: z.string(),
            })
                .optional(),
            line_items: z.array(z.object({
                product: z.object({
                    type: z.string(),
                    id: z.string().uuid(),
                }),
                product_category: z.object({
                    id: z.string().uuid(),
                    type: z.string(),
                }),
                quantity: z.number(),
                description: z.string(),
                extended_description: z.string(),
                unit_price: z.object({
                    amount: z.number(),
                    currency: currency,
                    tax: z.enum(["excluding"]),
                }),
                tax: z.object({
                    type: z.string(),
                    id: z.string().uuid(),
                }),
                discount: z.object({
                    type: z.enum(["percentage"]),
                    value: z.number(),
                }),
                total: z.object({
                    tax_exclusive: z.object({
                        amount: z.number(),
                        currency: currency,
                    }),
                    tax_exclusive_before_discount: z.object({
                        amount: z.number(),
                        currency: currency,
                    }),
                    tax_inclusive: z.object({
                        amount: z.number(),
                        currency: currency,
                    }),
                    tax_inclusive_before_discount: z.object({
                        amount: z.number(),
                        currency: currency,
                    }),
                    witheld_tax: z.object({
                        type: z.string(),
                        id: z.string().uuid(),
                    }),
                }),
            })),
        })),
        total: z.object({
            tax_exclusive: z.object({
                amount: z.number(),
                currency: currency,
            }),
            tax_exclusive_before_discount: z.object({
                amount: z.number(),
                currency: currency,
            }),
            tax_inclusive: z.object({
                amount: z.number(),
                currency: currency,
            }),
            tax_inclusive_before_discount: z.object({
                amount: z.number(),
                currency: currency,
            }),
            taxes: z.array(z.object({
                rate: z.number(),
                taxable: z.object({
                    amount: z.number(),
                    currency: currency,
                }),
                tax: z.object({
                    amount: z.number(),
                    currency: currency,
                }),
            })),
            withheld_taxes: z.array(z.object({
                id: z.string().uuid(),
                taxable: z.object({
                    amount: z.number(),
                    currency: currency,
                }),
                withheld: z.object({
                    amount: z.number(),
                    currency: currency,
                }),
            })),
            payable: z.object({
                amount: z.number(),
                currency: currency,
            }),
            due: z.object({
                amount: z.number(),
                currency: currency,
            }),
        }),
        payment_term: z.object({
            type: z.enum(["cash", "end_of_month", "after_invoice_date"]),
            days: z.number(),
        }),
        payments: z.array(z.object({
            paid_at: z.string(),
            payment: z.object({
                amount: z.number(),
                currency: currency,
            }),
        })),
        payment_reference: z.string(),
        note: z.string(),
        //TODO: complete this
        deal: z.object({
            type: z.string(),
            id: z.string().uuid(),
        }),
    }),
});
//# sourceMappingURL=Invoices.js.map