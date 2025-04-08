export interface EmailVerificationState {
  isSuccess?: boolean;
  isEmailVerified?: boolean;
  isCodeVerified?: boolean;
  email?: string;
  pw?: string;
  checkPw?: string;
  essentialPolicy?: string[];
  optionalPolicy?: string[];
  message?: string;
  error?: string;
  emailError?: string;
  pwError?: string;
  checkPwError?: string;
  essentialPolicyError?: string;
  serverError?: string;
}

export interface SignupTerm {
  id: number;
  displayName: string;
  content: string;
  required: boolean;
  termsType: string;
}
