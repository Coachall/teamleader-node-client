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
const ProductsListParams = z.object({
	filter: z
		.object({
			ids: z.array(z.string()).optional(),
			term: z.string().optional(),
			updated_since: z.string().optional(),
		})
		.optional(),
	page: z
		.object({
			size: z.number(),
			number: z.number(),
		})
		.optional(),
});

const ProductsList = z.object({
	data: z.array(
		z.object({
			id: z.string().uuid(),
			name: z.string(),
			description: z.string().optional(),
			code: z.string(),
			added_at: z.string(),
		})
	),
});

const ProductInfo = z.object({
	data: z.object({
		id: z.string().uuid(),
		name: z.string(),
		description: z.string(),
		code: z.string(),
		purchase_price: z.object({
			amount: z.number(),
			currency: currency,
		}),
		selling_price: z.object({
			amount: z.number(),
			currency: currency,
		}),
	}),
});

const ProductsAdd = z.object({
	name: z.string(),
	description: z.string().optional(),
	code: z.string(),
	purchase_price: z
		.object({
			amount: z.number(),
			currency: currency,
		})
		.optional(),
	selling_price: z
		.object({
			amount: z.number(),
			currency: currency,
		})
		.optional(),
});

export type ProductsListParams = z.infer<typeof ProductsListParams>;
export type ProductsList = z.infer<typeof ProductsList>;
export type ProductInfo = z.infer<typeof ProductInfo>;
export type ProductsAdd = z.infer<typeof ProductsAdd>;

// RESPONSES

const ProductsAddResponse = z.object({
	data: z.object({
		id: z.string(),
		type: z.string(),
	}),
});
export type ProductsAddResponse = z.infer<typeof ProductsAddResponse>;
