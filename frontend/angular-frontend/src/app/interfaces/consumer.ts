export interface Consumer {
  name: string;
  credentials: Credential[];
  version: string;
  key: string;
}

export interface Credential {
  type: string;
}

export const CredentialType = {
  "key-auth": {
    key: "key-auth",
    displayName: "Key Auth",
    displayColor: "blue"
  },
  "jwt-auth": {
    key: "jwt-auth",
    displayName: "JWT Auth",
    displayColor: "green"
  }
};
