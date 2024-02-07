// import { useContext } from 'react';
// import { StoreContext } from '../Context/useStoreContext';
import useStoreHook from '../CustomHooks/useStoreHook';

function Display({ value }: { value: 'first' | 'last' }) {
  //   const [store] = useContext(StoreContext)!; // ! tell typescript that it is not a null
  const [fieldValue] = useStoreHook((store) => store[value]);

  return (
    <div>
      {value} : {fieldValue}
    </div>
  );
}

export default Display;
