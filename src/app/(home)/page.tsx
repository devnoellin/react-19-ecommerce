import { getNavList } from "@/app/_slices/nav/navActions";
import Header from "@/app/_components/nav/Header";
import { makeStore } from "@/app/_lib/store";

export default async function Home() {
  const store = makeStore(); // server side store

  await store.dispatch(getNavList()); // server fetch

  const { nav: navState } = store.getState();
  const { navList = [] } = navState || {};

  return (
    <div>
      <Header list={navList} />
    </div>
  );
}
