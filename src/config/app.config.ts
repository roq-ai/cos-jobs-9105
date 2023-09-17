interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Business Owner'],
  customerRoles: [],
  tenantRoles: ['Business Owner', 'Recruitment Manager', 'IT Support'],
  tenantName: 'Organization',
  applicationName: 'COS jobs',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [],
  ownerAbilities: [
    'Manage organization profile',
    'Invite and manage roles of Recruitment Managers and IT Support',
    'Manage user profiles',
    'Delete or deactivate users',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/9a61ba1a-55b9-423e-ab40-ce8dd4cbe805',
};
