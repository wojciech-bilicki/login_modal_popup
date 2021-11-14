export interface AuthArgs {
  password: string;
  login: string;
}

export type AuthFunction = (args: AuthArgs) => Promise<void>;

export type ResetPasswordFunction = (login: string) => Promise<void>;