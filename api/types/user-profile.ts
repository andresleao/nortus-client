import { UserSettings } from "./user-settings";

export interface UserProfile {
    id: number;
    name: string;
    avatar: string;
    role: string;
    permissions: string[];
    settings: UserSettings;
  }