import { store } from "@/app/_common/lib/store";
import { getRecommendedProducts } from "@/app/_modules/products/slices/productsActions";
import ProductCard from "@/app/_modules/products/ProductCard.client";

export default async function RecommendProducts() {
  await store.dispatch(getRecommendedProducts());

  const {
    products: productsState,
  } = store.getState();
  const { recommendProducts = [] } = productsState;

  return (
    <div className="container mx-auto max-w-[1024px] px-4">
      <div className="flex flex-wrap">
        {
          recommendProducts.map((item) =>  (
            <ProductCard
              key={item.product_id}
              item={item}
            />
          ))
        }
      </div>
    </div>

  );
}