import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { contactUs } from "../../services/json/inputsData/contact.input";
import DynamicInput from "../../components/DynamicInput";
import type { ContactType } from "../../typescript/type/auth.type";
import { contactSchema } from "../../services/validation/contact.validation";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Send, Clock, MapPin, HelpCircle } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

const Contact = () => {
  const { t, i18n } = useTranslation();
  const memoizedSchema = useMemo(() => contactSchema(t), [t]);
  const loading = false;
  
  // Local state helper for FAQ interactive dropdown panels
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const {
    formState: { errors },
    handleSubmit,
    register,
    trigger,
  } = useForm<ContactType>({
    resolver: yupResolver(memoizedSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactType) => {
    console.log("data", data);
  };

  useEffect(() => {
    if (Object.keys(errors).length > 0) {
      trigger();
    }
  }, [i18n.language, trigger, errors]);

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-amber-100 via-orange-100 to-yellow-50 py-16 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-5xl w-full space-y-12">
        
        {/* Main Split-Grid Panel Container */}
        <div className="w-full bg-white/80 backdrop-blur-md rounded-3xl shadow-xl overflow-hidden border border-white/40 flex flex-col md:flex-row transition-all duration-300 hover:shadow-2xl">
          
          {/* Left Side: Elegant Image Branding Panel */}
          <div className="w-full md:w-1/2 relative min-h-[300px] md:min-h-full overflow-hidden group">
            <img
              src="https://images.unsplash.com/photo-1724217741944-c814bcb7aff8?q=80&w=716&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Contact Context Visual"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-8 flex flex-col justify-end text-white">
              <h2 className="text-4xl font-extrabold tracking-tight mb-3">{t("contact.title")}</h2>
              <p className="text-sm text-gray-200 font-medium max-w-sm leading-relaxed">
                {t("contact.subtitle")}
              </p>
            </div>
          </div>

          {/* Right Side: Contact Form & Main Meta Info */}
          <div className="w-full md:w-1/2 p-6 sm:p-10 flex flex-col justify-between space-y-8 bg-white">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 w-[250px] md:w-[350px] ">
              {contactUs.map((input) => (
                <div key={String(input.name)} className="transition-all duration-200">
                  <DynamicInput<ContactType>
                    label={t(`contact.labels.${input.name}`)}
                    required={input.required}
                    register={register}
                    type={input.type}
                    name={input.name as keyof ContactType}
                    errors={errors}
                    isEdit={null}
                    loading={loading}
                  />
                </div>
              ))}

              <button 
                type="submit" 
                className="w-full mt-2 bg-gradient-to-r from-green-600 to-yellow-500 hover:from-green-700 hover:to-yellow-600 text-white font-bold py-3.5 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-green-600/20 hover:shadow-xl transition-all active:scale-[0.98] duration-150 cursor-pointer"
              >
                <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                {t("contact.submitBtn")}
              </button>
            </form>

            {/* Quick Informational Cards Panel */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-start gap-3 p-3 bg-amber-50/50 rounded-2xl border border-amber-100/40">
                <div className="p-2 bg-amber-500 text-white rounded-xl shadow-md">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h1 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("contact.phoneTitle")}</h1>
                  <p className="text-sm font-semibold text-gray-800 tracking-wide">+91 1234567890</p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-orange-50/50 rounded-2xl border border-orange-100/40">
                <div className="p-2 bg-orange-500 text-white rounded-xl shadow-md">
                  <Mail className="w-4 h-4" />
                </div>
                <div className="space-y-0.5">
                  <h1 className="text-xs font-bold text-gray-400 uppercase tracking-wider">{t("contact.emailTitle")}</h1>
                  <p className="text-sm font-semibold text-gray-800 break-all">agromart@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Meta Enrichment Grid Area (Hours & Map Info) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/90 p-6 rounded-2xl shadow-md border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-blue-100 text-blue-600 rounded-2xl">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base">{t("contact.hoursTitle")}</h4>
              <p className="text-sm text-gray-600 mt-0.5">{t("contact.hoursValue")}</p>
            </div>
          </div>

          <div className="bg-white/90 p-6 rounded-2xl shadow-md border border-gray-100 flex items-center gap-4">
            <div className="p-3 bg-red-100 text-red-600 rounded-2xl">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-gray-900 text-base">{t("contact.addressTitle")}</h4>
              <p className="text-sm text-gray-600 mt-0.5">{t("contact.addressValue")}</p>
            </div>
          </div>
        </div>

        {/* Dynamic FAQ Accordion Section */}
        <div className="bg-white/90 p-6 sm:p-8 rounded-3xl shadow-md border border-gray-100 space-y-6">
          <div className="flex items-center gap-2 pb-4 border-b border-gray-100">
            <HelpCircle className="w-5 h-5 text-green-600" />
            <h3 className="text-xl font-bold text-gray-900">{t("contact.faqSection.title")}</h3>
          </div>

          <div className="space-y-3">
            {[1, 2, 3].map((num, idx) => (
              <div key={num} className="border border-gray-100 rounded-xl overflow-hidden bg-gray-50/50 transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full p-4 text-left flex justify-between items-center font-semibold text-gray-800 hover:bg-gray-50 transition-colors text-sm sm:text-base"
                >
                  <span>{t(`contact.faqSection.q${num}`)}</span>
                  <span className="text-xl text-gray-400 font-normal ml-2">{activeFaq === idx ? "−" : "+"}</span>
                </button>
                <div 
                  className={`transition-all duration-300 ease-in-out overflow-hidden ${
                    activeFaq === idx ? "max-h-40 border-t border-gray-100 p-4 bg-white" : "max-h-0"
                  }`}
                >
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {t(`contact.faqSection.a${num}`)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};

export default Contact;