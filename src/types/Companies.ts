import { z } from "zod";

const CompaniesListParams = z.object({
	filter: z
		.object({
			email: z
				.object({
					type: z.enum(["primary"]),
					email: z.string(),
				})
				.optional(),
			ids: z.array(z.string()).optional(),
			term: z.string().optional(),
			updated_since: z.string().optional(),
			tags: z.array(z.string()).optional(),
			vat_number: z.string().optional(),
		})
		.optional(),
	sort: z
		.array(
			z.object({
				field: z.enum(["name", "added_at", "updated_at"]),
				order: z.enum(["asc"]),
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

const CompanyType = z.object({
	id: z.string().uuid(),
	name: z.string(),
	status: z.enum(["active", "deactivated"]),
	business_type: z.object({
		type: z.string(),
		id: z.string().uuid(),
	}),
	vat_number: z.string(),
	national_identification_number: z.string(),
	emails: z.array(
		z.object({
			type: z.enum(["primary", "invoicing"]),
			email: z.string().email(),
		})
	),
	telephones: z.array(
		z.object({
			type: z.enum(["phone", "fax"]),
			number: z.string(),
		})
	),
	website: z.string().url(),
	primary_address: z.object({
		line_1: z.string(),
		postal_code: z.string(),
		city: z.string(),
		country: z.string(),
		area_level_two_id: z.object({
			id: z.string().uuid(),
			type: z.string(),
		}),
	}),
	iban: z.string(),
	bic: z.string(),
	language: z.string(),
	preferred_currency: z.string(),
	payment_term: z.object({
		type: z.enum(["cash", "end_of_month", "after_invoice_date"]),
		days: z.number(),
	}),
	invoicing_preferences: z.object({
		electronic_invoicing_address: z.string(),
	}),
	responsible_user: z.object({
		type: z.string(),
		id: z.string().uuid(),
	}),
	added_at: z.string(),
	updated_at: z.string(),
	web_url: z.string().url(),
	tags: z.array(z.string()),
});

const CompaniesListResponse = z.object({
	data: z.array(CompanyType),
});

const CompanyInfoResponse = z.object({
	data: CompanyType.extend({
		remarks: z.string(),
		custom_fields: z.array(
			z.object({
				id: z.string().uuid(),
				value: z.any(),
			})
		),
		marketing_mails_consent: z.boolean(),
	}),
});

const CompanyAdd = z.object({
	name: z.string(),
	business_type_id: z.string().uuid().optional(),
	vat_number: z.string().optional(),
	national_identification_number: z.string().optional(),
	emails: z
		.array(
			z.object({
				type: z.enum(["primary", "invoicing"]),
				email: z.string().email(),
			})
		)
		.optional(),
	telephones: z
		.array(
			z.object({
				type: z.enum(["phone", "fax"]),
				number: z.string(),
			})
		)
		.optional(),
	website: z.string().url().optional(),
	addresses: z
		.array(
			z.object({
				type: z.enum(["primary", "invoicing", "delivery", "visiting"]),
				address: z.object({
					addressee: z.string().optional(),
					line_1: z.string(),
					postal_code: z.string(),
					city: z.string(),
					country: z.string(),
					area_level_two_id: z.string().uuid().optional(),
				}),
			})
		)
		.optional(),
	iban: z.string().optional(),
	bic: z.string().optional(),
	language: z.string().optional(),
	responsible_user_id: z.string().uuid().optional(),
	remarks: z.string().optional(),
	tags: z.array(z.string()).optional(),
	custom_fields: z
		.array(
			z.object({
				id: z.string().uuid(),
				value: z.any(),
			})
		)
		.optional(),
	marketing_mails_consent: z.boolean().optional(),
});

const CompaniesUpdate = CompanyAdd.extend({
	id: z.string().uuid(),
	name: z.string().optional(),
});

const CompaniesTag = z.object({
	id: z.string().uuid(),
	tags: z.array(z.string()),
});

export type CompaniesListParams = z.infer<typeof CompaniesListParams>;
export type CompaniesListResponse = z.infer<typeof CompaniesListResponse>;
export type CompanyInfoResponse = z.infer<typeof CompanyInfoResponse>;
export type CompanyAdd = z.infer<typeof CompanyAdd>;
export type CompaniesUpdate = z.infer<typeof CompaniesUpdate>;
export type CompaniesTag = z.infer<typeof CompaniesTag>;
export type CompaniesUntag = z.infer<typeof CompaniesTag>;

// RESPONSES

const companiesAddResponse = z.object({
	data: z.object({
		id: z.string(),
		type: z.string(),
	}),
});
export type CompaniesAddResponse = z.infer<typeof companiesAddResponse>;
