import { ReactNode } from 'react';

export default function RoleBasedGuard({
  accessibleRoles,
  children,
}: {
  accessibleRoles: string[];
  children: ReactNode;
}) {
  return <>{children}</>;
}
