import * as yup from 'yup';

export const healthcareStaffValidationSchema = yup.object().shape({
  first_name: yup.string().required(),
  last_name: yup.string().required(),
  qualification: yup.string().required(),
  experience: yup.number().integer().required(),
  status: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
