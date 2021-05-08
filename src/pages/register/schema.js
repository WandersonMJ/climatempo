import { useCallback } from "react";
import * as yup from "yup";

export const schema = yup.object().shape({
  name: yup
    .string("Tipo inválido.")
    .min(6, "Mínimo de 6 caracteres.")
    .required("Obrigatório."),
  email: yup.string().email("Email inválido.").required("obrigatório"),
  password: yup
    .string("Tipo inválido.")
    .min(6, "Mínimo de 6 caracteres.")
    .required("obrigatório"),
});

export const useYupValidationResolver = (validationSchema) =>
  useCallback(
    async (data) => {
      try {
        const values = await validationSchema.validate(data, {
          abortEarly: false,
        });

        return {
          values,
          errors: {},
        };
      } catch (errors) {
        return {
          values: {},
          errors: errors.inner.reduce(
            (allErrors, currentError) => ({
              ...allErrors,
              [currentError.path]: {
                type: currentError.type ?? "validation",
                message: currentError.message,
              },
            }),
            {}
          ),
        };
      }
    },
    [validationSchema]
  );
