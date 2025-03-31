'use client';

import { SHIPPING_ADRESS_INPUT_ITEMS } from '@/constants';
import { Input } from '@/components';

interface ShippingAddressFormProps {
  className: string;
}

const ShippingAddressForm = ({ className }: ShippingAddressFormProps) => {
  return (
    <form className={className}>
      {SHIPPING_ADRESS_INPUT_ITEMS.map((item, index) => (
        <fieldset key={`${item.name}-${index}`}>
          <legend className="absolute opacity-0">{item.label}</legend>
          <Input
            className="bg-bg-tertiary"
            name={item.name}
            type={item.type}
            placeholder={item.placeholder}
          />
        </fieldset>
      ))}
    </form>
  );
};

export default ShippingAddressForm;
