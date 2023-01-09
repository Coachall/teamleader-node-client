import { z } from "zod";
declare const teamsList: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        name: z.ZodString;
        team_lead: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        members: z.ZodArray<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>, "many">;
    }, "strip", z.ZodTypeAny, {
        id: string;
        name: string;
        team_lead: {
            type: string;
            id: string;
        };
        members: {
            type: string;
            id: string;
        }[];
    }, {
        id: string;
        name: string;
        team_lead: {
            type: string;
            id: string;
        };
        members: {
            type: string;
            id: string;
        }[];
    }>, "many">;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        id: string;
        name: string;
        team_lead: {
            type: string;
            id: string;
        };
        members: {
            type: string;
            id: string;
        }[];
    }[];
}, {
    included?: {} | undefined;
    data: {
        id: string;
        name: string;
        team_lead: {
            type: string;
            id: string;
        };
        members: {
            type: string;
            id: string;
        }[];
    }[];
}>;
export type TeamsList = z.infer<typeof teamsList>;
export {};
