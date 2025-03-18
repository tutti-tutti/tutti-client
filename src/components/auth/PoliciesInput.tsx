'use client';

import { AUTH_CONSTANTS } from '@/constants';

interface PoliciesInputProps {
  error: string;
}

const {
  CHECK_POLICY: { ANNOUNCEMENT, ALL, ESSENTIALS, OPTIONS },
} = AUTH_CONSTANTS;

const PoliciesInput = ({ error }: PoliciesInputProps) => {
  return (
    <>
      <div className="gap-md flex flex-col">
        <div className="font-style-subHeading text-text-secondary">
          <input type="checkbox" className="mr-sm" />
          {/* 📌 체크박스 컴포넌트로 수정 필요! */}
          {ALL}
        </div>
        <div className="font-style-info text-text-secondary">
          {ANNOUNCEMENT}
        </div>
        <hr className="border-border-primary mb-md flex-grow border-t" />
      </div>
      <div className="text-red-500">{error}</div>
      <div className="gap-sm flex flex-col">
        {ESSENTIALS.POLICY.map((essential, index) => (
          <div
            key={index}
            className="font-style-paragraph text-text-secondary gap-2xs flex"
          >
            <input
              name="essentialPolicy"
              type="checkbox"
              className="mr-sm"
              value={index + 1}
            />
            {/* 📌 체크박스 컴포넌트로 수정 필요! */}
            <div>{`${ESSENTIALS.PREFIX} ${essential}`}</div>
            <div className="text-text-danger">*</div>
          </div>
        ))}
        {OPTIONS.POLICY.map((option, index) => (
          <div
            key={index}
            className="font-style-paragraph text-text-secondary gap-2xs flex"
          >
            <input
              name="optionalPolicy"
              type="checkbox"
              className="mr-sm"
              value={index + 1}
            />
            {/* 📌 체크박스 컴포넌트로 수정 필요! */}

            <div>{`${OPTIONS.PREFIX} ${option}`}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default PoliciesInput;
