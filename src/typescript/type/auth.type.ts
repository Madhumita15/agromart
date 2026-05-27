export type SignupType = { 
    name: string
    email: string
    password: string
    
    
}

export type LoginType = {
    email: string,
    password: string
}


export type ContactType = {
  name: string;
  email: string
  subject: string;
  message: string
}

export type RegisterFormValues = {
   name: string,
   email: string,
   password: string,
   image?: File | null
 }

 export type ErrorResponse = {
  success: false;
  message: string;
};

 
export type RegisterResponse = {
  success: boolean;
  message: string;
  data: {
    userId: string;
    role: string;
    name: string;
    email: string;
    image: string | null;
  };
};

export type LoginResponse = {
  success: boolean;
  message: string;
  user: {
    userId: string;
    role: string;
    name: string;
    email: string;
  };
};

 