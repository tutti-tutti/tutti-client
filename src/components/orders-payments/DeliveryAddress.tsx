'use client';

import { DELIVERY_ADRESS_INPUT_ITEMS } from '@/constants';
import { Input } from '@/components';

interface DeliveryAddressProps {
  className: string;
}

const DeliveryAddress = ({ className }: DeliveryAddressProps) => {
  return (
    <form className={className}>
      {DELIVERY_ADRESS_INPUT_ITEMS.map((item, index) => (
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

export default DeliveryAddress;
