import { useForm } from "react-hook-form";
import { SignupSchema } from "../../services/validation/signup.validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { signup } from "../../services/json/inputsData/signup.input";
import DynamicInput from "../../components/DynamicInput";
import { Button, CircularProgress } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { useState } from "react";
import type { RegisterFormValues } from "../../typescript/type/auth.type";
import { useAppDispatch, useAppSeletor } from "../../services/helper/redux";
import { registerUser } from "../../store/slices/authSlice";
import { toast } from "sonner";

const Register = () => {
  const [preview, setPreview] = useState("");
  const { loading, registerError } = useAppSeletor((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
    setValue,
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(SignupSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      image: null,
    },
  });

  const onSubmit = async (data: RegisterFormValues) => {
    try {
      const response = await dispatch(registerUser(data)).unwrap();
      console.log(response);
      if (response.success === true) {
        toast.success(response.message);
        navigate("/login");
        reset();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {/* ফুল স্ক্রিন লেআউট: বামে ইমেজ এবং ডানে ফর্ম */}
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
        {/* বাম দিক: সুন্দর কৃষিভিত্তিক ছবি */}
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="খামারের তাজা শাকসবজি"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">সরাসরি কৃষকের খামার থেকে</h2>
            <p className="text-lg max-w-md">
              অ্যাগ্রোমার্ট প্ল্যাটফর্মে যুক্ত হয়ে মধ্যস্বত্বভোগী ছাড়াই কিনুন একদম তাজা ও রাসায়নিক মুক্ত খাঁটি পণ্য।
            </p>
          </div>
        </div>

        {/* ডান দিক: রেজিস্ট্রেশন ফর্ম */}
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 sm:p-12 bg-gradient-to-br from-amber-50 to-white overflow-y-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-3 w-full max-w-md p-8 bg-yellow-100/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-200"
          >
            <h1 className="font-bold text-2xl pb-2 text-gray-800 text-center">
              নতুন অ্যাকাউন্ট তৈরি করুন
            </h1>
            <p className="text-sm text-gray-600 text-center mb-4">
              কৃষক ও ক্রেতাদের সরাসরি যোগাযোগের ডিজিটাল বাজার
            </p>

            {signup.map((input) => (
              <DynamicInput<RegisterFormValues>
                key={String(input.name)}
                label={input.label}
                required={input.required}
                register={register}
                type={input.type}
                name={input.name as keyof RegisterFormValues}
                errors={errors}
                loading={loading}
                isEdit={null}
              />
            ))}

            {/* প্রোফাইল ছবি আপলোড সেকশন */}
            <div className="flex flex-col mt-3 gap-2 items-center w-full">
              <label className="text-sm font-semibold text-gray-700 self-start">
                প্রোফাইল ছবি যুক্ত করুন:
              </label>
              <div className="flex items-center justify-center mb-2">
                {preview ? (
                  <img
                    src={preview}
                    alt="প্রিভিউ"
                    width={90}
                    height={90}
                    className="rounded-full object-cover border-2 border-green-600 shadow-md"
                  />
                ) : (
                  <div className="w-[90px] h-[90px] rounded-full border-2 border-dashed border-gray-400 flex justify-center items-center text-sm text-gray-500 bg-white">
                    ছবি নেই
                  </div>
                )}
              </div>

              <input
                className="w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-green-50 file:text-green-700 hover:file:bg-green-100 border border-gray-300 rounded-lg p-1 bg-white cursor-pointer"
                name="image"
                type="file"
                onChange={(e) => {
                  const file = e.target.files?.[0] || null;
                  setValue("image", file, { shouldValidate: true });
                  if (file) {
                    setPreview(URL.createObjectURL(file));
                  }
                }}
              />
            </div>

            {registerError && (
              <p className="text-red-500 text-sm font-medium mt-1">{registerError}</p>
            )}

            <Button
              variant="contained"
              type="submit"
              disabled={loading}
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
              {loading ? <CircularProgress size={24} color="inherit" /> : "নিবন্ধন করুন"}
            </Button>

            <p className="text-sm text-gray-700 mt-4">
              ইতিমধ্যে অ্যাকাউন্ট আছে?{" "}
              <NavLink 
                to={"/login"} 
                className="text-green-600 font-bold hover:underline transition-all"
              >
                লগইন করুন
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;