'use client';

import { AUTH_CONSTANTS } from '@/constants';
import { SignupTerm } from '@/types';
import { Checkbox } from '@/components';
import TermItem from './TermItem';
import { useState, useMemo } from 'react';

interface PoliciesInputProps {
  signupTerms: SignupTerm[];
  error: string;
}

const {
  CHECK_POLICY: { ANNOUNCEMENT, ALL, ESSENTIALS, OPTIONALS },
} = AUTH_CONSTANTS;

const TermsInput = ({ signupTerms, error }: PoliciesInputProps) => {
  const [checkedIds, setCheckedIds] = useState<Set<number>>(new Set());

  const { essentialIds, optionalIds, allIds } = useMemo(() => {
    const essential = new Set(
      signupTerms.filter(t => t.required).map(t => t.id),
    );
    const optional = new Set(
      signupTerms.filter(t => !t.required).map(t => t.id),
    );
    return {
      essentialIds: essential,
      optionalIds: optional,
      allIds: new Set([...essential, ...optional]),
    };
  }, [signupTerms]);

  const handleGroupCheck = (ids: Set<number>, check: boolean) => {
    const newSet = new Set(checkedIds);
    ids.forEach(id => (check ? newSet.add(id) : newSet.delete(id)));
    setCheckedIds(newSet);
  };

  const isAllChecked = (targetIds: Set<number>) =>
    [...targetIds].every(id => checkedIds.has(id));

  return (
    <div>
      <article className="gap-md mt-lg flex flex-col">
        <div className="font-style-subHeading text-text-secondary gap-xs flex">
          <Checkbox
            checked={isAllChecked(allIds)}
            onChange={checked => handleGroupCheck(allIds, checked)}
          />
          <div>{ALL}</div>
        </div>
        <div className="font-style-info text-text-tertiary">{ANNOUNCEMENT}</div>
        <hr className="border-border-primary mb-md flex-grow border-t" />
      </article>

      <article>
        <div className="font-style-subHeading text-text-secondary gap-xs flex">
          <Checkbox
            checked={isAllChecked(essentialIds)}
            onChange={checked => handleGroupCheck(essentialIds, checked)}
          />
          <div>{ESSENTIALS.ALL}</div>
        </div>
        <div className="text-text-danger font-style-info -mt-2xs">{error}</div>
        <TermItem
          type="essential"
          signupTerms={signupTerms}
          checkedIds={checkedIds}
          onCheckChange={(id, checked) =>
            handleGroupCheck(new Set([id]), checked)
          }
        />
      </article>

      <article className="mt-lg">
        <div className="font-style-subHeading text-text-secondary gap-xs flex">
          <Checkbox
            checked={isAllChecked(optionalIds)}
            onChange={checked => handleGroupCheck(optionalIds, checked)}
          />
          <div>{OPTIONALS.ALL}</div>
        </div>
        <TermItem
          type="optional"
          signupTerms={signupTerms}
          checkedIds={checkedIds}
          onCheckChange={(id, checked) =>
            handleGroupCheck(new Set([id]), checked)
          }
        />
      </article>
    </div>
  );
};

export default TermsInput;
