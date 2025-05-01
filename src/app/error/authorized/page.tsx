import { pagePath } from '@/navigator';
import { ERROR_MESSAGES } from '@/constants';
import { ErrorPageTemplate } from '@/components';

const { AUTHORIZED_ERROR_PAGE, GO_TO_MAIN_BUTTON } = ERROR_MESSAGES;

const AuthorizedErrorPage = () => {
  return (
    <ErrorPageTemplate
      title={AUTHORIZED_ERROR_PAGE.TITLE}
      subtitle={AUTHORIZED_ERROR_PAGE.SUB_TITLE}
      description={AUTHORIZED_ERROR_PAGE.DESCRIPTIONS}
      buttonText={GO_TO_MAIN_BUTTON}
      buttonLink={pagePath.home}
    />
  );
};

export default AuthorizedErrorPage;
