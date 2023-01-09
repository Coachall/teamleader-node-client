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

const DealsListParams = z.object({
	filter: z
		.object({
			ids: z.array(z.string()).optional(),
			term: z.string().optional(),
			customer: z
				.object({
					type: z.enum(["company", "contact"]),
					id: z.string().uuid(),
				})
				.optional(),
			phase_id: z.string().uuid().optional(),
			estimated_closing_date: z.string().optional(),
			estimated_closing_date_from: z.string().optional(),
			estimated_closing_date_until: z.string().optional(),
			responsible_user_id:
				z.string().uuid().optional() || z.array(z.string().uuid()).optional(),
			updated_since: z.string().optional(),
			created_before: z.string().optional(),
			status: z.array(z.string()).optional(),
		})
		.optional(),
	sort: z
		.array(
			z.object({
				field: z.enum(["created_at", "weighted_value"]),
				order: z.enum(["asc", "desc"]),
			})
		)
		.optional(),
	page: z
		.object({
			size: z.number(),
			number: z.number(),
		})
		.optional(),
});

const DealType = z.object({
	id: z.string().uuid(),
	title: z.string(),
	summary: z.string(),
	reference: z.string(),
	status: z.enum(["open", "won", "lost"]),
	lead: z.object({
		customer: z.object({
			type: z.enum(["contact", "company"]),
			id: z.string().uuid(),
		}),
		contact_person: z
			.object({
				type: z.string(),
				id: z.string().uuid(),
			})
			.optional(),
	}),
	department: z.object({
		type: z.string(),
		id: z.string().uuid(),
	}),
	estimated_value: z.object({
		amount: z.number(),
		currency: currency,
	}),
	estimated_closing_date: z.string(),
	estimated_probability: z.number(),
	weighted_value: z.object({
		amount: z.number(),
		currency: currency,
	}),
	purchase_order_number: z.string(),
	current_phase: z.object({
		type: z.string(),
		id: z.string().uuid(),
	}),
	responsible_user: z.object({
		type: z.string(),
		id: z.string().uuid(),
	}),
	closed_at: z.string(),
	source: z.object({
		type: z.string(),
		id: z.string().uuid(),
	}),
	lost_reason: z.object({
		reason: z.object({
			type: z.string(),
			id: z.string().uuid(),
		}),
		remark: z.string(),
	}),
	created_at: z.string(),
	updated_at: z.string(),
	web_url: z.string().url(),
});

const DealsListResponse = z.object({
	data: z.array(DealType),
});

const DealsInfoResponse = DealType.extend({
	phase_history: z.object({
		phase: z.object({
			type: z.string(),
			id: z.string().uuid(),
		}),
		started_at: z.string(),
		started_by: z.object({
			type: z.string(),
			id: z.string().uuid(),
		}),
	}),
	quotations: z.array(
		z.object({
			type: z.string(),
			id: z.string().uuid(),
		})
	),
	custom_fields: z
		.array(
			z.object({
				id: z.string().uuid(),
				value: z.any(),
			})
		)
		.optional(),
});

const DealsCreate = z.object({
	lead: z.object({
		customer: z.object({
			type: z.enum(["contact", "company"]),
			id: z.string().uuid(),
		}),
		contact_person_id: z.string().uuid().optional(),
	}),
	title: z.string(),
	summary: z.string().optional(),
	source_id: z.string().optional(),
	department_id: z.string().optional(),
	responsible_user_id: z.string().optional(),
	phase_id: z.string().optional(),
	estimated_value: z
		.object({
			amount: z.number(),
			currency: currency,
		})
		.optional(),
	estimated_closing_date: z.string().optional(),
	estimated_probability: z.number().optional(),
	custom_fields: z
		.array(
			z.object({
				id: z.string().uuid(),
				value: z.any(),
			})
		)
		.optional(),
});

const DealsUpdate = DealsCreate.extend({
	id: z.string().uuid(),
	lead: z
		.object({
			customer: z.object({
				type: z.enum(["contact", "company"]),
				id: z.string().uuid(),
			}),
			contact_person_id: z.string().uuid(),
		})
		.optional(),
	title: z.string().optional(),
});

const DealsMove = z.object({
	id: z.string().uuid(),
	phase_id: z.string().uuid(),
});

const DealsLose = z.object({
	id: z.string().uuid(),
	reason_id: z.string().uuid().optional(),
	extra_info: z.string().optional(),
});

export type DealsListParams = z.infer<typeof DealsListParams>;
export type DealsListResponse = z.infer<typeof DealsListResponse>;
export type DealsInfoResponse = z.infer<typeof DealsInfoResponse>;
export type DealsCreate = z.infer<typeof DealsCreate>;
export type DealsUpdate = z.infer<typeof DealsUpdate>;
export type DealsMove = z.infer<typeof DealsMove>;
export type DealsLose = z.infer<typeof DealsLose>;

// RESPONSES

const DealsCreateResponse = z.object({
	data: z.object({
		id: z.string(),
		type: z.string(),
	}),
});
export type DealsCreateResponse = z.infer<typeof DealsCreateResponse>;
