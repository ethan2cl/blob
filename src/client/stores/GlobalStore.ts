import { makeAutoObservable } from "mobx";

export type GlobalStoreConstructorProps = {
  username?: string;
};

// interface GlobalStoreInterface {
//   username: string | undefined;
//   setUsername(name: string): void;
// }

class GlobalStore {
  username: string | undefined;

  constructor(props?: GlobalStoreConstructorProps) {
    makeAutoObservable(this, {}, { autoBind: true });
    this.username = props?.username;
  }

  setUsername(name: string) {
    this.username = name;
  }
}

export default GlobalStore;
