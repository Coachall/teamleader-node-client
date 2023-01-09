import { z } from "zod";
const teamsList = z.object({
    data: z.array(z.object({
        id: z.string(),
        name: z.string(),
        team_lead: z.object({
            type: z.string(),
            id: z.string(),
        }),
        members: z.array(z.object({
            type: z.string(),
            id: z.string(),
        })),
    })),
    included: z.object({}).optional(),
});
//# sourceMappingURL=Teams.js.map