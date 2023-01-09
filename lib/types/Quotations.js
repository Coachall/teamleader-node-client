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
const languages = z.enum([
    "en",
    "nl",
    "fr",
    "ch",
    "jp",
    "de",
    "es",
    "pt",
    "it",
    "gr",
    "tr",
    "cs",
    "so",
    "sk",
    "ru",
    "ko",
    "ir",
    "iq",
    "hu",
    "gh",
    "bg",
    "bs",
    "br",
    "ar",
    "ag",
    "al",
    "af",
    "ro",
    "pl",
    "ca",
    "da",
    "uk",
    "no",
    "fi",
    "sv",
]);
const QuotationCreate = z.object({
    deal_id: z.string().uuid(),
    grouped_lines: z.array(z.object({
        section: z
            .object({
            title: z.string(),
        })
            .optional(),
        line_items: z.array(z.object({
            quantity: z.number(),
            description: z.string(),
            extended_description: z.string().optional(),
            unit_price: z.object({
                amount: z.number(),
                currency: currency,
                tax: z.enum(["excluding"]),
            }),
            tax_rate_id: z.string().uuid(),
            discount: z
                .object({
                value: z.number(),
                type: z.enum(["percentage"]),
            })
                .optional(),
            product_id: z.string().optional(),
            purchase_price: z
                .object({
                amount: z.number(),
                currency: currency,
            })
                .optional(),
        })),
    })),
    discounts: z
        .array(z.object({
        type: z.enum(["percentage"]).optional(),
        value: z.number().optional(),
        description: z.string().optional(),
    }))
        .optional(),
    text: z.string().optional(),
});
const QuotationsSend = z.object({
    quotations: z.array(z.string().uuid()),
    from: z
        .object({
        sender: z.object({
            type: z.enum(["user", "department"]),
            id: z.string().uuid(),
        }),
        email_address: z.string().email(),
    })
        .optional(),
    recipients: z.object({
        to: z.array(z.object({
            customer: z
                .object({
                type: z.enum(["company", "contact"]),
                id: z.string().uuid(),
            })
                .optional(),
            email_address: z.string().email(),
        })),
        cc: z
            .array(z.object({
            customer: z
                .object({
                type: z.enum(["company", "contact"]),
                id: z.string().uuid(),
            })
                .optional(),
            email_address: z.string().email(),
        }))
            .optional(),
        bcc: z
            .array(z.object({
            customer: z
                .object({
                type: z.enum(["company", "contact"]),
                id: z.string().uuid(),
            })
                .optional(),
            email_address: z.string().email(),
        }))
            .optional(),
    }),
    subject: z.string(),
    content: z.string(),
    attachments: z.array(z.string().uuid()).optional(),
    language: languages,
});
// RESPONSES
const QuotationsCreateResponse = z.object({
    data: z.object({
        id: z.string(),
        type: z.string(),
    }),
});
//# sourceMappingURL=Quotations.js.map