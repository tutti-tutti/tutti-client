import { Input } from '@/components';

interface DeliveryAddressProps {
  className: string;
}

const DeliveryAddress = ({ className }: DeliveryAddressProps) => {
  const inputStyles = 'bg-bg-tertiary';
  return (
    <form className={className}>
      <Input
        className={inputStyles}
        name="recipientName"
        type="text"
        placeholder="이름"
      />
      <Input
        className={inputStyles}
        name="recipientPhone"
        type="tel"
        placeholder="전화번호"
      />
      <Input
        className={inputStyles}
        name="zipCode"
        type="tel"
        placeholder="우편번호"
      />
      <Input
        className={inputStyles}
        name="recipientAddress"
        type="text"
        placeholder="주소"
      />
      <Input
        className={inputStyles}
        name="note"
        type="text"
        placeholder="배송 요청 사항"
      />
    </form>
  );
};

export default DeliveryAddress;
