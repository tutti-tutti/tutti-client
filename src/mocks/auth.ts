export const AUTH_REQUEST = {
  EMAIL_VERIFY: {
    SUCCESS: {
      message: '이메일 인증 코드가 발송되었습니다.',
    },
    ERROR: { error: '이메일은 필수 입력 항목입니다' },
  },
  EMAIL_CONFIRM: {
    SUCCESS: {
      message: '이메일 인증이 완료되었습니다.',
    },
    ERROR: {
      error: '인증 코드가 올바르지 않거나 만료되었습니다.',
    },
  },
  SIGNUP_EMAIL: {
    SUCCESS: {
      message: '회원가입이 완료되었습니다.',
    },
    ERROR: {
      error: '회원가입에 실패했습니다',
    },
  },
};
