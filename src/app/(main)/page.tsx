import Error from "@/app/(main)/error";
import Header from "@/app/_components/nav/Header";
import ProductCard from "@/app/_components/card/ProductCard";
import { makeStore } from "@/app/_lib/store";
import { initSite } from "@/app/_slices/main/mainActions";
import { addCart } from "@/app/_slices/cart/cartSlice";

export default async function Main() {
  const store = makeStore(); // server side store
  const { dispatch } = store;

  await dispatch(initSite());

  const {
    main: mainState,
    nav: navState,
    products: productsState,
  } = store.getState();
  const { init, error, siteConfig } = mainState;
  const { recommendProducts = [] } = productsState;

  if (error) {
    return <Error />;
  }

  return init && (
    <>
      <Header
        list={navState.navList}
        logo={siteConfig.logo}
      />
      {/* content */}
      <div className="h-screen pt-[100px]">
        <div className="flex flex-wrap justify-center">
          {recommendProducts.map((item) => (
              <ProductCard
                item={item}
              />
          ))}
        </div>
      </div>
    </>
  );
}
