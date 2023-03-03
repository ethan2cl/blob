export const init = (self: any, initialState: any) => {
  for (const k in initialState) {
    if (Object.prototype.hasOwnProperty(k)) {
      self[k] = initialState;
    }
  }
};

export const isServer = typeof window === "undefined";
