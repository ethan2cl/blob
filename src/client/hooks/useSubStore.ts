import store from "../store";

const useSubStore = (key: keyof typeof store) => {
  return store[key];
};

export default useSubStore;
