import * as yup from 'yup';
import type { LoginType } from '../../typescript/type/auth.type';
import type { TFunction } from 'i18next'; // <-- Fixed with type-only import

export const loginSchema = (t: TFunction): yup.ObjectSchema<LoginType> => {
  return yup.object({
    email: yup
      .string()
      .required(t("loginValidation.emailRequired"))
      .email(t("loginValidation.emailInvalid")),
    password: yup
      .string()
      .required(t("loginValidation.passwordRequired"))
      .min(6, t("loginValidation.passwordMin")),
  });
};