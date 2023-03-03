import React from "react";
import { initialMobxStore, Store } from "../stores";

export const StoreContext = React.createContext<Store>(initialMobxStore({}));
