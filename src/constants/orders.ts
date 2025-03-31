interface inputItem {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

export const DELIVERY_ADRESS_INPUT_ITEMS: inputItem[] = [
  {
    label: '이름',
    name: 'recipientName',
    type: 'text',
    placeholder: '이름',
  },
  {
    label: '전화번호',
    name: 'recipientPhone',
    type: 'text',
    placeholder: '전화번호',
  },
  {
    label: '우편번호',
    name: 'zipCode',
    type: 'text',
    placeholder: '우편번호',
  },
  {
    label: '주소',
    name: 'recipientAddress',
    type: 'text',
    placeholder: '주소',
  },
  {
    label: '배송 요청 사항',
    name: 'note',
    type: 'text',
    placeholder: '배송 요청 사항',
  },
];
