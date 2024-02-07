import { useContext, useEffect, useState, useSyncExternalStore } from 'react';
import { StoreContext } from '../Context/useStoreContext';
import { StoreType } from '../Context/useStoreContext';

function useStoreHook<SelectorOutput>(
  selector: (store: StoreType) => SelectorOutput
): [SelectorOutput, (value: Partial<StoreType>) => void] {
  const store = useContext(StoreContext);

  if (!store) {
    throw new Error('Store not found');
  }

  // Subscribe using state and useEffect
  //   const [state, setState] = useState<StoreType>(store?.get());
  //   useEffect(() => {
  //     return store.subscribe(() => setState(store.get()));
  //   }, []);

  // Alternative to using state and useEffect
  // This helps subcribe to the ref and provide a snapshot, but also update as soon as when there is any change to the state
  const state = useSyncExternalStore(store.subscribe, () =>
    selector(store.get())
  );

  return [state, store.set];
}

export default useStoreHook;
