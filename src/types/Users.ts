import { z } from "zod";

const usersListParams = z.object({
	filter: z
		.object({
			ids: z.array(z.string()).optional(),
			term: z.string().optional(),
			status: z.array(z.enum(["active", "deactivated"])).optional(),
		})
		.optional(),
	sort: z
		.array(
			z.object({
				field: z.enum(["name"]),
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

const usersList = z.object({
	data: z.array(
		z.object({
			id: z.string(),
			account: z.object({
				type: z.string(),
				id: z.string().uuid(),
			}),
			first_name: z.string(),
			last_name: z.string(),
			email: z.string(),
			telephones: z.array(
				z.object({
					type: z.enum(["phone", "mobile", "fax"]),
					number: z.string(),
				})
			),
			language: z.enum([
				"nl-BE",
				"da",
				"de",
				"en",
				"es",
				"fi",
				"fr",
				"it",
				"nb",
				"nl",
				"pl",
				"pt",
				"sv",
				"tr",
			]),
			function: z.string().nullable(),
			status: z.enum(["active", "deactivated"]),
			avatar_url: z.string().url(),
		})
	),
	included: z.object({}).optional(),
});

const usersMe = z.object({
	data: z.object({
		id: z.string(),
		account: z.object({
			type: z.string(),
			id: z.string().uuid(),
		}),
		first_name: z.string(),
		last_name: z.string(),
		email: z.string(),
		telephones: z.array(
			z.object({
				type: z.enum(["phone", "mobile", "fax"]),
				number: z.string(),
			})
		),
		language: z.enum([
			"nl-BE",
			"da",
			"de",
			"en",
			"es",
			"fi",
			"fr",
			"it",
			"nb",
			"nl",
			"pl",
			"pt",
			"sv",
			"tr",
		]),
		function: z.string().nullable(),
		time_zone: z.string(),
		preferences: z.object({
			invoiceable: z.boolean(),
			historic_time_tracking_limit: z
				.object({
					unit: z.enum(["hour"]),
					value: z.number(),
				})
				.nullable(),
			whitelabeling: z.boolean(),
		}),
		avatar_url: z.string().url(),
	}),
	included: z.object({}).optional(),
});

const usersInfo = z.object({
	data: z.object({
		id: z.string(),
		account: z.object({
			type: z.string(),
			id: z.string().uuid(),
		}),
		first_name: z.string(),
		last_name: z.string(),
		email: z.string(),
		telephones: z.array(
			z.object({
				type: z.enum(["phone", "mobile", "fax"]),
				number: z.string(),
			})
		),
		language: z.enum([
			"nl-BE",
			"da",
			"de",
			"en",
			"es",
			"fi",
			"fr",
			"it",
			"nb",
			"nl",
			"pl",
			"pt",
			"sv",
			"tr",
		]),
		function: z.string().nullable(),
		time_zone: z.string(),
		status: z.enum(["active", "deactivated"]),
		avatar_url: z.string().url(),
		preferences: z.object({
			invoiceable: z.boolean(),
		}),
	}),
	included: z.object({}).optional(),
});

export type UsersMe = z.infer<typeof usersMe>;
export type UsersListParams = z.infer<typeof usersListParams>;
export type UsersList = z.infer<typeof usersList>;
export type UsersInfo = z.infer<typeof usersInfo>;
