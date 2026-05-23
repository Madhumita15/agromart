import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { account, ID, storage, tablesDB } from "../../lib/appwrite.config";
import { Permission, Query, Role } from "appwrite";
import { toast } from "sonner";
import Cookies from "js-cookie";
import type { ErrorResponse, LoginResponse, RegisterResponse } from "../../typescript/type/auth.type";
import type { AuthState } from "../../typescript/interface/auth.interface";
const role = Cookies.get("role") ?? null;
const token = Cookies.get("token") ?? null;
const user = Cookies.get("user")
  ? JSON.parse(Cookies.get("user") as string)
  : null;



const initialState: AuthState = {
  loading: false,
  registerError: null,
  loginError: null,
  token: token,
  user: user,
  role: role,
};



export const registerUser = createAsyncThunk<
  RegisterResponse,
  { name: string; email: string; password: string; image?: File | null },
  { rejectValue: ErrorResponse }
>("auth/register", async (data, { rejectWithValue }) => {
  try {
    const response = await account.create({
      userId: ID.unique(),
      name: data.name,
      email: data.email,
      password: data.password,
    });

    let imageurl = null;
    if (data.image) {
      const file = await storage.createFile({
        bucketId: import.meta.env.VITE_APPWRITE_PROJECT_BUCKET_ID,
        fileId: ID.unique(),
        file: data.image,
        permissions: [Permission.read(Role.any())],
      });

      imageurl = storage.getFileView({
        bucketId: import.meta.env.VITE_APPWRITE_PROJECT_BUCKET_ID,
        fileId: file.$id,
      });
    }

    await tablesDB.createRow({
      databaseId: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
      tableId: "registration",
      rowId: ID.unique(),
      data: {
        userId: response.$id,
        name: data.name,
        email: data.email,
        password: data.password,
        image: imageurl,
        role: "user",
      },
    });
    console.log("response from registeruser", response);
    return {
      success: true,
      message: "User Registered Successfully!",
      data: {
        userId: response.$id,
        name: data.name,
        email: data.email,
        image: imageurl,
        role: "user",
      },
    };
  } catch {
    return rejectWithValue({
      success: false,
      message: "User Already exist!",
    });
  }
});

export const loginUser = createAsyncThunk<
  LoginResponse,
  { email: string; password: string },
  { rejectValue: ErrorResponse }
>("/auth/login", async (data, { rejectWithValue }) => {
  try {
    const existingUser = await tablesDB.listRows({
      databaseId: import.meta.env.VITE_APPWRITE_PROJECT_DATABASE_ID,
      tableId: "registration",
      queries: [Query.equal("email", [data.email])],
    });
    console.log("existing user", existingUser);

    if (existingUser.total === 0) {
      toast.success("user not found in db");
      return rejectWithValue({
        success: false,
        message: "User not found!",
      });
    }

    await account.createEmailPasswordSession({
      email: data.email,
      password: data.password,
    });

    const row = existingUser.rows[0];
    const user = {
      userId: row.userId,
      name: row.name,
      email: row.email,
      role: row.role,
    };

    return {
      success: true,
      message: "Login Successfull",
      user,
    };
  } catch {
    return rejectWithValue({
      success: false,
      message: "Invalid credentials",
    });
  }
});

export const logoutUser = createAsyncThunk<
  { success: boolean },
  void,
  { rejectValue: ErrorResponse }
>("auth/logout", async (_, { rejectWithValue }) => {
  try {
    console.log("logout inside logoutuser thunk");
    await account.deleteSession("current");
    return {
      success: true,
    };
  } catch {
    return rejectWithValue({
      success: false,
      message: "Failed to Logout",
    });
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.registerError = null;
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.loading = false;
        state.registerError = action?.payload?.message as string;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.loginError = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        console.log("login user details", action.payload);
        state.user = action.payload?.user;
        state.token = "true";
        state.role = action.payload?.user.role;
        Cookies.set("token", "true");
        Cookies.set("role", action.payload.user.role);
        Cookies.set("user", JSON.stringify(action.payload.user));
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        // console.log("error coming from login user", action?.payload);
        state.loginError = action?.payload?.message as string;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        // console.log("logout action response", action.payload);
        state.token = null;
        state.role = null;
        state.user = { userId: null, role: null, name: null, email: null };
        Cookies.remove("token");
        Cookies.remove("role");
        Cookies.remove("user");
      })
      .addCase(logoutUser.rejected, () => {
        toast.success("Logout Failed");
      });
  },
});


export default authSlice.reducer;
