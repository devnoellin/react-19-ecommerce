import { store } from "@/app/_common/lib/store";
import { initSite } from "@/app/_modules/main/slices/mainActions";
import Error from "@/app/(pages)/(main)/error";
import Nav from "@/app/_modules/nav/Nav.server";
import RecommendProducts from "@/app/_modules/products/RecommendProductList.server";

export default async function Main() {
  await store.dispatch(initSite());

  const {
    main: mainState,
  } = store.getState();
  const { init, error } = mainState;

  if (error) {
    return <Error />;
  }

  return init && (
    <>
      {/* Navigation bar */}
      <Nav />
      {/* Content */}
      <div className="h-screen pt-[66px]">
        <RecommendProducts />
      </div>
    </>
  );
}
