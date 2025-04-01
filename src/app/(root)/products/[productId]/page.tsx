import { fetchProductById, fetchProductReviewInfo } from '@/services';
import {
  RecommendProductList,
  ClientProductDetail,
  ProductReview,
  ProductDetailInfo,
} from '@/components';
import { reviewServerStore } from '@/stores';

interface Params {
  params: Promise<{ productId: string }>;
  searchParams: Promise<{ 'review-sort': string }>;
}

export async function generateMetadata({ params }: Params) {
  const { productId } = await params;
  const product = await fetchProductById(productId);

  if (!product) return;

  return {
    title: product.name,
    siteName: 'Tutti',
    description: product.description,
    openGraph: {
      title: product.name,
      images: product.titleUrl,
      type: 'website',
    },
  };
}

const ProductDetailPage = async ({ params, searchParams }: Params) => {
  const { productId } = await params;
  const initialProduct = await fetchProductById(productId);
  const { 'review-sort': reviewSortSearchParams } = await searchParams;
  const { setParams } = reviewServerStore();
  const productReviewInfo = await fetchProductReviewInfo(productId);
  
  setParams({ productIdParams: productId, reviewSortSearchParams });

  return (
    <div className="gap-5xl flex flex-col">
      <ClientProductDetail
        initialProduct={initialProduct}
        productId={productId}
        productReviewInfo={productReviewInfo}
      />

      <RecommendProductList categoryName="식료품" />

      <section className="bg-bg-secondary font-style-subHeading text-text-tertiary flex h-[640px] items-center justify-center overflow-y-auto">
        챗봇영역
      </section>

      <section className="gap-md flex flex-col">
        <h2 className="font-style-subHeading text-text-primary">상품 정보</h2>
        <ProductDetailInfo initialProduct={initialProduct} />
      </section>

      <section className="flex flex-col" id="product-review">
        <div className="mb-md">
          <h2 className="font-style-subHeading text-text-primary">상품 리뷰</h2>
          <p className="text-text-secondary font-style-paragraph">
            동일한 상품에 대한 고객들의 의견입니다.
          </p>
        </div>
        <ProductReview />
      </section>
    </div>
  );
};

export default ProductDetailPage;
