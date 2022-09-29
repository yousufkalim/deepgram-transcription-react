// Init
import React, { useContext, useState, createContext } from 'react';

// Initializing Create Context Hook
const storeContext = createContext();
const storeUpdateContext = createContext();

// We are also initializing useContexts here
// we only call these functions where we need that data
export function Store() {
  return useContext(storeContext);
}

export function UpdateStore() {
  return useContext(storeUpdateContext);
}

// Initializing Store Provider
export function StoreProvider({ children }) {
  // Initializing State
  const [store, setStore] = useState({
    loggedIn: false,
    user: {},
  });

  // eslint-disable-next-line react/jsx-no-constructed-context-values
  const updateStore = (data) => {
    setStore((prev) => ({
      ...prev,
      ...data,
    }));
  };

  // Render
  return (
    <storeContext.Provider value={store}>
      <storeUpdateContext.Provider value={updateStore}>{children}</storeUpdateContext.Provider>
    </storeContext.Provider>
  );
}
