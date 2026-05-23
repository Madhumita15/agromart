import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../services/validation/login.validation";
import { useForm } from "react-hook-form";
import type { LoginType } from "../../typescript/type/auth.type";
import DynamicInput from "../../components/DynamicInput";
import { login } from "../../services/json/inputsData/login.input";
import { Button } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSeletor } from "../../services/helper/redux";
import { toast } from "sonner";
import { loginUser } from "../../store/slices/authSlice";

const Login = () => {
  const { loading, loginError } = useAppSeletor((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
  } = useForm<LoginType>({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (data: LoginType) => {
    try {
      const response = await dispatch(loginUser(data)).unwrap();
      console.log(response);
      if (response.success === true) {
        toast.success(response.message);
        if (response.user.role === "admin") {
          navigate("/admin/dashboard");
        } else if (response.user.role === "farmer") {
          navigate("/admin/farmerdashboard");
        } else {
          navigate("/");
        }
        reset();
      }
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div className="flex h-screen w-full items-center justify-center bg-gray-50">
      {/* বাম দিক: কৃষক ও ক্রেতার থিমভিত্তিক ছবি */}
      <div className="hidden lg:block lg:w-1/2 h-full relative">
        <img
          src="https://plus.unsplash.com/premium_photo-1663945778994-11b3201882a0?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="তাজা খামার বিপণন"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-12 text-white">
          <h2 className="text-4xl font-bold mb-4">স্বাগতম অ্যাগ্রোমার্ট বাজারে!</h2>
          <p className="text-lg max-w-md">
            আপনার অ্যাকাউন্টে লগইন করে সরাসরি মাঠের তাজা ফসল কেনাবেচা শুরু করুন।
          </p>
        </div>
      </div>

      {/* ডান দিক: লগইন ফর্ম */}
      <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 sm:p-12 bg-gradient-to-br from-amber-50 to-white overflow-y-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col items-center gap-3 w-full max-w-md p-8 bg-yellow-100/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-200"
        >
          <h1 className="font-bold text-2xl pb-2 text-gray-800 text-center">
            অ্যাকাউন্টে লগইন করুন
          </h1>
          <p className="text-sm text-gray-600 text-center mb-4">
            কৃষক ও ক্রেতাদের সরাসরি যুক্ত করার বিশ্বস্ত প্ল্যাটফর্ম
          </p>

          {login.map((input) => (
            <DynamicInput<LoginType>
              key={String(input.name)}
              label={input.label}
              required={input.required}
              register={register}
              type={input.type}
              name={input.name as keyof LoginType}
              errors={errors}
              loading={loading}
              isEdit={null}
            />
          ))}

          {loginError && <p className="text-red-500 text-sm font-medium mt-1">{loginError}</p>}

          <Button 
            variant="contained" 
            type="submit"
            fullWidth
            sx={{
              mt: 2,
              py: 1.2,
              backgroundColor: "#16a34a",
              "&:hover": { backgroundColor: "#15803d" },
              borderRadius: "10px",
              fontWeight: "bold",
              fontSize: "1rem"
            }}
          >
            প্রবেশ করুন
          </Button>

          <p className="text-sm text-gray-700 mt-4">
            অ্যাকাউন্ট নেই?{" "}
            <NavLink 
              to={"/register"} 
              className="text-green-600 font-bold hover:underline transition-all"
            >
              নিবন্ধন করুন
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;