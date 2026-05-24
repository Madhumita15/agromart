import type { InputInterface } from "../../../typescript/interface/auth.interface";

export const FarmerInput: InputInterface[] = [
    {
        label: "farmerPage.inputs.name",
        type: "text",
        required: true,
        name: "name"
    },
    {
        label: "farmerPage.inputs.email",
        type: "text",
        required: false,
        name: "email"
    },
    {
        label: "farmerPage.inputs.password",
        type: "password",
        required: true,
        name: "password"
    },
    {
        label: "farmerPage.inputs.phoneNumber",
        type: "text",
        required: true,
        name: "phoneNumber"
    },
    {
        label: "farmerPage.inputs.farmLocation",
        type: "text",
        required: true,
        name: "farmLocation"
    },
    {
        label: "farmerPage.inputs.NID",
        type: "text",
        required: true,
        name: "NID"
    }
];