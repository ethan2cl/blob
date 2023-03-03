import React from "react";
import { Store } from "../stores";

export const StoreContext = React.createContext<Store>(new Store());
