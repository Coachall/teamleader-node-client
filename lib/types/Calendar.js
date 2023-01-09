import { z } from "zod";
const EventsInfoResponse = z.object({
    data: z.object({
        id: z.string().uuid(),
        title: z.string(),
        description: z.string(),
        creator: z.object({
            type: z.string(),
            id: z.string().uuid(),
        }),
        task: z.object({
            type: z.string(),
            id: z.string().uuid(),
        }),
        activity_type: z.object({
            type: z.string(),
            id: z.string().uuid(),
        }),
        starts_at: z.string(),
        ends_at: z.string(),
        location: z.string(),
        attendees: z.array(z.object({
            type: z.enum(["user", "contact"]),
            id: z.string().uuid(),
        })),
        links: z.array(z.object({
            type: z.enum(["company", "contact", "work_order", "deal"]),
            id: z.string().uuid(),
        })),
    }),
});
//# sourceMappingURL=Calendar.js.map