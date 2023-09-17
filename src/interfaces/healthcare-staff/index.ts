import { DocumentInterface } from 'interfaces/document';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface HealthcareStaffInterface {
  id?: string;
  first_name: string;
  last_name: string;
  qualification: string;
  experience: number;
  status: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  document?: DocumentInterface[];
  user?: UserInterface;
  _count?: {
    document?: number;
  };
}

export interface HealthcareStaffGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  qualification?: string;
  status?: string;
  user_id?: string;
}
