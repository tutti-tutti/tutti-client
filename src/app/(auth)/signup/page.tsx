import { Button, ExtraButton, Input } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';

const {
  SIGNUP,
  VERIFY_EMAIL_BUTTON,
  EMAIL_INPUT,
  VERIFY_EMAIL_INPUT,
  PW_INPUT,
  CHECK_PW_INPUT,
  CHECK_POLICY,
} = AUTH_CONSTANTS;
const { ANNOUNCEMENT, ALL, ESSENTIALS, OPTIONS } = CHECK_POLICY;

const SignupPage = () => {
  const tempLoginServerAction = async () => {
    'use server';
  };

  return (
    <>
      <form action={tempLoginServerAction}>
        <fieldset className="flex flex-col">
          <legend className="mb-sm font-style-heading">{SIGNUP}</legend>
          <div className="gap-sm mb-5xl flex flex-col">
            <Input
              label={EMAIL_INPUT.LABEL}
              name="email"
              placeholder={EMAIL_INPUT.PLACEHOLDER}
            />
            <div className="flex justify-end">
              <ExtraButton>{VERIFY_EMAIL_BUTTON}</ExtraButton>
            </div>
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
          <div className="gap-md flex flex-col">
            <div className="font-style-subHeading text-text-secondary">
              <input type="checkbox" className="mr-sm" />
              {/* 📌 체크박스 컴포넌트로 수정 필요! */}
              {ALL}
            </div>
            <div className="font-style-info text-text-secondary">
              {ANNOUNCEMENT}
            </div>
            <div className="border-border-primary mb-md flex-grow border-t"></div>
          </div>
          <div className="gap-sm flex flex-col">
            {ESSENTIALS.POLICY.map((essential, index) => (
              <div
                key={index}
                className="font-style-paragraph text-text-secondary gap-2xs flex"
              >
                <input type="checkbox" className="mr-sm" />
                {/* 📌 체크박스 컴포넌트로 수정 필요! */}
                {`${ESSENTIALS.PREFIX} ${essential}`}
                <div className="text-text-danger">*</div>
              </div>
            ))}
            {OPTIONS.POLICY.map((option, index) => (
              <div
                key={index}
                className="font-style-paragraph text-text-secondary"
              >
                <input type="checkbox" className="mr-sm" />
                {/* 📌 체크박스 컴포넌트로 수정 필요! */}
                {`${OPTIONS.PREFIX} ${option}`}
              </div>
            ))}
          </div>
          <Button type="submit" className="my-lg">
            {SIGNUP}
          </Button>
        </fieldset>
      </form>
    </>
  );
};

export default SignupPage;
