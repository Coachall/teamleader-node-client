import { z } from "zod";
const currency = z.enum([
	"BAM",
	"CAD",
	"CHF",
	"CLP",
	"CNY",
	"COP",
	"CZK",
	"DKK",
	"EUR",
	"GBP",
	"INR",
	"ISK",
	"JPY",
	"MAD",
	"MXN",
	"NOK",
	"PEN",
	"PLN",
	"RON",
	"SEK",
	"TRY",
	"USD",
	"ZAR",
]);

const invoicesResponse = z.object({
	data: z.object({
		id: z.string().uuid(),
		department: z.object({
			type: z.string(),
			id: z.string().uuid(),
		}),
		invoice_number: z.string(),
		invoice_date: z.string(),
		status: z.enum(["draft", "outstanding", "matched"]),
		due_on: z.string(),
		paid: z.boolean(),
		paid_at: z.string(),
		sent: z.boolean(),
		purchase_order_number: z.string(),
		invoicee: z.object({
			name: z.string(),
			vat_number: z.string(),
			customer: z.object({
				type: z.string(),
				id: z.string().uuid(),
			}),
			for_attention_of: z.object({
				name: z.string(),
				contact: z.object({
					type: z.string(),
					id: z.string().uuid(),
				}),
			}),
			email: z.string(),
			national_identification_number: z.string(),
		}),
		discounts: z.array(
			z.object({
				type: z.enum(["percentage"]),
				value: z.number(),
				description: z.string(),
			})
		),
		// TODO: complete these lines
		grouped_lines: z.array(
			z.object({
				section: z
					.object({
						title: z.string(),
					})
					.optional(),
				line_items: z.array(
					z.object({
						product: z.object({
							type: z.string(),
							id: z.string().uuid(),
						}),
						product_category: z.object({
							id: z.string().uuid(),
							type: z.string(),
						}),
						quantity: z.number(),
						description: z.string(),
						extended_description: z.string(),
						unit_price: z.object({
							amount: z.number(),
							currency: currency,
							tax: z.enum(["excluding"]),
						}),
						tax: z.object({
							type: z.string(),
							id: z.string().uuid(),
						}),
						discount: z.object({
							type: z.enum(["percentage"]),
							value: z.number(),
						}),
					})
				),
			})
		),
		deal: z.object({
			type: z.string(),
			id: z.string().uuid(),
		}),
	}),
});

export type InvoicesInfoResponse = z.infer<typeof invoicesResponse>;
