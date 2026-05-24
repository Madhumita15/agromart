import * as yup from "yup";
import type { farmerType } from "../../typescript/type/farmer.type";
import type { TFunction } from "i18next"; // Strict type-only import

export const getFarmSchema = (t: TFunction): yup.ObjectSchema<farmerType> => {
  return yup.object({
    email: yup.string().email(t("farmerPage.farmerValidation.emailInvalid")).notRequired(),
    password: yup
      .string()
      .required(t("farmerPage.farmerValidation.passwordRequired"))
      .min(6, t("farmerPage.farmerValidation.passwordMin")),
    name: yup.string().required(t("farmerPage.farmerValidation.nameRequired")),
    farmLocation: yup.string().required(t("farmerPage.farmerValidation.locationRequired")),
    NID: yup
      .string()
      .required(t("farmerPage.farmerValidation.nidRequired"))
      .matches(/^[0-9]+$/, t("farmerPage.farmerValidation.nidDigitsOnly"))
      .length(17, t("farmerPage.farmerValidation.nidLength")),
    phoneNumber: yup
      .string()
      .required(t("farmerPage.farmerValidation.phoneRequired"))
      .matches(/^[0-9]+$/, t("farmerPage.farmerValidation.phoneDigitsOnly"))
      .length(10, t("farmerPage.farmerValidation.phoneLength")),
    paymentMethod: yup
      .string()
      .oneOf(["cash", "upi"])
      .required(t("farmerPage.farmerValidation.paymentRequired")),
    image: yup.mixed<File>().nullable().required(t("farmerPage.farmerValidation.imageRequired")),
  });
};