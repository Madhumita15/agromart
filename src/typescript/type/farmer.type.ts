export type farmerType = {
    name: string;
    email?: string | undefined | null;
    password: string;
    phoneNumber: string;
    farmLocation: string;
    NID: string
    paymentMethod: string
    image?: File | null 
}