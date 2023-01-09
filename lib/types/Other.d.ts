import { z } from "zod";
declare const migrateIdRequest: z.ZodObject<{
    type: z.ZodEnum<["account", "user", "product", "contact", "company", "deal", "dealPhase", "project", "milestone", "task", "meeting", "call", "ticket", "invoice", "creditNote", "subscription", "quotation"]>;
    id: z.ZodNumber;
}, "strip", z.ZodTypeAny, {
    type: "user" | "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket" | "account" | "dealPhase" | "task" | "meeting" | "call" | "creditNote" | "quotation";
    id: number;
}, {
    type: "user" | "company" | "contact" | "deal" | "project" | "milestone" | "product" | "invoice" | "subscription" | "ticket" | "account" | "dealPhase" | "task" | "meeting" | "call" | "creditNote" | "quotation";
    id: number;
}>;
declare const migrateIdResponse: z.ZodObject<{
    data: z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        type: string;
        id: string;
    };
}, {
    data: {
        type: string;
        id: string;
    };
}>;
declare const registerWebhookRequest: z.ZodObject<{
    url: z.ZodString;
    types: z.ZodArray<z.ZodNullable<z.ZodEnum<["account.deactivated", "account.deleted", "company.added", "company.deleted", "company.updated", "contact.added", "contact.deleted", "contact.linkedToCompany", "contact.unlinkedFromCompany", "contact.updated", "creditNote.booked", "deal.created", "deal.deleted", "deal.lost", "deal.moved", "deal.updated", "deal.won", "invoice.booked", "invoice.deleted", "invoice.drafted", "invoice.paymentRegistered", "invoice.paymentRemoved", "invoice.sent", "invoice.updated", "milestone.created", "milestone.updated", "product.added", "project.created", "project.deleted", "project.updated", "timeTracking.added", "timeTracking.deleted", "timeTracking.updated", "user.deactivated"]>>, "many">;
}, "strip", z.ZodTypeAny, {
    url: string;
    types: ("account.deactivated" | "account.deleted" | "company.added" | "company.deleted" | "company.updated" | "contact.added" | "contact.deleted" | "contact.linkedToCompany" | "contact.unlinkedFromCompany" | "contact.updated" | "creditNote.booked" | "deal.created" | "deal.deleted" | "deal.lost" | "deal.moved" | "deal.updated" | "deal.won" | "invoice.booked" | "invoice.deleted" | "invoice.drafted" | "invoice.paymentRegistered" | "invoice.paymentRemoved" | "invoice.sent" | "invoice.updated" | "milestone.created" | "milestone.updated" | "product.added" | "project.created" | "project.deleted" | "project.updated" | "timeTracking.added" | "timeTracking.deleted" | "timeTracking.updated" | "user.deactivated" | null)[];
}, {
    url: string;
    types: ("account.deactivated" | "account.deleted" | "company.added" | "company.deleted" | "company.updated" | "contact.added" | "contact.deleted" | "contact.linkedToCompany" | "contact.unlinkedFromCompany" | "contact.updated" | "creditNote.booked" | "deal.created" | "deal.deleted" | "deal.lost" | "deal.moved" | "deal.updated" | "deal.won" | "invoice.booked" | "invoice.deleted" | "invoice.drafted" | "invoice.paymentRegistered" | "invoice.paymentRemoved" | "invoice.sent" | "invoice.updated" | "milestone.created" | "milestone.updated" | "product.added" | "project.created" | "project.deleted" | "project.updated" | "timeTracking.added" | "timeTracking.deleted" | "timeTracking.updated" | "user.deactivated" | null)[];
}>;
declare const listWebhooksResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        url: z.ZodString;
        types: z.ZodArray<z.ZodNullable<z.ZodEnum<["account.deactivated", "account.deleted", "company.added", "company.deleted", "company.updated", "contact.added", "contact.deleted", "contact.linkedToCompany", "contact.unlinkedFromCompany", "contact.updated", "creditNote.booked", "deal.created", "deal.deleted", "deal.lost", "deal.moved", "deal.updated", "deal.won", "invoice.booked", "invoice.deleted", "invoice.drafted", "invoice.paymentRegistered", "invoice.paymentRemoved", "invoice.sent", "invoice.updated", "milestone.created", "milestone.updated", "product.added", "project.created", "project.deleted", "project.updated", "timeTracking.added", "timeTracking.deleted", "timeTracking.updated", "user.deactivated"]>>, "many">;
    }, "strip", z.ZodTypeAny, {
        url: string;
        types: ("account.deactivated" | "account.deleted" | "company.added" | "company.deleted" | "company.updated" | "contact.added" | "contact.deleted" | "contact.linkedToCompany" | "contact.unlinkedFromCompany" | "contact.updated" | "creditNote.booked" | "deal.created" | "deal.deleted" | "deal.lost" | "deal.moved" | "deal.updated" | "deal.won" | "invoice.booked" | "invoice.deleted" | "invoice.drafted" | "invoice.paymentRegistered" | "invoice.paymentRemoved" | "invoice.sent" | "invoice.updated" | "milestone.created" | "milestone.updated" | "product.added" | "project.created" | "project.deleted" | "project.updated" | "timeTracking.added" | "timeTracking.deleted" | "timeTracking.updated" | "user.deactivated" | null)[];
    }, {
        url: string;
        types: ("account.deactivated" | "account.deleted" | "company.added" | "company.deleted" | "company.updated" | "contact.added" | "contact.deleted" | "contact.linkedToCompany" | "contact.unlinkedFromCompany" | "contact.updated" | "creditNote.booked" | "deal.created" | "deal.deleted" | "deal.lost" | "deal.moved" | "deal.updated" | "deal.won" | "invoice.booked" | "invoice.deleted" | "invoice.drafted" | "invoice.paymentRegistered" | "invoice.paymentRemoved" | "invoice.sent" | "invoice.updated" | "milestone.created" | "milestone.updated" | "product.added" | "project.created" | "project.deleted" | "project.updated" | "timeTracking.added" | "timeTracking.deleted" | "timeTracking.updated" | "user.deactivated" | null)[];
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        url: string;
        types: ("account.deactivated" | "account.deleted" | "company.added" | "company.deleted" | "company.updated" | "contact.added" | "contact.deleted" | "contact.linkedToCompany" | "contact.unlinkedFromCompany" | "contact.updated" | "creditNote.booked" | "deal.created" | "deal.deleted" | "deal.lost" | "deal.moved" | "deal.updated" | "deal.won" | "invoice.booked" | "invoice.deleted" | "invoice.drafted" | "invoice.paymentRegistered" | "invoice.paymentRemoved" | "invoice.sent" | "invoice.updated" | "milestone.created" | "milestone.updated" | "product.added" | "project.created" | "project.deleted" | "project.updated" | "timeTracking.added" | "timeTracking.deleted" | "timeTracking.updated" | "user.deactivated" | null)[];
    }[];
}, {
    data: {
        url: string;
        types: ("account.deactivated" | "account.deleted" | "company.added" | "company.deleted" | "company.updated" | "contact.added" | "contact.deleted" | "contact.linkedToCompany" | "contact.unlinkedFromCompany" | "contact.updated" | "creditNote.booked" | "deal.created" | "deal.deleted" | "deal.lost" | "deal.moved" | "deal.updated" | "deal.won" | "invoice.booked" | "invoice.deleted" | "invoice.drafted" | "invoice.paymentRegistered" | "invoice.paymentRemoved" | "invoice.sent" | "invoice.updated" | "milestone.created" | "milestone.updated" | "product.added" | "project.created" | "project.deleted" | "project.updated" | "timeTracking.added" | "timeTracking.deleted" | "timeTracking.updated" | "user.deactivated" | null)[];
    }[];
}>;
export type MigrateIdResponse = z.infer<typeof migrateIdResponse>;
export type MigrateIdRequest = z.infer<typeof migrateIdRequest>;
export type RegisterWebhookRequest = z.infer<typeof registerWebhookRequest>;
export type ListWebhooksResponse = z.infer<typeof listWebhooksResponse>;
export {};
