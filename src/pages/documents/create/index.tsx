import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';

import { createDocument } from 'apiSdk/documents';
import { documentValidationSchema } from 'validationSchema/documents';
import { HealthcareStaffInterface } from 'interfaces/healthcare-staff';
import { getHealthcareStaffs } from 'apiSdk/healthcare-staffs';
import { DocumentInterface } from 'interfaces/document';

function DocumentCreatePage() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (values: DocumentInterface, { resetForm }: FormikHelpers<any>) => {
    setError(null);
    try {
      await createDocument(values);
      resetForm();
      router.push('/documents');
    } catch (error) {
      setError(error);
    }
  };

  const formik = useFormik<DocumentInterface>({
    initialValues: {
      document_name: '',
      document_type: '',
      upload_date: new Date(new Date().toDateString()),
      healthcare_staff_id: (router.query.healthcare_staff_id as string) ?? null,
    },
    validationSchema: documentValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Documents',
              link: '/documents',
            },
            {
              label: 'Create Document',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Create Document
          </Text>
        </Box>
        {error && (
          <Box mb={4}>
            <Error error={error} />
          </Box>
        )}
        <FormWrapper onSubmit={formik.handleSubmit}>
          <TextInput
            error={formik.errors.document_name}
            label={'Document Name'}
            props={{
              name: 'document_name',
              placeholder: 'Document Name',
              value: formik.values?.document_name,
              onChange: formik.handleChange,
            }}
          />

          <TextInput
            error={formik.errors.document_type}
            label={'Document Type'}
            props={{
              name: 'document_type',
              placeholder: 'Document Type',
              value: formik.values?.document_type,
              onChange: formik.handleChange,
            }}
          />

          <FormControl id="upload_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              Upload Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.upload_date ? new Date(formik.values?.upload_date) : null}
              onChange={(value: Date) => formik.setFieldValue('upload_date', value)}
            />
          </FormControl>
          <AsyncSelect<HealthcareStaffInterface>
            formik={formik}
            name={'healthcare_staff_id'}
            label={'Select Healthcare Staff'}
            placeholder={'Select Healthcare Staff'}
            fetcher={getHealthcareStaffs}
            labelField={'first_name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/documents')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'document',
    operation: AccessOperationEnum.CREATE,
  }),
)(DocumentCreatePage);
