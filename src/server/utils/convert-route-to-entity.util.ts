const mapping: Record<string, string> = {
  documents: 'document',
  'healthcare-staffs': 'healthcare_staff',
  organizations: 'organization',
  permissions: 'permission',
  roles: 'role',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
