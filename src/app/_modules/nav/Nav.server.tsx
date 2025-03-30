
import Link from "next/link";
import Image from "next/image";

import { store } from "@/app/_common/lib/store";
import { getNavList } from "@/app/_modules/nav/slices/navActions";

import NavItems from "@/app/_modules/nav/NavItems.client";
import UserMenu from "@/app/_modules/nav/UserMenu.client";

export default async function RecommendProducts() {
  await store.dispatch(getNavList());

  const {
    main: mainState,
    nav: navState,
  } = store.getState();
  const { siteConfig } = mainState;
  const { navList = [] } = navState

  return (
    <nav className="flex justify-between items-center bg-gray-100 px-5 py-2 shadow-md fixed w-full z-10">
      {/* Logo */}
      {siteConfig.logo && (
        <Link href="/" className="">
          <Image
            src={siteConfig.logo}
            className="mr-6 max-h-[50px]"
            width={150}
            height={60}
            alt="Logo"
          />
        </Link>
      )}
      <div className="flex items-center space-x-4">
        {/* Navigation Items */}
        <NavItems list={navList} />
        {/* User Menu */}
        <UserMenu />
      </div>
    </nav>
  );
}