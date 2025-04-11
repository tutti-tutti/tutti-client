import { PATH_NAME, ROUTER_PATH } from '@/constants';
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
    title: PATH_NAME.ORDER_DETAIL,
  };
}

const OrderDetailPage = async ({ params }: Params) => {
  const { orderId } = await params;
  const orderDetailInfo = await fetchOrderDetail(orderId);

  const linkItems = [
    { label: PATH_NAME.HOME, href: '' },
    { label: PATH_NAME.MY_PAGE, href: '' },
    { label: PATH_NAME.ORDER_HISTORY, href: ROUTER_PATH.ORDERS_HISTORY },
    { label: PATH_NAME.ORDER_DETAIL, href: `${orderId}`, isCurrent: true },
  ];

  const PADDING_STYLES = 'py-3xl';

  return (
    <div className="gap-4xl mx-auto flex flex-col">
      <section className="gap-lg flex flex-col">
        <MypageHeader linkItems={linkItems} pageName={PATH_NAME.ORDER_DETAIL} />

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
