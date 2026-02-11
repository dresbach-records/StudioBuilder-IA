
export enum Role {
  MANAGER = 'MANAGER',
  DEVELOPER = 'DEVELOPER',
  DESIGNER = 'DESIGNER'
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: Role;
  avatar?: string;
}
