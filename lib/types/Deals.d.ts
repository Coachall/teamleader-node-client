import { z } from "zod";
declare const DealsListParams: z.ZodObject<{
    filter: z.ZodOptional<z.ZodObject<{
        ids: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
        term: z.ZodOptional<z.ZodString>;
        customer: z.ZodOptional<z.ZodObject<{
            type: z.ZodEnum<["company", "contact"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "company" | "contact";
            id: string;
        }, {
            type: "company" | "contact";
            id: string;
        }>>;
        phase_id: z.ZodOptional<z.ZodString>;
        estimated_closing_date: z.ZodOptional<z.ZodString>;
        estimated_closing_date_from: z.ZodOptional<z.ZodString>;
        estimated_closing_date_until: z.ZodOptional<z.ZodString>;
        responsible_user_id: z.ZodOptional<z.ZodString>;
        updated_since: z.ZodOptional<z.ZodString>;
        created_before: z.ZodOptional<z.ZodString>;
        status: z.ZodOptional<z.ZodArray<z.ZodString, "many">>;
    }, "strip", z.ZodTypeAny, {
        status?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
        responsible_user_id?: string | undefined;
        customer?: {
            type: "company" | "contact";
            id: string;
        } | undefined;
        phase_id?: string | undefined;
        estimated_closing_date?: string | undefined;
        estimated_closing_date_from?: string | undefined;
        estimated_closing_date_until?: string | undefined;
        created_before?: string | undefined;
    }, {
        status?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
        responsible_user_id?: string | undefined;
        customer?: {
            type: "company" | "contact";
            id: string;
        } | undefined;
        phase_id?: string | undefined;
        estimated_closing_date?: string | undefined;
        estimated_closing_date_from?: string | undefined;
        estimated_closing_date_until?: string | undefined;
        created_before?: string | undefined;
    }>>;
    sort: z.ZodOptional<z.ZodArray<z.ZodObject<{
        field: z.ZodEnum<["created_at", "weighted_value"]>;
        order: z.ZodEnum<["asc", "desc"]>;
    }, "strip", z.ZodTypeAny, {
        order: "desc" | "asc";
        field: "created_at" | "weighted_value";
    }, {
        order: "desc" | "asc";
        field: "created_at" | "weighted_value";
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
        status?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
        responsible_user_id?: string | undefined;
        customer?: {
            type: "company" | "contact";
            id: string;
        } | undefined;
        phase_id?: string | undefined;
        estimated_closing_date?: string | undefined;
        estimated_closing_date_from?: string | undefined;
        estimated_closing_date_until?: string | undefined;
        created_before?: string | undefined;
    } | undefined;
    sort?: {
        order: "desc" | "asc";
        field: "created_at" | "weighted_value";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}, {
    filter?: {
        status?: string[] | undefined;
        ids?: string[] | undefined;
        term?: string | undefined;
        updated_since?: string | undefined;
        responsible_user_id?: string | undefined;
        customer?: {
            type: "company" | "contact";
            id: string;
        } | undefined;
        phase_id?: string | undefined;
        estimated_closing_date?: string | undefined;
        estimated_closing_date_from?: string | undefined;
        estimated_closing_date_until?: string | undefined;
        created_before?: string | undefined;
    } | undefined;
    sort?: {
        order: "desc" | "asc";
        field: "created_at" | "weighted_value";
    }[] | undefined;
    page?: {
        number: number;
        size: number;
    } | undefined;
}>;
declare const DealsListResponse: z.ZodObject<{
    data: z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        title: z.ZodString;
        summary: z.ZodString;
        reference: z.ZodString;
        status: z.ZodEnum<["open", "won", "lost"]>;
        lead: z.ZodObject<{
            customer: z.ZodObject<{
                type: z.ZodEnum<["contact", "company"]>;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: "company" | "contact";
                id: string;
            }, {
                type: "company" | "contact";
                id: string;
            }>;
            contact_person: z.ZodOptional<z.ZodObject<{
                type: z.ZodString;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id: string;
            }, {
                type: string;
                id: string;
            }>>;
        }, "strip", z.ZodTypeAny, {
            contact_person?: {
                type: string;
                id: string;
            } | undefined;
            customer: {
                type: "company" | "contact";
                id: string;
            };
        }, {
            contact_person?: {
                type: string;
                id: string;
            } | undefined;
            customer: {
                type: "company" | "contact";
                id: string;
            };
        }>;
        department: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        estimated_value: z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
        }, "strip", z.ZodTypeAny, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }>;
        estimated_closing_date: z.ZodString;
        estimated_probability: z.ZodNumber;
        weighted_value: z.ZodObject<{
            amount: z.ZodNumber;
            currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
        }, "strip", z.ZodTypeAny, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }, {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        }>;
        purchase_order_number: z.ZodString;
        current_phase: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        responsible_user: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        closed_at: z.ZodString;
        source: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        lost_reason: z.ZodObject<{
            reason: z.ZodObject<{
                type: z.ZodString;
                id: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                type: string;
                id: string;
            }, {
                type: string;
                id: string;
            }>;
            remark: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            reason: {
                type: string;
                id: string;
            };
            remark: string;
        }, {
            reason: {
                type: string;
                id: string;
            };
            remark: string;
        }>;
        created_at: z.ZodString;
        updated_at: z.ZodString;
        web_url: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        id: string;
        source: {
            type: string;
            id: string;
        };
        summary: string;
        title: string;
        status: "open" | "won" | "lost";
        updated_at: string;
        web_url: string;
        responsible_user: {
            type: string;
            id: string;
        };
        estimated_closing_date: string;
        created_at: string;
        weighted_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        reference: string;
        lead: {
            contact_person?: {
                type: string;
                id: string;
            } | undefined;
            customer: {
                type: "company" | "contact";
                id: string;
            };
        };
        department: {
            type: string;
            id: string;
        };
        estimated_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        estimated_probability: number;
        purchase_order_number: string;
        current_phase: {
            type: string;
            id: string;
        };
        closed_at: string;
        lost_reason: {
            reason: {
                type: string;
                id: string;
            };
            remark: string;
        };
    }, {
        id: string;
        source: {
            type: string;
            id: string;
        };
        summary: string;
        title: string;
        status: "open" | "won" | "lost";
        updated_at: string;
        web_url: string;
        responsible_user: {
            type: string;
            id: string;
        };
        estimated_closing_date: string;
        created_at: string;
        weighted_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        reference: string;
        lead: {
            contact_person?: {
                type: string;
                id: string;
            } | undefined;
            customer: {
                type: "company" | "contact";
                id: string;
            };
        };
        department: {
            type: string;
            id: string;
        };
        estimated_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        estimated_probability: number;
        purchase_order_number: string;
        current_phase: {
            type: string;
            id: string;
        };
        closed_at: string;
        lost_reason: {
            reason: {
                type: string;
                id: string;
            };
            remark: string;
        };
    }>, "many">;
}, "strip", z.ZodTypeAny, {
    data: {
        id: string;
        source: {
            type: string;
            id: string;
        };
        summary: string;
        title: string;
        status: "open" | "won" | "lost";
        updated_at: string;
        web_url: string;
        responsible_user: {
            type: string;
            id: string;
        };
        estimated_closing_date: string;
        created_at: string;
        weighted_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        reference: string;
        lead: {
            contact_person?: {
                type: string;
                id: string;
            } | undefined;
            customer: {
                type: "company" | "contact";
                id: string;
            };
        };
        department: {
            type: string;
            id: string;
        };
        estimated_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        estimated_probability: number;
        purchase_order_number: string;
        current_phase: {
            type: string;
            id: string;
        };
        closed_at: string;
        lost_reason: {
            reason: {
                type: string;
                id: string;
            };
            remark: string;
        };
    }[];
}, {
    data: {
        id: string;
        source: {
            type: string;
            id: string;
        };
        summary: string;
        title: string;
        status: "open" | "won" | "lost";
        updated_at: string;
        web_url: string;
        responsible_user: {
            type: string;
            id: string;
        };
        estimated_closing_date: string;
        created_at: string;
        weighted_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        reference: string;
        lead: {
            contact_person?: {
                type: string;
                id: string;
            } | undefined;
            customer: {
                type: "company" | "contact";
                id: string;
            };
        };
        department: {
            type: string;
            id: string;
        };
        estimated_value: {
            currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
            amount: number;
        };
        estimated_probability: number;
        purchase_order_number: string;
        current_phase: {
            type: string;
            id: string;
        };
        closed_at: string;
        lost_reason: {
            reason: {
                type: string;
                id: string;
            };
            remark: string;
        };
    }[];
}>;
declare const DealsInfoResponse: z.ZodObject<z.extendShape<{
    id: z.ZodString;
    title: z.ZodString;
    summary: z.ZodString;
    reference: z.ZodString;
    status: z.ZodEnum<["open", "won", "lost"]>;
    lead: z.ZodObject<{
        customer: z.ZodObject<{
            type: z.ZodEnum<["contact", "company"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "company" | "contact";
            id: string;
        }, {
            type: "company" | "contact";
            id: string;
        }>;
        contact_person: z.ZodOptional<z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>>;
    }, "strip", z.ZodTypeAny, {
        contact_person?: {
            type: string;
            id: string;
        } | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    }, {
        contact_person?: {
            type: string;
            id: string;
        } | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    }>;
    department: z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>;
    estimated_value: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }>;
    estimated_closing_date: z.ZodString;
    estimated_probability: z.ZodNumber;
    weighted_value: z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }>;
    purchase_order_number: z.ZodString;
    current_phase: z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>;
    responsible_user: z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>;
    closed_at: z.ZodString;
    source: z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>;
    lost_reason: z.ZodObject<{
        reason: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        remark: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        reason: {
            type: string;
            id: string;
        };
        remark: string;
    }, {
        reason: {
            type: string;
            id: string;
        };
        remark: string;
    }>;
    created_at: z.ZodString;
    updated_at: z.ZodString;
    web_url: z.ZodString;
}, {
    phase_history: z.ZodObject<{
        phase: z.ZodObject<{
            type: z.ZodString;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: string;
            id: string;
        }, {
            type: string;
            id: string;
        }>;
        started_at: z.ZodString;
        started_by: z.ZodObject<{
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
        phase: {
            type: string;
            id: string;
        };
        started_at: string;
        started_by: {
            type: string;
            id: string;
        };
    }, {
        phase: {
            type: string;
            id: string;
        };
        started_at: string;
        started_by: {
            type: string;
            id: string;
        };
    }>;
    quotations: z.ZodArray<z.ZodObject<{
        type: z.ZodString;
        id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        type: string;
        id: string;
    }, {
        type: string;
        id: string;
    }>, "many">;
    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        value: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        value?: any;
        id: string;
    }, {
        value?: any;
        id: string;
    }>, "many">>;
}>, "strip", z.ZodTypeAny, {
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    id: string;
    source: {
        type: string;
        id: string;
    };
    summary: string;
    title: string;
    status: "open" | "won" | "lost";
    updated_at: string;
    web_url: string;
    responsible_user: {
        type: string;
        id: string;
    };
    estimated_closing_date: string;
    created_at: string;
    weighted_value: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    };
    reference: string;
    lead: {
        contact_person?: {
            type: string;
            id: string;
        } | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    };
    department: {
        type: string;
        id: string;
    };
    estimated_value: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    };
    estimated_probability: number;
    purchase_order_number: string;
    current_phase: {
        type: string;
        id: string;
    };
    closed_at: string;
    lost_reason: {
        reason: {
            type: string;
            id: string;
        };
        remark: string;
    };
    phase_history: {
        phase: {
            type: string;
            id: string;
        };
        started_at: string;
        started_by: {
            type: string;
            id: string;
        };
    };
    quotations: {
        type: string;
        id: string;
    }[];
}, {
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    id: string;
    source: {
        type: string;
        id: string;
    };
    summary: string;
    title: string;
    status: "open" | "won" | "lost";
    updated_at: string;
    web_url: string;
    responsible_user: {
        type: string;
        id: string;
    };
    estimated_closing_date: string;
    created_at: string;
    weighted_value: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    };
    reference: string;
    lead: {
        contact_person?: {
            type: string;
            id: string;
        } | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    };
    department: {
        type: string;
        id: string;
    };
    estimated_value: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    };
    estimated_probability: number;
    purchase_order_number: string;
    current_phase: {
        type: string;
        id: string;
    };
    closed_at: string;
    lost_reason: {
        reason: {
            type: string;
            id: string;
        };
        remark: string;
    };
    phase_history: {
        phase: {
            type: string;
            id: string;
        };
        started_at: string;
        started_by: {
            type: string;
            id: string;
        };
    };
    quotations: {
        type: string;
        id: string;
    }[];
}>;
declare const DealsCreate: z.ZodObject<{
    lead: z.ZodObject<{
        customer: z.ZodObject<{
            type: z.ZodEnum<["contact", "company"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "company" | "contact";
            id: string;
        }, {
            type: "company" | "contact";
            id: string;
        }>;
        contact_person_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        contact_person_id?: string | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    }, {
        contact_person_id?: string | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    }>;
    title: z.ZodString;
    summary: z.ZodOptional<z.ZodString>;
    source_id: z.ZodOptional<z.ZodString>;
    department_id: z.ZodOptional<z.ZodString>;
    responsible_user_id: z.ZodOptional<z.ZodString>;
    phase_id: z.ZodOptional<z.ZodString>;
    estimated_value: z.ZodOptional<z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }>>;
    estimated_closing_date: z.ZodOptional<z.ZodString>;
    estimated_probability: z.ZodOptional<z.ZodNumber>;
    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        value: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        value?: any;
        id: string;
    }, {
        value?: any;
        id: string;
    }>, "many">>;
}, "strip", z.ZodTypeAny, {
    summary?: string | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    responsible_user_id?: string | undefined;
    phase_id?: string | undefined;
    estimated_closing_date?: string | undefined;
    estimated_value?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    estimated_probability?: number | undefined;
    source_id?: string | undefined;
    department_id?: string | undefined;
    title: string;
    lead: {
        contact_person_id?: string | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    };
}, {
    summary?: string | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    responsible_user_id?: string | undefined;
    phase_id?: string | undefined;
    estimated_closing_date?: string | undefined;
    estimated_value?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    estimated_probability?: number | undefined;
    source_id?: string | undefined;
    department_id?: string | undefined;
    title: string;
    lead: {
        contact_person_id?: string | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    };
}>;
declare const DealsUpdate: z.ZodObject<z.extendShape<{
    lead: z.ZodObject<{
        customer: z.ZodObject<{
            type: z.ZodEnum<["contact", "company"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "company" | "contact";
            id: string;
        }, {
            type: "company" | "contact";
            id: string;
        }>;
        contact_person_id: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        contact_person_id?: string | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    }, {
        contact_person_id?: string | undefined;
        customer: {
            type: "company" | "contact";
            id: string;
        };
    }>;
    title: z.ZodString;
    summary: z.ZodOptional<z.ZodString>;
    source_id: z.ZodOptional<z.ZodString>;
    department_id: z.ZodOptional<z.ZodString>;
    responsible_user_id: z.ZodOptional<z.ZodString>;
    phase_id: z.ZodOptional<z.ZodString>;
    estimated_value: z.ZodOptional<z.ZodObject<{
        amount: z.ZodNumber;
        currency: z.ZodEnum<["BAM", "CAD", "CHF", "CLP", "CNY", "COP", "CZK", "DKK", "EUR", "GBP", "INR", "ISK", "JPY", "MAD", "MXN", "NOK", "PEN", "PLN", "RON", "SEK", "TRY", "USD", "ZAR"]>;
    }, "strip", z.ZodTypeAny, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }, {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    }>>;
    estimated_closing_date: z.ZodOptional<z.ZodString>;
    estimated_probability: z.ZodOptional<z.ZodNumber>;
    custom_fields: z.ZodOptional<z.ZodArray<z.ZodObject<{
        id: z.ZodString;
        value: z.ZodAny;
    }, "strip", z.ZodTypeAny, {
        value?: any;
        id: string;
    }, {
        value?: any;
        id: string;
    }>, "many">>;
}, {
    id: z.ZodString;
    lead: z.ZodOptional<z.ZodObject<{
        customer: z.ZodObject<{
            type: z.ZodEnum<["contact", "company"]>;
            id: z.ZodString;
        }, "strip", z.ZodTypeAny, {
            type: "company" | "contact";
            id: string;
        }, {
            type: "company" | "contact";
            id: string;
        }>;
        contact_person_id: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        customer: {
            type: "company" | "contact";
            id: string;
        };
        contact_person_id: string;
    }, {
        customer: {
            type: "company" | "contact";
            id: string;
        };
        contact_person_id: string;
    }>>;
    title: z.ZodOptional<z.ZodString>;
}>, "strip", z.ZodTypeAny, {
    summary?: string | undefined;
    title?: string | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    responsible_user_id?: string | undefined;
    phase_id?: string | undefined;
    estimated_closing_date?: string | undefined;
    lead?: {
        customer: {
            type: "company" | "contact";
            id: string;
        };
        contact_person_id: string;
    } | undefined;
    estimated_value?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    estimated_probability?: number | undefined;
    source_id?: string | undefined;
    department_id?: string | undefined;
    id: string;
}, {
    summary?: string | undefined;
    title?: string | undefined;
    custom_fields?: {
        value?: any;
        id: string;
    }[] | undefined;
    responsible_user_id?: string | undefined;
    phase_id?: string | undefined;
    estimated_closing_date?: string | undefined;
    lead?: {
        customer: {
            type: "company" | "contact";
            id: string;
        };
        contact_person_id: string;
    } | undefined;
    estimated_value?: {
        currency: "BAM" | "CAD" | "CHF" | "CLP" | "CNY" | "COP" | "CZK" | "DKK" | "EUR" | "GBP" | "INR" | "ISK" | "JPY" | "MAD" | "MXN" | "NOK" | "PEN" | "PLN" | "RON" | "SEK" | "TRY" | "USD" | "ZAR";
        amount: number;
    } | undefined;
    estimated_probability?: number | undefined;
    source_id?: string | undefined;
    department_id?: string | undefined;
    id: string;
}>;
declare const DealsMove: z.ZodObject<{
    id: z.ZodString;
    phase_id: z.ZodString;
}, "strip", z.ZodTypeAny, {
    id: string;
    phase_id: string;
}, {
    id: string;
    phase_id: string;
}>;
declare const DealsLose: z.ZodObject<{
    id: z.ZodString;
    reason_id: z.ZodOptional<z.ZodString>;
    extra_info: z.ZodOptional<z.ZodString>;
}, "strip", z.ZodTypeAny, {
    reason_id?: string | undefined;
    extra_info?: string | undefined;
    id: string;
}, {
    reason_id?: string | undefined;
    extra_info?: string | undefined;
    id: string;
}>;
export type DealsListParams = z.infer<typeof DealsListParams>;
export type DealsListResponse = z.infer<typeof DealsListResponse>;
export type DealsInfoResponse = z.infer<typeof DealsInfoResponse>;
export type DealsCreate = z.infer<typeof DealsCreate>;
export type DealsUpdate = z.infer<typeof DealsUpdate>;
export type DealsMove = z.infer<typeof DealsMove>;
export type DealsLose = z.infer<typeof DealsLose>;
declare const DealsCreateResponse: z.ZodObject<{
    data: z.ZodObject<{
        id: z.ZodString;
        type: z.ZodString;
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
export type DealsCreateResponse = z.infer<typeof DealsCreateResponse>;
export {};
