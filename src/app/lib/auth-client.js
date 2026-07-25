import { createAuthClient } from "better-auth/react";
export const authClient = createAuthClient({
  baseURL: "https://book-hopper-k.vercel.app/",
});
