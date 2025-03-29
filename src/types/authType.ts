export interface EmailVerificationState {
  success?: boolean;
  emailVerified?: boolean;
  codeVerified?: boolean;
  email?: string;
  message?: string;
  error?: string;
  emailError?: string;
  pwError?: string;
  checkPwError?: string;
  essentialPolicyError?: string;
}
