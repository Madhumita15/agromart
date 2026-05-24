import type { InputInterface } from "../../../typescript/interface/auth.interface";

export const login: InputInterface[] = [
   {
        label: "loginPage.emailLabel",
        type: "text",
        required: true,
        name: "email"
    },
    {
        label: "loginPage.passwordLabel",
        type: "password",
        required: true,
        name: "password"
    },
];