import { AddressInputItem } from '@/types';

export const SHIPPING_ADDRESS_INPUT_ITEMS: AddressInputItem[] = [
  {
    label: '이름',
    name: 'recipientName',
    type: 'text',
    placeholder: '이름',
    vaildType: 'name',
  },
  {
    label: '이메일',
    name: 'recipientEmail',
    type: 'email',
    placeholder: '이메일',
    vaildType: 'email',
  },
  {
    label: '전화번호',
    name: 'recipientPhone',
    type: 'text',
    placeholder: '전화번호',
    vaildType: 'phone',
  },
  {
    label: '우편번호',
    name: 'zipCode',
    type: 'text',
    placeholder: '우편번호',
    vaildType: 'number',
  },
  {
    label: '주소',
    name: 'recipientAddress',
    type: 'text',
    placeholder: '주소',
    vaildType: 'address',
  },
  {
    label: '상세 주소',
    name: 'recipientAddressDetail',
    type: 'text',
    placeholder: '상세 주소',
    vaildType: 'address',
  },
  {
    label: '배송 요청 사항',
    name: 'note',
    type: 'text',
    placeholder: '배송 요청 사항',
    vaildType: 'note',
  },
];
