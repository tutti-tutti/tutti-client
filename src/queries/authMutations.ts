/** NOTE - mutation queries 예시 목적이며 authMutations는 보안 이슈로 실제 사용하지 않습니다. */

import { useMutation, useQueryClient } from '@tanstack/react-query';
import { verifyEmail, verifyCode, signup, resetPw, signin } from '@/services';

// 이메일 검증 mutation
export const useVerifyEmailMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (email: string) => verifyEmail(email),
    onSuccess: () => {
      // 이메일 검증 성공 시 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ['user', 'verification'] });
    },
    onError: error => {
      console.error('Email verification failed:', error);
    },
  });
};

// 인증코드 확인 mutation
export const useVerifyCodeMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, verify }: { email: string; verify: string }) =>
      verifyCode(email, verify),
    onSuccess: (data, variables) => {
      // 인증코드 확인 성공 시 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ['user', 'verification', variables.email],
      });
    },
    onError: error => {
      console.error('Code verification failed:', error);
    },
  });
};

// 회원가입 mutation
export const useSignupMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      email,
      pw,
      checkPw,
      essentialPolicy,
      optionalPolicy,
    }: {
      email: string;
      pw: string;
      checkPw: string;
      essentialPolicy: string[];
      optionalPolicy: FormDataEntryValue[];
    }) => signup(email, pw, checkPw, essentialPolicy, optionalPolicy),
    onSuccess: (data, variables) => {
      // 회원가입 성공 시 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['auth'] });

      // 이메일 검증 관련 쿼리 무효화
      queryClient.invalidateQueries({
        queryKey: ['user', 'verification', variables.email],
      });
    },
    onError: error => {
      console.error('Signup failed:', error);
    },
  });
};

// 비밀번호 재설정 mutation
export const useResetPasswordMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      email,
      pw,
      checkPw,
    }: {
      email: string;
      pw: string;
      checkPw: string;
    }) => resetPw(email, pw, checkPw),
    onSuccess: (data, variables) => {
      // 비밀번호 재설정 성공 시 관련 쿼리 무효화
      queryClient.invalidateQueries({ queryKey: ['user', variables.email] });
      queryClient.invalidateQueries({ queryKey: ['auth'] });
    },
    onError: error => {
      console.error('Password reset failed:', error);
    },
  });
};

// 로그인 mutation
export const useSigninMutation = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ email, pw }: { email: string; pw: string }) =>
      signin(email, pw),
    onSuccess: data => {
      // 로그인 성공 시 사용자 정보 쿼리 무효화 및 캐시 업데이트
      queryClient.invalidateQueries({ queryKey: ['user'] });
      queryClient.invalidateQueries({ queryKey: ['auth'] });

      // 사용자 정보 캐시에 직접 업데이트
      if (data.user) {
        queryClient.setQueryData(['user', data.user.id], data.user);
      }
    },
    onError: error => {
      console.error('Signin failed:', error);
    },
  });
};

/** NOTE - 단순 쿼리 키 예시
 * queryKey: ['auth', 'signup-email'],
 * queryKey: ['auth', 'password-reset'],
 * queryKey: ['auth', 'signup-email'],
 * queryKey: ['auth', 'password-reset'],
 * queryKey: ['auth', 'login-email'],
 */
