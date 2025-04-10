export const ERROR_MESSAGES = {
  NOT_FOUND_PAGE: {
    TITLE: '앗 페이지를 찾지 못했습니다 :(',
    SUB_TITLE: '404 page not found',
    DESCRIPTIONS: [
      '현재 고객님이 접속하려는 페이지가 존재하지 않습니다!',
      '뒤로가기 버튼을 누르거나 아래 버튼을 눌러 홈페이지로',
      '돌아가시기 바랍니다!',
    ],
  },
  AUTHORIZED_ERROR_PAGE: {
    TITLE: '로그인한 사용자는 접근 불가능한 페이지입니다.',
    SUB_TITLE: '로그아웃 후 접근 가능합니다.',
    DESCRIPTIONS: [
      '현재 고객님이 접근하려는 페이지는 로그인한 경우 접근이 불가능합니다!',
      '뒤로가기 버튼을 누르거나 아래 버튼을 눌러 홈페이지로 돌아가시기 바랍니다!',
    ],
  },
  UNAUTHORIZED_ERROR_PAGE: {
    TITLE: '로그인하지 않은 사용자는 접근 불가능한 페이지입니다.',
    SUB_TITLE: '로그인 후 접근 가능합니다.',
    DESCRIPTIONS: [
      '현재 고객님이 접근하려는 페이지는 로그인하지 않은 경우 접근이 불가능합니다!',
      '뒤로가기 버튼을 누르거나 아래 버튼을 눌러 홈페이지로 돌아가시기 바랍니다!',
    ],
    GO_TO_LOGIN_BUTTON: '로그인하러 가기',
  },
  RESTRICTED_ERROR_PAGE: {
    TITLE: '직접 접근 불가능한 페이지입니다.',
    SUB_TITLE: '정상적인 접근이 아닙니다.',
    DESCRIPTIONS: [
      '현재 고객님이 접근하려는 페이지는 직접 접근할 수 없습니다.',
      '뒤로가기 버튼을 누르거나 아래 버튼을 눌러 홈페이지로 돌아가시기 바랍니다!',
    ],
  },
  GO_TO_MAIN_BUTTON: '홈페이지로 돌아가기',
  RESTRICT_EXTERNAL_REQUEST: '외부 요청은 허용되지 않습니다.',
  NETWORK_ERROR: '서버 응답이 없습니다. 네트워크 연결을 확인해 주세요',
  UNKNOWN_ERROR: '알 수 없는 오류가 발생했습니다. 재시도해 주세요.',
};
