import { PATH } from '@/constants';
import { fetchOrderDetail } from '@/services';
import {
  MypageHeader,
  OrderDetailClientWrapper,
  OrderTableInfoSection,
} from '@/components';

interface Params {
  params: Promise<{ orderId: string }>;
}

export async function generateMetadata() {
  return {
    title: PATH.ORDER_DETAIL.name,
  };
}

const OrderDetailPage = async ({ params }: Params) => {
  const { orderId } = await params;
  const orderDetailInfo = await fetchOrderDetail(orderId);

  const linkItems = [
    { label: PATH.HOME.name, href: '' },
    { label: PATH.MY_PAGE.name, href: '' },
    { label: PATH.ORDER_HISTORY.name, href: PATH.ORDER_HISTORY.url },
    { label: PATH.ORDER_DETAIL.name, href: `${orderId}`, isCurrent: true },
  ];

  const PADDING_STYLES = 'py-3xl';

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader linkItems={linkItems} pageName={PATH.ORDER_DETAIL.name} />

        <section className="gap-5xl flex flex-col">
          <OrderDetailClientWrapper
            orderId={Number(orderId)}
            initialOrderDetailInfo={orderDetailInfo}
            className={PADDING_STYLES}
          />

          <OrderTableInfoSection
            {...orderDetailInfo}
            className={PADDING_STYLES}
          />
        </section>
      </section>
    </div>
  );
};

export default OrderDetailPage;
