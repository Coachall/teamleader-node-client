import { z } from "zod";
const workTypesList = z.object({
    data: z.array(z.object({
        id: z.string(),
        name: z.string(),
    })),
    included: z.object({}).optional(),
});
const params = z.object({
    filter: z
        .object({
        ids: z.array(z.string()).optional(),
        term: z.string().optional(),
    })
        .optional(),
    page: z
        .object({
        size: z.number(),
        number: z.number(),
    })
        .optional(),
    sort: z
        .array(z.object({
        field: z.string(),
        order: z.enum(["asc", "desc"]).optional(),
    }))
        .optional(),
});
//# sourceMappingURL=WorkTypes.js.map