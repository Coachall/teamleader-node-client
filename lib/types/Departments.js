import { z } from "zod";
const response = z.object({
    data: z.array(z.object({
        id: z.string(),
        name: z.string(),
        currency: z.string(),
        vat_number: z.string(),
        emails: z.array(z.object({
            type: z.enum(["primary", "invoicing"]),
            email: z.string().email(),
        })),
        status: z.enum(["active", "archived"]),
    })),
    included: z.object({}).optional(),
});
const params = z.object({
    filter: z
        .object({
        ids: z.array(z.string()).optional(),
        status: z.array(z.enum(["active", "archived"])).optional(),
    })
        .optional(),
});
const infoResponse = z.object({
    data: z.object({
        id: z.string(),
        name: z.string(),
        currency: z.string(),
        vat_number: z.string(),
        address: z.object({
            line_1: z.string(),
            postal_code: z.string(),
            city: z.string(),
            country: z.string(),
            area_level_two: z.object({
                type: z.string(),
                id: z.string(),
            }),
        }),
        emails: z.array(z.object({
            type: z.enum(["primary", "invoicing"]),
            email: z.string().email(),
        })),
        telephones: z.array(z.object({
            type: z.enum(["phone", "fax"]),
            email: z.string(),
        })),
        website: z.string().url(),
        iban: z.string(),
        bic: z.string(),
        fiscal_regime: z.string().nullable(),
        status: z.enum(["active", "archived"]),
    }),
    included: z.object({}).optional(),
});
//# sourceMappingURL=Departments.js.map