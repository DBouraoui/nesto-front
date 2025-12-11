import {AUTH_PATHS} from "@/api/auth/path.ts";
import type {LoginPayload} from "@/api/auth/schema.ts";
import {api} from "@/lib/axios.ts";

export const LoginRequest = async (payload : LoginPayload) => {
    return api.post(AUTH_PATHS.LOGIN, payload);
}