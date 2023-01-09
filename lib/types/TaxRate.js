import { z } from "zod";
const TaxRateParams = z.object({
    filter: z
        .object({
        department_id: z.string().optional(),
    })
        .optional(),
    sort: z
        .array(z.object({
        field: z.string(),
        order: z.enum(["asc", "desc"]),
    }))
        .optional(),
    page: z
        .object({
        size: z.number(),
        number: z.number(),
    })
        .optional(),
});
const TaxRateResponse = z.object({
    data: z.array(z.object({
        id: z.string().uuid(),
        description: z.string(),
        rate: z.number(),
        department: z.object({
            type: z.string(),
            id: z.string().uuid(),
        }),
    })),
    included: z.object({}).optional(),
});
//# sourceMappingURL=TaxRate.js.map