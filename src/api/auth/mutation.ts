import { useMutation } from "@tanstack/react-query";
import { LoginRequest } from "@/api/auth/service";
import type { LoginPayload } from "@/api/auth/schema";

export const useLoginMutation = () => {
    return useMutation({
        mutationFn: (payload: LoginPayload) => LoginRequest(payload),
    });
};
