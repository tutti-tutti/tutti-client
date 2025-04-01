import type { Meta, StoryObj } from '@storybook/react';

import { getExpectedArrivalAt } from '@/utils';
import type { OrderItem } from '@/types';
import { OrderProductListGroup } from '@/components';

const OrderProductListGroupMock = ({
  orderItems,
}: {
  orderItems: OrderItem[];
}) => {
  return <OrderProductListGroup orderItems={orderItems} />;
};

const expectedArrivalAt = getExpectedArrivalAt();
const sampleImage =
  'https://cdn-optimized.imweb.me/upload/S20240328110100ace0842/55757f8d5f03e.jpg';

const createOrderItems = (): OrderItem[] => [
  {
    storeId: 5,
    storeName: '라이프스타일 트렌드',
    productItemId: 11,
    productName: '풀커버 강화유리 액정보호필름 갤럭시노트20, 2매입',
    productImgUrl: sampleImage,
    firstOptionName: '사생활보호',
    firstOptionValue: '유',
    secondOptionName: '모서리',
    secondOptionValue: '풀커버',
    quantity: 2,
    price: 10930,
    expectedArrivalAt,
  },
  {
    storeId: 9,
    storeName: '꼼꼼이몰',
    productItemId: 22,
    productName: '캐논 G3910 정품 무한잉크',
    productImgUrl: sampleImage,
    firstOptionName: '색상',
    firstOptionValue: '보라',
    secondOptionName: null,
    secondOptionValue: null,
    quantity: 1,
    price: 35310,
    expectedArrivalAt,
  },
  {
    storeId: 4,
    storeName: '홈 & 테크 쇼핑몰',
    productItemId: 8,
    productName:
      '케이스 카드 2장 포켓 수납 파스텔 카메라 풀커버 실리콘 젤리 라벤더, 갤럭시S25 플러스',
    productImgUrl: sampleImage,
    firstOptionName: null,
    firstOptionValue: null,
    secondOptionName: null,
    secondOptionValue: null,
    quantity: 1,
    price: 14770,
    expectedArrivalAt,
  },
  {
    storeId: 3,
    storeName: 'Marshall 공식몰',
    productItemId: 320,
    productName: '[본사최신제품]인셀덤 크림 엑티브 50ml EX 수분 이엑스',
    productImgUrl: sampleImage,
    firstOptionName: null,
    firstOptionValue: null,
    secondOptionName: null,
    secondOptionValue: null,
    quantity: 1,
    price: 49790,
    expectedArrivalAt,
  },
  {
    storeId: 4,
    storeName: '홈 & 테크 쇼핑몰',
    productItemId: 447,
    productName: '프로쉬 알로에베라 고농축 세탁세제 3L',
    productImgUrl: sampleImage,
    firstOptionName: null,
    firstOptionValue: null,
    secondOptionName: null,
    secondOptionValue: null,
    quantity: 2,
    price: 10480,
    expectedArrivalAt,
  },
  {
    storeId: 7,
    storeName: '살림의여왕',
    productItemId: 370,
    productName:
      '르네 디종 프렌치 머스타드 850g 식자재 식료품 가공식품 수입식품 수입식재료',
    productImgUrl: sampleImage,
    firstOptionName: null,
    firstOptionValue: null,
    secondOptionName: null,
    secondOptionValue: null,
    quantity: 1,
    price: 14910,
    expectedArrivalAt,
  },
];

const meta: Meta<typeof OrderProductListGroupMock> = {
  title: 'Orders/OrderProductList',
  component: OrderProductListGroupMock,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    Story => (
      <div className="container mx-auto p-4">
        <Story />
      </div>
    ),
  ],
};

export default meta;
type Story = StoryObj<typeof OrderProductListGroupMock>;

export const ProductListGroupForCheckout: Story = {
  args: {
    orderItems: createOrderItems(),
  },
};
