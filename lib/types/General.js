import { z } from "zod";
const id = z.string().uuid();
const Tokens = z.object({
    access_token: z.string(),
    refresh_token: z.string(),
});
//# sourceMappingURL=General.js.map