import type { InputInterface } from "../../../typescript/interface/auth.interface";

export const login: InputInterface[] = [
    {
        label: "ইমেইল ঠিকানা",
        type: "text",
        required: true,
        name: "email"
    },
    {
        label: "পাসওয়ার্ড",
        type: "password",
        required: true,
        name: "password"
    },
];