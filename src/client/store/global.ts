import { makeAutoObservable } from "mobx";

class Global {
  username: string | undefined = "ethan";

  constructor() {
    makeAutoObservable(this);
  }

  setUsername(name: string) {
    this.username = name;
  }
}

export default Global;
