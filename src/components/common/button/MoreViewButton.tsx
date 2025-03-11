import Button from './Button';

const MoreViewButton = () => {
  return (
    <Button
      className="!py-lg text-text-secondary w-full text-xl"
      variant="transparent"
      icon="chevronsDown"
      iconPosition="right"
    >
      더보기
    </Button>
  );
};

export default MoreViewButton;
