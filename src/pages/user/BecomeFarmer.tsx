import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import type { farmerType } from "../../typescript/type/farmer.type";
import { getFarmSchema } from "../../services/validation/farmer.validation"; // Imported dynamic factory
import { Button } from "@mui/material";
import DynamicInput from "../../components/DynamicInput";
import { FarmerInput } from "../../services/json/inputsData/farmer.input";
import { useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next"; // Added Translation Hook engine

const BecomeFarmer = () => {
  const [preview, setPreview] = useState("");
  const { t, i18n } = useTranslation();
  const loading = false

  const memoizedSchema = useMemo(() => getFarmSchema(t), [t]);
  
  const {
    formState: { errors },
    reset,
    handleSubmit,
    trigger,
    register,
    setValue
  } = useForm<farmerType>({
    resolver: yupResolver(memoizedSchema), // Passing translation runtime environment
    defaultValues: {
      name: "",
      password: "",
      phoneNumber: "",
      farmLocation: "",
      NID: "",
      paymentMethod: "cash",
      image: null 
    },
  });

  const onSubmit = async (data: farmerType) => {
    console.log(data);
    reset();
    setPreview("");
  };


  useEffect(() => {
  // Only trigger if there are already active errors on screen
  if (Object.keys(errors).length > 0) {
    trigger();
  }
}, [i18n.language, trigger, errors]);
  return (
    <>
      {/* Full-Screen Balanced Responsive Layout */}
      <div className="flex min-h-screen w-full items-stretch justify-center bg-gray-50 overflow-hidden">
        
        {/* Left Column: Stunning Farming Graphic Experience */}
        <div className="hidden lg:block lg:w-1/2 relative">
          <img
            src="https://images.unsplash.com/photo-1505471768190-275e2ad7b3f9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="সমৃদ্ধ কৃষক ও কৃষিক্ষেত্র"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20 flex flex-col justify-end p-16 text-white">
            <span className="text-yellow-400 font-bold tracking-wider text-sm uppercase mb-2">
              {t("farmerPage.sidebarTag")}
            </span>
            <h2 className="text-4xl font-extrabold mb-4 leading-tight">
              {t("farmerPage.sidebarTitle")}
            </h2>
            <p className="text-lg text-gray-200 max-w-md leading-relaxed">
              {t("farmerPage.sidebarDesc")}
            </p>
          </div>
        </div>

        {/* Right Column: Beautiful Registration Form Space */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-6 md:p-12 bg-gradient-to-br from-amber-50 via-white to-emerald-50/20 overflow-y-auto">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-4 w-full max-w-md my-8 p-8 md:p-10 bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl border border-yellow-100/70"
          >
            <div className="text-center mb-2">
              <h1 className="font-black text-3xl text-gray-800 tracking-tight">
                {t("farmerPage.formTitle")}
              </h1>
              <p className="text-sm text-gray-500 mt-2 font-medium">
                {t("farmerPage.formSubtitle")}
              </p>
            </div>

            {/* Render Input Fields dynamically */}
            <div className="flex flex-col gap-3">
              {FarmerInput.map((input) => (
                <DynamicInput<farmerType>
                  key={String(input.name)}
                  label={t(input.label)} // Translating custom loop properties elegantly
                  required={input.required}
                  register={register}
                  type={input.type}
                  name={input.name as keyof farmerType}
                  errors={errors}
                  loading={loading}
                  isEdit={null}
                />
              ))}
            </div>

            {/* New Added Section: Payment Method Selector */}
            <div className="flex flex-col gap-2 w-full mt-1">
              <label className="text-sm font-bold text-gray-700">
                {t("farmerPage.paymentLabel")} <span className="text-red-500">*</span>
              </label>
              <div className="grid grid-cols-2 gap-3">
                <label className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-xl p-3 cursor-pointer transition-all hover:bg-amber-50/50 has-[:checked]:border-green-600 has-[:checked]:bg-green-50/40">
                  <input
                    type="radio"
                    value="cash"
                    defaultChecked
                    {...register("paymentMethod")}
                    className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="text-sm font-semibold text-gray-800">
                    {t("farmerPage.paymentCash")}
                  </span>
                </label>
                
                <label className="flex items-center justify-center gap-2 border-2 border-gray-200 rounded-xl p-3 cursor-pointer transition-all hover:bg-amber-50/50 has-[:checked]:border-green-600 has-[:checked]:bg-green-50/40">
                  <input
                    type="radio"
                    value="upi"
                    {...register("paymentMethod")}
                    className="w-4 h-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span className="text-sm font-semibold text-gray-800">
                    {t("farmerPage.paymentUpi")}
                  </span>
                </label>
              </div>
              {errors.paymentMethod && (
                <p className="text-red-500 text-xs font-medium mt-1">{errors.paymentMethod.message}</p>
              )}
            </div>

            {/* Profile Image Section */}
            <div className="flex flex-col mt-2 gap-2 items-center w-full bg-gray-50/80 p-4 rounded-2xl border border-gray-100">
              <label className="text-sm font-bold text-gray-700 self-start">
                {t("farmerPage.imageLabel")}
              </label>
              <div className="flex items-center justify-center">
                {preview ? (
                  <img
                    src={preview}
                    alt="প্রিভিউ"
                    className="w-24 h-24 rounded-full object-cover border-4 border-white shadow-xl ring-2 ring-green-500"
                  />
                ) : (
                  <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-300 flex justify-center items-center text-xs font-semibold text-gray-400 bg-white shadow-inner">
                    {t("farmerPage.noImage")}
                  </div>
                )}
              </div>

              <input
                className="w-full mt-2 text-xs text-gray-500 file:mr-3 file:py-2 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-green-600 file:text-white hover:file:bg-green-700 border border-gray-200 rounded-xl p-1 bg-white cursor-pointer shadow-sm"
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
              {errors.image && (
                <p className="text-red-500 text-xs font-medium mt-1">{errors.image.message}</p>
              )}
            </div>

            <Button
              variant="contained"
              type="submit"
              fullWidth
              sx={{
                mt: 2,
                py: 1.4,
                backgroundColor: "#16a34a",
                "&:hover": { backgroundColor: "#15803d" },
                borderRadius: "14px",
                fontWeight: "900",
                fontSize: "1.05rem",
                textTransform: "none",
                boxShadow: "0 10px 15px -3px rgba(22, 163, 74, 0.3)"
              }}
            >
              {t("farmerPage.submitBtn")}
            </Button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BecomeFarmer;