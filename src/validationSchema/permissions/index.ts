import * as yup from 'yup';

export const permissionValidationSchema = yup.object().shape({
  permission_name: yup.string().required(),
  description: yup.string().nullable(),
  role_id: yup.string().nullable().required(),
});
