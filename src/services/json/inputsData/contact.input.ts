import type { InputInterface } from "../../../typescript/interface/auth.interface";

export const contactUs: InputInterface[] = [
    {
        label: "Full Name",
        type: "text",
        required: true,
        name: "name"
    },
    {
        label: "Email",
        type: "text",
        required: true,
        name: "email"
    },
    {
        label: "Subject",
        type: "text",
        required: true,
        name: "subject"
    },
    {
        label: "Message",
        type: "textarea",
        required: true,
        name: "message"
    },
];