import { useRef, createContext, useCallback } from 'react';

export type StoreType = { first: string; last: string };

//Custom Hook to return the state
function useStoreData(): {
  get: () => StoreType;
  set: (value: Partial<StoreType>) => void;
  subscribe: (callback: () => void) => () => void;
} {
  // a. State
  const store = useRef({
    first: '',
    last: '',
  });

  // b. Get Method
  const get = useCallback(() => store.current, []);

  // c. Subscribers state to store the subcribe callback methods
  const subscribers = useRef(new Set<() => void>());

  // d. Set Method
  const set = useCallback((value: Partial<StoreType>) => {
    store.current = { ...store.current, ...value };
    // Need to loop through all callback instances and call each of them
    subscribers.current.forEach((callback) => callback());
  }, []);

  // e. Subcripbe Method
  const subscribe = useCallback((callback: () => void) => {
    subscribers.current.add(callback);
    return () => {
      return subscribers.current.delete(callback);
    };
  }, []);

  return {
    get,
    set,
    subscribe,
  };
}

// Typecast to define the return of the custom hook function above
type UseStoreDateReturnType = ReturnType<typeof useStoreData>;

// Create Context
export const StoreContext = createContext<UseStoreDateReturnType | null>(null);

const StoreContextProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreContext.Provider value={useStoreData()}>
      {children}
    </StoreContext.Provider>
  );
};

export { StoreContextProvider };
