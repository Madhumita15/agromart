import type { InputInterface } from "../../../typescript/interface/auth.interface";

export const signup: InputInterface[] = [
    {
        label: "registerPage.inputs.name",
        type: "text",
        required: true,
        name: "name"
    },
    {
        label: "registerPage.inputs.email",
        type: "text",
        required: true,
        name: "email"
    },
    {
        label: "registerPage.inputs.password",
        type: "password",
        required: true,
        name: "password"
    },
];