import { ErrorPageTemplate } from '@/components';
import { ERROR_MESSAGES, ROUTER_PATH } from '@/constants';

const { UNAUTHORIZED_ERROR_PAGE } = ERROR_MESSAGES;

const UnauthorizedErrorPage = () => {
  return (
    <ErrorPageTemplate
      title={UNAUTHORIZED_ERROR_PAGE.TITLE}
      subtitle={UNAUTHORIZED_ERROR_PAGE.SUB_TITLE}
      description={UNAUTHORIZED_ERROR_PAGE.DESCRIPTIONS}
      buttonText={UNAUTHORIZED_ERROR_PAGE.GO_TO_LOGIN_BUTTON}
      buttonLink={ROUTER_PATH.LOGIN}
    />
  );
};

export default UnauthorizedErrorPage;
