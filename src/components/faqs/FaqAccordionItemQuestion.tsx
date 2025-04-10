import Link, { type LinkProps } from 'next/link';

import { Icon } from '@/components';

interface FaqAccordionItemProps extends LinkProps {
  isSelected: boolean;
  question: string;
}

const FaqAccordionItemQuestion = ({
  isSelected,
  question,
  ...props
}: FaqAccordionItemProps) => {
  return (
    <Link
      className="p-md border-border-secondary flex items-center justify-between border-b"
      scroll={false}
      replace={true}
      {...props}
    >
      <div className="gap-3xl flex items-center">
        <div className="font-style-subHeading text-text-info">Q.</div>
        <div className="font-style-paragraph text-text-primary">{question}</div>
      </div>
      {isSelected ? (
        <Icon iconName="chevronsUp" />
      ) : (
        <Icon iconName="chevronsDown" />
      )}
    </Link>
  );
};

export default FaqAccordionItemQuestion;
