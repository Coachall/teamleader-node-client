import { z } from "zod";

const migrateIdRequest = z.object({
	type: z.enum([
		"account",
		"user",
		"product",
		"contact",
		"company",
		"deal",
		"dealPhase",
		"project",
		"milestone",
		"task",
		"meeting",
		"call",
		"ticket",
		"invoice",
		"creditNote",
		"subscription",
		"quotation",
	]),
	id: z.number(),
});

const migrateIdResponse = z.object({
	data: z.object({
		type: z.string(),
		id: z.string().uuid(),
	}),
});

const registerWebhookRequest = z.object({
	url: z.string().url(),
	types: z.array(
		z
			.enum([
				"account.deactivated",
				"account.deleted",
				"company.added",
				"company.deleted",
				"company.updated",
				"contact.added",
				"contact.deleted",
				"contact.linkedToCompany",
				"contact.unlinkedFromCompany",
				"contact.updated",
				"creditNote.booked",
				"deal.created",
				"deal.deleted",
				"deal.lost",
				"deal.moved",
				"deal.updated",
				"deal.won",
				"invoice.booked",
				"invoice.deleted",
				"invoice.drafted",
				"invoice.paymentRegistered",
				"invoice.paymentRemoved",
				"invoice.sent",
				"invoice.updated",
				"milestone.created",
				"milestone.updated",
				"product.added",
				"project.created",
				"project.deleted",
				"project.updated",
				"timeTracking.added",
				"timeTracking.deleted",
				"timeTracking.updated",
				"user.deactivated",
			])
			.nullable()
	),
});

const listWebhooksResponse = z.object({
	data: z.array(
		z.object({
			url: z.string().url(),
			types: z.array(
				z
					.enum([
						"account.deactivated",
						"account.deleted",
						"company.added",
						"company.deleted",
						"company.updated",
						"contact.added",
						"contact.deleted",
						"contact.linkedToCompany",
						"contact.unlinkedFromCompany",
						"contact.updated",
						"creditNote.booked",
						"deal.created",
						"deal.deleted",
						"deal.lost",
						"deal.moved",
						"deal.updated",
						"deal.won",
						"invoice.booked",
						"invoice.deleted",
						"invoice.drafted",
						"invoice.paymentRegistered",
						"invoice.paymentRemoved",
						"invoice.sent",
						"invoice.updated",
						"milestone.created",
						"milestone.updated",
						"product.added",
						"project.created",
						"project.deleted",
						"project.updated",
						"timeTracking.added",
						"timeTracking.deleted",
						"timeTracking.updated",
						"user.deactivated",
					])
					.nullable()
			),
		})
	),
});

export type MigrateIdResponse = z.infer<typeof migrateIdResponse>;
export type MigrateIdRequest = z.infer<typeof migrateIdRequest>;
export type RegisterWebhookRequest = z.infer<typeof registerWebhookRequest>;
export type ListWebhooksResponse = z.infer<typeof listWebhooksResponse>;
