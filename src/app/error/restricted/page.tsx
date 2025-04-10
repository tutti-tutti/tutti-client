import { ErrorPageTemplate } from '@/components';
import { ERROR_MESSAGES, ROUTER_PATH } from '@/constants';

const { RESTRICTED_ERROR_PAGE, GO_TO_MAIN_BUTTON } = ERROR_MESSAGES;

const RestrictedErrorPage = () => {
  return (
    <ErrorPageTemplate
      title={RESTRICTED_ERROR_PAGE.TITLE}
      subtitle={RESTRICTED_ERROR_PAGE.SUB_TITLE}
      description={RESTRICTED_ERROR_PAGE.DESCRIPTIONS}
      buttonText={GO_TO_MAIN_BUTTON}
      buttonLink={ROUTER_PATH.HOME}
    />
  );
};

export default RestrictedErrorPage;
