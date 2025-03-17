import { fetchProductById } from '@/services';
import { RecommendProductList, ProductDetailItem } from '@/components';

interface Params {
  params: Promise<{ productId: string }>;
}

export async function generateMetadata({ params }: Params) {
  const { productId } = await params;
  const product = await fetchProductById(productId);

  if (!product) return;

  return {
    title: product.name,
    siteName: 'Jihye',
    description: product.description,
    openGraph: {
      title: product.name,
      images: product.titleUrl,
      type: 'website',
    },
  };
}

const ProductDetailPage = async ({ params }: Params) => {
  const { productId } = await params;
  const product = await fetchProductById(productId);

  return (
    <div className="gap-5xl flex flex-col">
      <ProductDetailItem {...product} />

      <RecommendProductList categoryName="식료품" />

      <section className="bg-bg-secondary font-style-subHeading text-text-tertiary flex h-[640px] items-center justify-center overflow-y-auto">
        챗봇영역
      </section>

      <section className="gap-md flex flex-col">
        <h2 className="font-style-subHeading text-text-primary">상품 정보</h2>
        <div className="bg-bg-secondary font-style-subHeading text-text-tertiary flex h-[640px] items-center justify-center overflow-y-auto">
          상품정보영역
        </div>
      </section>

      <section className="gap-md flex flex-col">
        <div>
          <h2 className="font-style-subHeading text-text-primary">상품 리뷰</h2>
          <p className="text-text-secondary font-style-paragraph">
            동일한 상품에 대한 고객들의 의견입니다.
          </p>
        </div>
        <div className="bg-bg-secondary font-style-subHeading text-text-tertiary flex h-[640px] items-center justify-center overflow-y-auto">
          리뷰영역
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
