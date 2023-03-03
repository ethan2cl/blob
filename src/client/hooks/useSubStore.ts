import { useContext } from "react";
import { StoreContext } from "../contexts";
import { StoreConstructorProps, Store } from "@/client/stores";

const useSubStore = <T extends keyof StoreConstructorProps>(
  key: T
): Store[T] => {
  const storeContext = useContext(StoreContext);
  return storeContext[key];
};

export default useSubStore;
