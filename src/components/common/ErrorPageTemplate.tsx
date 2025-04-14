import { Button, Icon } from '@/components';

interface ErrorPageTemplateProps {
  title: string;
  subtitle?: string;
  description: string[];
  buttonText: string;
  buttonLink: string;
}

const ErrorPageTemplate = ({
  title,
  subtitle,
  description,
  buttonText,
  buttonLink,
}: ErrorPageTemplateProps) => {
  return (
    <div className="gap-lg md:gap-7xl flex min-h-screen flex-col items-center justify-center md:flex-row">
      <Icon
        iconName="notFound"
        className="h-[228px] w-[228px] md:h-[346px] md:w-[346px]"
      />

      <div className="flex flex-col">
        <h1 className="font-style-title text-text-primary md:mb-xs mb-0">
          {title}
        </h1>
        {subtitle && (
          <span className="text-text-tertiaryInfo font-style-heading mb-sm md:mb-lg">
            {subtitle}
          </span>
        )}

        <div className="text-text-tertiaryInfo font-style-paragraph mb-sm md:mb-lg">
          {description.map((line, index) => (
            <p key={index}>{line}</p>
          ))}
        </div>

        <Button href={buttonLink} className="w-auto md:w-fit">
          {buttonText}
        </Button>
      </div>
    </div>
  );
};

export default ErrorPageTemplate;
