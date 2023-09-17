import { RoleInterface } from 'interfaces/role';
import { GetQueryInterface } from 'interfaces';

export interface PermissionInterface {
  id?: string;
  permission_name: string;
  description?: string;
  role_id: string;
  created_at?: any;
  updated_at?: any;

  role?: RoleInterface;
  _count?: {};
}

export interface PermissionGetQueryInterface extends GetQueryInterface {
  id?: string;
  permission_name?: string;
  description?: string;
  role_id?: string;
}
