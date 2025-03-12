import { Button, ClickText, Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

const {
  RESET_PW,
  CHECK_VERIFY_CODE_BUTTON,
  RESEND_EMAIL,
  EMAIL_INPUT,
  VERIFY_EMAIL_INPUT,
  PW_INPUT,
  CHECK_PW_INPUT,
} = AUTH_CONSTANTS;

const ResetPasswordPage = () => {
  const tempLoginServerAction = async () => {
    'use server';
  };

  return (
    <>
      <form action={tempLoginServerAction}>
        <fieldset className="flex flex-col">
          <legend className="mb-xs font-style-heading">{RESET_PW}</legend>
          <div className="gap-md mb-sm flex flex-col">
            <Input
              label={EMAIL_INPUT.LABEL}
              name="email"
              placeholder={EMAIL_INPUT.PLACEHOLDER}
            />
            <Input
              label={VERIFY_EMAIL_INPUT.LABEL}
              name="verifyEmail"
              placeholder={VERIFY_EMAIL_INPUT.PLACEHOLDER}
            />
            <Input
              label={PW_INPUT.LABEL}
              name="pw"
              type="password"
              placeholder={PW_INPUT.PLACEHOLDER}
              icon="viewCancel"
            />
            <Input
              label={CHECK_PW_INPUT.LABEL}
              name="checkPw"
              type="password"
              placeholder={CHECK_PW_INPUT.PLACEHOLDER}
              icon="viewCancel"
            />
          </div>
          <Button type="submit" className="my-lg">
            {CHECK_VERIFY_CODE_BUTTON || RESET_PW}
          </Button>
          <ClickText>{RESEND_EMAIL}</ClickText>
        </fieldset>
      </form>
    </>
  );
};

export default ResetPasswordPage;
