import { useForm } from "react-hook-form";
import { signupSchema } from "../../services/validation/signup.validation";
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
import { useTranslation } from "react-i18next"; // <-- Added translation engine

const Register = () => {
  const [preview, setPreview] = useState("");
  const { loading, registerError } = useAppSeletor((state) => state.auth);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation(); 

  const {
    formState: { errors },
    reset,
    handleSubmit,
    register,
    setValue,
  } = useForm<RegisterFormValues>({
    resolver: yupResolver(signupSchema(t)),
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
    
      <div className="flex h-screen w-full items-center justify-center bg-gray-50">
       
        <div className="hidden lg:block lg:w-1/2 h-full relative">
          <img
            src="https://images.unsplash.com/photo-1498408040764-ab6eb772a145?q=80&w=1172&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="খামারের তাজা শাকসবজি"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex flex-col justify-end p-12 text-white">
            <h2 className="text-4xl font-bold mb-4">{t("registerPage.sidebarTitle")}</h2>
            <p className="text-lg max-w-md">
              {t("registerPage.sidebarDesc")}
            </p>
          </div>
        </div>

      
        <div className="w-full lg:w-1/2 h-full flex items-center justify-center p-6 sm:p-12 bg-gradient-to-br from-amber-50 to-white overflow-y-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col items-center gap-3 w-full max-w-md p-8 bg-yellow-100/80 backdrop-blur-sm rounded-2xl shadow-xl border border-yellow-200"
          >
            <h1 className="font-bold text-2xl pb-2 text-gray-800 text-center">
              {t("registerPage.formTitle")}
            </h1>
            <p className="text-sm text-gray-600 text-center mb-4">
              {t("registerPage.formSubtitle")}
            </p>

            {signup.map((input) => (
              <DynamicInput<RegisterFormValues>
                key={String(input.name)}
                label={t(input.label)} 
                required={input.required}
                register={register}
                type={input.type}
                name={input.name as keyof RegisterFormValues}
                errors={errors}
                loading={loading}
                isEdit={null}
              />
            ))}

          
            <div className="flex flex-col mt-3 gap-2 items-center w-full">
              <label className="text-sm font-semibold text-gray-700 self-start">
                {t("registerPage.imageLabel")}
              </label>
              <div className="flex items-center justify-center mb-2">
                {preview ? (
                  <img
                    src={preview}
                    alt={t("registerPage.formTitle")}
                    width={90}
                    height={90}
                    className="rounded-full object-cover border-2 border-green-600 shadow-md"
                  />
                ) : (
                  <div className="w-[90px] h-[90px] rounded-full border-2 border-dashed border-gray-400 flex justify-center items-center text-sm text-gray-500 bg-white">
                    {t("registerPage.noImage")}
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
              {loading ? <CircularProgress size={24} color="inherit" /> : t("registerPage.submitBtn")}
            </Button>

            <p className="text-sm text-gray-700 mt-4">
              {t("registerPage.alreadyHaveAccount")}{" "}
              <NavLink 
                to={"/login"} 
                className="text-green-600 font-bold hover:underline transition-all"
              >
                {t("registerPage.loginLink")}
              </NavLink>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Register;