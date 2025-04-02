import { fetchOrderDetail } from '@/services';
import { formatDateWithKorean } from '@/utils';
import {
  MypageHeader,
  OrderDetailClientWrapper,
  OrderTableInfoSection,
} from '@/components';

interface Params {
  params: Promise<{ orderId: string }>;
}

const pageTitle = '주문 상세';

export async function generateMetadata() {
  return {
    title: pageTitle,
  };
}

const OrderDetailPage = async ({ params }: Params) => {
  const { orderId } = await params;
  const orderDetailInfo = await fetchOrderDetail(orderId);
  const { orderedAt } = orderDetailInfo;

  const linkItems = [
    { label: '홈', href: '' },
    { label: '마이페이지', href: '' },
    { label: '주문 내역', href: '/my/orders' },
    { label: pageTitle, href: `${orderId}`, isCurrent: true },
  ];

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader linkItems={linkItems} pageName={pageTitle} />

        <section className="gap-5xl flex flex-col">
          <h2 className="gap-sm flex">
            <span>{formatDateWithKorean(orderedAt)} 주문</span>
            <span className="text-text-tertiary">주문번호 : {orderId}</span>
          </h2>

          <section className="bg-bg-tertiary px-5xl py-3xl">
            <OrderDetailClientWrapper
              orderId={Number(orderId)}
              initialOrderDetailInfo={orderDetailInfo}
            />
          </section>

          <OrderTableInfoSection {...orderDetailInfo} className="py-3xl" />
        </section>
      </section>
    </div>
  );
};

export default OrderDetailPage;
