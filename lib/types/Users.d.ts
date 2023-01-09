import { z } from "zod";
declare const usersListParams: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        term: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodArray<z.ZodEnum<["active", "deactivated"]>, "many">>;
    }, "strip", z.ZodTypeAny, {
        status?: ("active" | "deactivated")[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
    }, {
        status?: ("active" | "deactivated")[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
    }>>;
    sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<["name"]>;
        order: z.ZodEnum<["asc"]>;
    }, "strip", z.ZodTypeAny, {
        order: "asc";
        field: "name";
    }, {
        order: "asc";
        field: "name";
    }>, "many">>;
    page: z.ZodOptional<z.ZodObject<{
        size: z.ZodNumber;
        number: z.ZodNumber;
    }, "strip", z.ZodTypeAny, {
        number: number;
        size: number;
    }, {
        number: number;
        size: number;
    }>>;
}, "strip", z.ZodTypeAny, {
    filter?: {
        status?: ("active" | "deactivated")[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
    } | undefined;
    sort?: {
        order: "asc";
        field: "name";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}, {
    filter?: {
        status?: ("active" | "deactivated")[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
    } | undefined;
    sort?: {
        order: "asc";
        field: "name";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}>;
declare const usersList: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        account: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        first_name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
        telephones: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["phone", "mobile", "fax"]>;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }>, "many">;
        language: z.ZodEnum<["nl-BE", "da", "de", "en", "es", "fi", "fr", "it", "nb", "nl", "pl", "pt", "sv", "tr"]>;
        function: z.ZodNullable<z.ZodString>;
        status: z.ZodEnum<["active", "deactivated"]>;
        avatar_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
    }, {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
    }>, "many">;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
    }[];
}, {
    included?: {} | undefined;
    data: {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
    }[];
}>;
declare const usersMe: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        account: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        first_name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
        telephones: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["phone", "mobile", "fax"]>;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }>, "many">;
        language: z.ZodEnum<["nl-BE", "da", "de", "en", "es", "fi", "fr", "it", "nb", "nl", "pl", "pt", "sv", "tr"]>;
        function: z.ZodNullable<z.ZodString>;
        time_zone: z.ZodString;
        preferences: z.ZodObject<{
            invoiceable: z.ZodBoolean;
            historic_time_tracking_limit: z.ZodNullable<z.ZodObject<{
                unit: z.ZodEnum<["hour"]>;
                value: z.ZodNumber;
            }, "strip", z.ZodTypeAny, {
                value: number;
                unit: "hour";
            }, {
                value: number;
                unit: "hour";
            }>>;
            whitelabeling: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            invoiceable: boolean;
            historic_time_tracking_limit: {
                value: number;
                unit: "hour";
            } | null;
            whitelabeling: boolean;
        }, {
            invoiceable: boolean;
            historic_time_tracking_limit: {
                value: number;
                unit: "hour";
            } | null;
            whitelabeling: boolean;
        }>;
        avatar_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        function: string | null;
        id: string;
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
            historic_time_tracking_limit: {
                value: number;
                unit: "hour";
            } | null;
            whitelabeling: boolean;
        };
    }, {
        function: string | null;
        id: string;
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
            historic_time_tracking_limit: {
                value: number;
                unit: "hour";
            } | null;
            whitelabeling: boolean;
        };
    }>;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        function: string | null;
        id: string;
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
            historic_time_tracking_limit: {
                value: number;
                unit: "hour";
            } | null;
            whitelabeling: boolean;
        };
    };
}, {
    included?: {} | undefined;
    data: {
        function: string | null;
        id: string;
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
            historic_time_tracking_limit: {
                value: number;
                unit: "hour";
            } | null;
            whitelabeling: boolean;
        };
    };
}>;
declare const usersInfo: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        account: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        first_name: z.ZodString;
        last_name: z.ZodString;
        email: z.ZodString;
        telephones: z.ZodArray<z.ZodObject<{
            type: z.ZodEnum<["phone", "mobile", "fax"]>;
            number: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }, {
            number: string;
            type: "phone" | "mobile" | "fax";
        }>, "many">;
        language: z.ZodEnum<["nl-BE", "da", "de", "en", "es", "fi", "fr", "it", "nb", "nl", "pl", "pt", "sv", "tr"]>;
        function: z.ZodNullable<z.ZodString>;
        time_zone: z.ZodString;
        status: z.ZodEnum<["active", "deactivated"]>;
        avatar_url: z.ZodString;
        preferences: z.ZodObject<{
            invoiceable: z.ZodBoolean;
        }, "strip", z.ZodTypeAny, {
            invoiceable: boolean;
        }, {
            invoiceable: boolean;
        }>;
    }, "strip", z.ZodTypeAny, {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
        };
    }, {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
        };
    }>;
    included: z.ZodOptional<z.ZodObject<{}, "strip", z.ZodTypeAny, {}, {}>>;
}, "strip", z.ZodTypeAny, {
    included?: {} | undefined;
    data: {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
        };
    };
}, {
    included?: {} | undefined;
    data: {
        function: string | null;
        id: string;
        status: "active" | "deactivated";
        language: "tr" | "nl-BE" | "da" | "de" | "en" | "es" | "fi" | "fr" | "it" | "nb" | "nl" | "pl" | "pt" | "sv";
        email: string;
        first_name: string;
        last_name: string;
        telephones: {
            number: string;
            type: "phone" | "mobile" | "fax";
        }[];
        account: {
            type: string;
            id: string;
        };
        avatar_url: string;
        time_zone: string;
        preferences: {
            invoiceable: boolean;
        };
    };
}>;
export type UsersMe = z.infer<typeof usersMe>;
export type UsersListParams = z.infer<typeof usersListParams>;
export type UsersList = z.infer<typeof usersList>;
export type UsersInfo = z.infer<typeof usersInfo>;
export {};
