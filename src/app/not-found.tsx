import { ErrorPageTemplate } from '@/components';
import { ERROR_MESSAGES, ROUTER_PATH } from '@/constants';

const { NOT_FOUND_PAGE, GO_TO_MAIN_BUTTON } = ERROR_MESSAGES;

export default function NotFound() {
  return (
    <ErrorPageTemplate
      title={NOT_FOUND_PAGE.TITLE}
      subtitle={NOT_FOUND_PAGE.SUB_TITLE}
      description={NOT_FOUND_PAGE.DESCRIPTIONS}
      buttonText={GO_TO_MAIN_BUTTON}
      buttonLink={ROUTER_PATH.HOME}
    />
  );
}
