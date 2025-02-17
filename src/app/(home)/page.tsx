import Header from "@/app/_components/nav/Header";
import { makeStore } from "@/app/_lib/store";
import { getSiteConfig } from "@/app/_slices/main/mainActions";
import { getNavList } from "@/app/_slices/nav/navActions";
import { getRecommendedProducts } from "@/app/_slices/products/productsActions";

export default async function Home() {
  const store = makeStore(); // server side store

  await store.dispatch(getSiteConfig());
  await store.dispatch(getNavList());
  await store.dispatch(getRecommendedProducts());

  const { main: mainState, nav: navState } = store.getState();

  return (
    <div>
      <Header
        list={navState.navList}
        logo={mainState.siteConfig?.logo}
      />
    </div>
  );
}
