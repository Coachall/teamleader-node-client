import { z } from "zod";
declare const FilesUpload: z.ZodObject<{
    name: z.ZodString;
    subject: z.ZodObject<{
        type: z.ZodEnum<["company", "contact", "deal", "invoice", "creditNote"]>;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: "company" | "contact" | "deal" | "invoice" | "creditNote";
        id: string;
    }, {
        type: "company" | "contact" | "deal" | "invoice" | "creditNote";
        id: string;
    }>;
    folder: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    folder?: string | undefined;
    name: string;
    subject: {
        type: "company" | "contact" | "deal" | "invoice" | "creditNote";
        id: string;
    };
}, {
    folder?: string | undefined;
    name: string;
    subject: {
        type: "company" | "contact" | "deal" | "invoice" | "creditNote";
        id: string;
    };
}>;
declare const FilesUploadResponse: z.ZodObject<{
    data: z.ZodObject<{
        location: z.ZodString;
        expires_at: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        location: string;
        expires_at: string;
    }, {
        location: string;
        expires_at: string;
    }>;
}, "strip", z.ZodTypeAny, {
    data: {
        location: string;
        expires_at: string;
    };
}, {
    data: {
        location: string;
        expires_at: string;
    };
}>;
export type FilesUploadRequest = z.infer<typeof FilesUpload>;
export type FilesUploadResponse = z.infer<typeof FilesUploadResponse>;
export {};
