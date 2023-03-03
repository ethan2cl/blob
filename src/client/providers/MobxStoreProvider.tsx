import { ComponentWithChildren } from "@/shared";
import { StoreContext } from "../contexts";
import { initialMobxStore, StoreConstructorProps } from "../stores";

type Props = ComponentWithChildren<{
  initialState: StoreConstructorProps;
}>;
const MobxStoreProvider = ({ initialState, children }: Props) => {
  const initialMobxState = initialMobxStore(initialState);
  return (
    <StoreContext.Provider value={initialMobxState}>
      {children}
    </StoreContext.Provider>
  );
};

export default MobxStoreProvider;
