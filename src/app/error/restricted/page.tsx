import { ERROR_MESSAGES } from '@/constants';
import { pagePath } from '@/navigator';
import { ErrorPageTemplate } from '@/components';

const { RESTRICTED_ERROR_PAGE, GO_TO_MAIN_BUTTON } = ERROR_MESSAGES;

const RestrictedErrorPage = () => {
  return (
    <ErrorPageTemplate
      title={RESTRICTED_ERROR_PAGE.TITLE}
      subtitle={RESTRICTED_ERROR_PAGE.SUB_TITLE}
      description={RESTRICTED_ERROR_PAGE.DESCRIPTIONS}
      buttonText={GO_TO_MAIN_BUTTON}
      buttonLink={pagePath.home}
    />
  );
};

export default RestrictedErrorPage;
