interface FaqAccordionAnswerProps {
  answer: string;
  viewCnt: number;
}

const FaqAccordionAnswer = ({ answer, viewCnt }: FaqAccordionAnswerProps) => {
  return (
    <div className="p-lg bg-bg-tertiary">
      <div className="mb-sm flex items-center justify-between">
        <div className="font-style-subHeading text-text-info -mt-sm">A.</div>
        <div className="font-style-info text-text-tertiary">조회 {viewCnt}</div>
      </div>
      <div className="font-style-paragraph text-text-secondary">{answer}</div>
    </div>
  );
};

export default FaqAccordionAnswer;
