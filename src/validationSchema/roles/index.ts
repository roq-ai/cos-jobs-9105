import * as yup from 'yup';

export const roleValidationSchema = yup.object().shape({
  role_name: yup.string().required(),
  permissions: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
