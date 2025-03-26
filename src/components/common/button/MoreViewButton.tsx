import Button from './Button';

interface MoreViewButtonProps {
  onClick?: () => void;
}

const MoreViewButton = ({ onClick }: MoreViewButtonProps) => {
  return (
    <Button
      className="!py-lg text-text-secondary w-full text-xl"
      variant="transparent"
      icon="chevronsDown"
      iconPosition="right"
      onClick={onClick}
    >
      더보기
    </Button>
  );
};

export default MoreViewButton;
