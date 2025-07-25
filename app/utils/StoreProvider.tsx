"use client";

import { Provider } from "react-redux";
import store from "@/app/utils/store/redux";

export default function StoreProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}
