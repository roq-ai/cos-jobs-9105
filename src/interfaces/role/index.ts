import { PermissionInterface } from 'interfaces/permission';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface RoleInterface {
  id?: string;
  role_name: string;
  permissions: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  permission?: PermissionInterface[];
  user?: UserInterface;
  _count?: {
    permission?: number;
  };
}

export interface RoleGetQueryInterface extends GetQueryInterface {
  id?: string;
  role_name?: string;
  permissions?: string;
  user_id?: string;
}
