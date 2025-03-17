export const AUTH_CONSTANTS = {
  SIGNIN: '로그인',
  SIGNUP: '회원가입',
  RESET_PW: '비밀번호 재설정',
  AUTO_SIGNIN: '자동 로그인',
  FORGOT_PW: '비밀번호를 잊어버렸나요?',
  SOCIAL_SIGNIN: '소셜로 로그인하기',
  TO_SIGNUP: '아직 회원이 아니신가요?',
  VERIFY_EMAIL_BUTTON: '이메일 인증하기',
  CHECK_VERIFY_CODE_BUTTON: '인증번호 확인',
  RESEND_EMAIL: '인증번호가 오지 않았나요? 인증메일 다시 받기',
  EMAIL_INPUT: {
    LABEL: '이메일 입력',
    PLACEHOLDER: '이메일을 입력해주세요',
    ERROR: '유효한 이메일 주소를 입력해주세요.',
  },
  VERIFY_EMAIL_INPUT: {
    LABEL: '인증번호 입력',
    PLACEHOLDER: '이메일로 전송된 인증번호를 입력해주세요',
    ERROR: '이메일 인증 코드를 입력해주세요.',
  },
  PW_INPUT: {
    LABEL: '비밀번호 입력',
    PLACEHOLDER: '비밀번호를 입력해주세요',
    ERROR: '비밀번호는 영문, 숫자를 포함한 8자리 이상이어야 합니다.',
    SIGNIN_ERROR: '비밀번호를 입력해주세요.',
  },
  CHECK_PW_INPUT: {
    LABEL: '비밀번호 확인',
    PLACEHOLDER: '비밀번호를 다시 입력해주세요',
    ERROR: '비밀번호가 일치하지 않습니다.',
  },
  NEW_PW_INPUT: {
    LABEL: '새로운 비밀번호 입력',
    PLACEHOLDER: '비밀번호를 입력해주세요',
  },
  CHECK_NEW_PW_INPUT: {
    LABEL: '새로운 비밀번호 확인',
    PLACEHOLDER: '비밀번호를 다시 입력해주세요',
  },
  CHECK_POLICY: {
    ANNOUNCEMENT:
      '전체 동의는 필수 및 선택 정보에 대한 동의가 포함 되어 있습니다. 개별적으로 동의를 선택하실 수 있습니다. 선택 항목에 대한 동의를 거부하시는 경우에도 서비스 이용이 가능합니다. 단 할인 및 이벤트 관련 소식을 받지 못합니다.',
    ALL: '모두 동의하기',
    ESSENTIALS: {
      PREFIX: '[필수]',
      POLICY: [
        '만 14세 이상입니다.',
        '지혜 이용약관 동의',
        '전자금융거래 이용약관 동의',
        '개인정보 수집 및 이용 동의',
        '개인정보 제 3자 제공 동의',
      ],
      ERROR: '필수 약관에 동의해주세요.',
    },
    OPTIONS: {
      PREFIX: '[선택]',
      POLICY: [
        '마케팅 수신 이메일 동의',
        '마케팅 수신 SMS, SNS 수신 동의',
        '앱 푸시 수신 동의',
      ],
    },
  },
};
