export interface UserState {
  currentUser: UserInfo | null;
  loading: boolean;
  error: any;
}

export interface UserInfo {
  username: string;
  displayName: string;
  type?: "user" | "admin" | "guest";
  avatarUrl?: string;
}
