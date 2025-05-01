import { ERROR_MESSAGES } from '@/constants';
import { pagePath } from '@/navigator';
import { ErrorPageTemplate } from '@/components';

const { UNAUTHORIZED_ERROR_PAGE } = ERROR_MESSAGES;

const UnauthorizedErrorPage = () => {
  return (
    <ErrorPageTemplate
      title={UNAUTHORIZED_ERROR_PAGE.TITLE}
      subtitle={UNAUTHORIZED_ERROR_PAGE.SUB_TITLE}
      description={UNAUTHORIZED_ERROR_PAGE.DESCRIPTIONS}
      buttonText={UNAUTHORIZED_ERROR_PAGE.GO_TO_LOGIN_BUTTON}
      buttonLink={pagePath.signin}
    />
  );
};

export default UnauthorizedErrorPage;
