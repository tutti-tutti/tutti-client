import { Checkbox } from '@/components';
import { AUTH_CONSTANTS } from '@/constants';
import { SignupTerm } from '@/types';

interface TermItemProps {
  type: 'essential' | 'optional';
  signupTerms: SignupTerm[];
  checkedIds: Set<number>;
  onCheckChange: (termId: number, checked: boolean) => void;
}

const {
  CHECK_POLICY: { ESSENTIALS, OPTIONALS },
} = AUTH_CONSTANTS;

const TermItem = ({
  type,
  signupTerms,
  checkedIds,
  onCheckChange,
}: TermItemProps) => {
  const typeSignupTerms = signupTerms.filter(term =>
    type === 'essential' ? term.required : !term.required,
  );

  const typePrefix =
    type === 'essential' ? ESSENTIALS.PREFIX : OPTIONALS.PREFIX;
  const typeInputName =
    type === 'essential' ? 'essentialPolicy' : 'optionalPolicy';

  return (
    <div className="gap-md mt-sm flex flex-col">
      {typeSignupTerms.map((term: SignupTerm) => (
        <div
          key={term.id}
          className="font-style-paragraph text-text-tertiary gap-xs flex"
        >
          <Checkbox
            name={typeInputName}
            value={term.id}
            checked={checkedIds.has(term.id)}
            onChange={checked => onCheckChange(term.id, checked)}
          />
          <div>{`${typePrefix} ${term.displayName}`}</div>
          {type === 'essential' && <div className="text-text-danger">*</div>}
        </div>
      ))}
    </div>
  );
};

export default TermItem;
