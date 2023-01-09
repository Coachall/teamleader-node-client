import { z } from "zod";
const customFieldDefinitionsListParams = z.object({
    sort: z
        .array(z.object({
        field: z.enum(["label", "context"]),
        order: z.enum(["asc", "desc"]).optional(),
    }))
        .optional(),
    page: z
        .object({
        size: z.number(),
        number: z.number(),
    })
        .optional(),
});
const customFieldDefinitionsList = z.object({
    data: z.array(z.object({
        id: z.string(),
        context: z.enum([
            "contact",
            "company",
            "deal",
            "project",
            "milestone",
            "product",
            "invoice",
            "subscription",
            "ticket",
        ]),
        type: z.enum([
            "single_line",
            "multi_line",
            "single_select",
            "multi_select",
            "date",
            "money",
            "auto_increment",
            "integer",
            "number",
            "boolean",
            "email",
            "telephone",
            "url",
            "company",
            "contact",
            "product",
            "user",
        ]),
        label: z.string(),
        group: z.string().nullable(),
        required: z.boolean(),
        configuration: z
            .object({
            options: z.array(z.string()),
            extra_option_allowed: z.boolean(),
        })
            .optional(),
    })),
    included: z.object({}).optional(),
});
const customFieldDefinitionsInfo = z.object({
    data: z.object({
        id: z.string(),
        context: z.enum([
            "contact",
            "company",
            "deal",
            "project",
            "milestone",
            "product",
            "invoice",
            "subscription",
            "ticket",
        ]),
        type: z.enum([
            "single_line",
            "multi_line",
            "single_select",
            "multi_select",
            "date",
            "money",
            "auto_increment",
            "integer",
            "number",
            "boolean",
            "email",
            "telephone",
            "url",
            "company",
            "contact",
            "product",
            "user",
        ]),
        label: z.string(),
        group: z.string().nullable(),
        required: z.boolean(),
        configuration: z
            .object({
            options: z.array(z.string()),
            extra_option_allowed: z.boolean(),
        })
            .optional(),
    }),
    included: z.object({}).optional(),
});
//# sourceMappingURL=CustomFields.js.map