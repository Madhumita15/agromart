import * as yup from 'yup';
import type { TFunction } from 'i18next';

export const contactSchema = (t: TFunction) => 
  yup.object({
    name: yup
      .string()
      .required(() => t("contact.validation.nameRequired")),
    email: yup
      .string()
      .required(() => t("contact.validation.emailRequired"))
      .email(() => t("contact.validation.emailInvalid")),
    subject: yup
      .string()
      .required(() => t("contact.validation.subjectRequired")),
    message: yup
      .string()
      .required(() => t("contact.validation.messageRequired"))
  });