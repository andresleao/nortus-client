export interface AuthUser {
    id: number;
    name: string;
    email: string;
    role: string;
    permissions: string[];
}