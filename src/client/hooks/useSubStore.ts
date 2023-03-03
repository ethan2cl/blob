import { useContext } from "react";
import { StoreContext } from "../contexts";
import { Store } from "@/client/stores";

const useSubStore = <T extends keyof Store>(key: T): Store[T] => {
  const storeContext = useContext(StoreContext);
  return storeContext[key];
};

export default useSubStore;
