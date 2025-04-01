export interface EmailVerificationState {
  success?: boolean;
  emailVerified?: boolean;
  codeVerified?: boolean;
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
