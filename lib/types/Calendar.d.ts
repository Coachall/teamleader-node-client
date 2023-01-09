import { z } from "zod";
declare const EventsInfoResponse: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        description: z.ZodString;
        creator: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        task: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        activity_type: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        starts_at: z.ZodString;
        ends_at: z.ZodString;
        location: z.ZodString;
        attendees: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["user", "contact"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "user" | "contact";
            id: string;
        }, {
            type: "user" | "contact";
            id: string;
        }>, "many">;
        links: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["company", "contact", "work_order", "deal"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "company" | "contact" | "deal" | "work_order";
            id: string;
        }, {
            type: "company" | "contact" | "deal" | "work_order";
            id: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        location: string;
        id: string;
        title: string;
        description: string;
        task: {
            type: string;
            id: string;
        };
        creator: {
            type: string;
            id: string;
        };
        activity_type: {
            type: string;
            id: string;
        };
        starts_at: string;
        ends_at: string;
        attendees: {
            type: "user" | "contact";
            id: string;
        }[];
        links: {
            type: "company" | "contact" | "deal" | "work_order";
            id: string;
        }[];
    }, {
        location: string;
        id: string;
        title: string;
        description: string;
        task: {
            type: string;
            id: string;
        };
        creator: {
            type: string;
            id: string;
        };
        activity_type: {
            type: string;
            id: string;
        };
        starts_at: string;
        ends_at: string;
        attendees: {
            type: "user" | "contact";
            id: string;
        }[];
        links: {
            type: "company" | "contact" | "deal" | "work_order";
            id: string;
        }[];
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        location: string;
        id: string;
        title: string;
        description: string;
        task: {
            type: string;
            id: string;
        };
        creator: {
            type: string;
            id: string;
        };
        activity_type: {
            type: string;
            id: string;
        };
        starts_at: string;
        ends_at: string;
        attendees: {
            type: "user" | "contact";
            id: string;
        }[];
        links: {
            type: "company" | "contact" | "deal" | "work_order";
            id: string;
        }[];
    };
}, {
    data: {
        location: string;
        id: string;
        title: string;
        description: string;
        task: {
            type: string;
            id: string;
        };
        creator: {
            type: string;
            id: string;
        };
        activity_type: {
            type: string;
            id: string;
        };
        starts_at: string;
        ends_at: string;
        attendees: {
            type: "user" | "contact";
            id: string;
        }[];
        links: {
            type: "company" | "contact" | "deal" | "work_order";
            id: string;
        }[];
    };
}>;
export type EventsInfoResponse = z.infer<typeof EventsInfoResponse>;
export {};
