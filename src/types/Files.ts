import { z } from "zod";

const FilesUpload = z.object({
	name: z.string(),
	subject: z.object({
		type: z.enum(["company", "contact", "deal", "invoice", "creditNote"]),
		id: z.string().uuid(),
	}),
	folder: z.string().optional(),
});

const FilesUploadResponse = z.object({
	data: z.object({
		location: z.string().url(),
		expires_at: z.string(),
	}),
});

export type FilesUploadRequest = z.infer<typeof FilesUpload>;
export type FilesUploadResponse = z.infer<typeof FilesUploadResponse>;
