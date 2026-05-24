import * as yup from 'yup';
import type { SignupType } from '../../typescript/type/auth.type';
import type { TFunction } from 'i18next';

// Wrap the schema initialization in a function that receives the translation instance 't'
export const signupSchema = (t: TFunction): yup.ObjectSchema<SignupType> => {
  return yup.object({
    name: yup
      .string()
      .required(t("validation.nameRequired")),
    email: yup
      .string()
      .required(t("validation.emailRequired"))
      .email(t("validation.emailInvalid")),
    password: yup
      .string()
      .required(t("validation.passwordRequired"))
      .min(6, t("validation.passwordMin")),
  });
};