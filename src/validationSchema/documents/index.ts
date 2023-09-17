import * as yup from 'yup';

export const documentValidationSchema = yup.object().shape({
  document_name: yup.string().required(),
  document_type: yup.string().required(),
  upload_date: yup.date().required(),
  healthcare_staff_id: yup.string().nullable().required(),
});
