import { HealthcareStaffInterface } from 'interfaces/healthcare-staff';
import { GetQueryInterface } from 'interfaces';

export interface DocumentInterface {
  id?: string;
  document_name: string;
  document_type: string;
  upload_date?: any;
  healthcare_staff_id: string;
  created_at?: any;
  updated_at?: any;

  healthcare_staff?: HealthcareStaffInterface;
  _count?: {};
}

export interface DocumentGetQueryInterface extends GetQueryInterface {
  id?: string;
  document_name?: string;
  document_type?: string;
  healthcare_staff_id?: string;
}
