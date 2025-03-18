import { Icon, IconButton } from '@/components';
import { cn } from '@/utils';

type Step = string;

interface StepProgressBarProps {
  currentStep: Step;
  steps?: Step[];
}

const StepProgressBar = ({
  currentStep,
  steps = ['장바구니', '주문결제', '주문완료'],
}: StepProgressBarProps) => {
  return (
    <div className="gap-sm flex w-full items-center justify-center">
      {steps.map((step, index) => {
        const isActive = currentStep === step;
        const isLastStep = index === steps.length - 1;

        return (
          <div key={index} className="gap-sm flex items-center">
            <div className="gap-sm flex items-center">
              <IconButton
                className="hidden md:block"
                icon="check"
                variant={isActive ? 'primaryOutline' : 'tertiaryOutline'}
              />
              <span
                className={cn(
                  'font-style-subHeading',
                  isActive
                    ? 'text-text-primaryInteraction'
                    : 'text-text-disabled',
                )}
              >
                {step}
              </span>
            </div>

            {!isLastStep && (
              <Icon
                iconName="right"
                color={
                  isActive
                    ? 'var(--color-icon-info)'
                    : 'var(--color-icon-unchecked)'
                }
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default StepProgressBar;
