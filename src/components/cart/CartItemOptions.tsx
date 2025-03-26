interface CartItemOptionsProps {
  firstOptionValue?: string;
  secondOptionValue?: string;
}

const CartItemOptions = ({
  firstOptionValue,
  secondOptionValue,
}: CartItemOptionsProps) => {
  if (!firstOptionValue && !secondOptionValue) return null;

  return (
    <div className="gap-sm mb-sm flex items-center">
      {firstOptionValue && (
        <span className="text-text-tertiary font-style-paragraph">
          {firstOptionValue}
        </span>
      )}
      {firstOptionValue && secondOptionValue && (
        <div className="bg-bg-disabled h-[var(--space-2xs)] w-[var(--space-2xs)] rounded-full" />
      )}
      {secondOptionValue && (
        <span className="text-text-tertiary font-style-paragraph">
          {secondOptionValue}
        </span>
      )}
    </div>
  );
};

export default CartItemOptions;
