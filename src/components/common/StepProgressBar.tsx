import { Icon } from '@/components';
import { cn } from '@/utils';

type Step = string;

interface StepProgressBarProps {
  currentStep: Step;
  steps: Step[];
}

const StepProgressBar = ({ currentStep, steps }: StepProgressBarProps) => {
  return (
    <div className="gap-sm flex w-full items-center justify-center">
      {steps.map((step, index) => {
        const isActive = currentStep === step;
        const isLastStep = index === steps.length - 1;

        return (
          <div key={index} className="gap-sm flex items-center">
            <div className="gap-sm flex items-center">
              <div
                className={cn(
                  'p-xs hidden rounded-full border-[1.25px] md:block',
                  isActive
                    ? 'border-border-primaryInteraction'
                    : 'border-border-disabled',
                )}
              >
                <Icon
                  iconName="check"
                  iconProps={{
                    color: isActive
                      ? 'var(--color-icon-primaryInteraction)'
                      : 'var(--color-icon-tertiary)',
                  }}
                />
              </div>
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
