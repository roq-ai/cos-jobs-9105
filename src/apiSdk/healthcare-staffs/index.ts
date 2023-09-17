import axios from 'axios';
import queryString from 'query-string';
import { HealthcareStaffInterface, HealthcareStaffGetQueryInterface } from 'interfaces/healthcare-staff';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getHealthcareStaffs = async (
  query?: HealthcareStaffGetQueryInterface,
): Promise<PaginatedInterface<HealthcareStaffInterface>> => {
  const response = await axios.get('/api/healthcare-staffs', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createHealthcareStaff = async (healthcareStaff: HealthcareStaffInterface) => {
  const response = await axios.post('/api/healthcare-staffs', healthcareStaff);
  return response.data;
};

export const updateHealthcareStaffById = async (id: string, healthcareStaff: HealthcareStaffInterface) => {
  const response = await axios.put(`/api/healthcare-staffs/${id}`, healthcareStaff);
  return response.data;
};

export const getHealthcareStaffById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/healthcare-staffs/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteHealthcareStaffById = async (id: string) => {
  const response = await axios.delete(`/api/healthcare-staffs/${id}`);
  return response.data;
};
