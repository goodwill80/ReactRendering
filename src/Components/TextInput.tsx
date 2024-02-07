import useStoreHook from '../CustomHooks/useStoreHook';

function TextInput({ value }: { value: 'first' | 'last' }) {
  //   const [store, setStore] = useContext(StoreContext)!;
  const [fieldValue, set] = useStoreHook((store) => store[value]);
  return (
    <div className="flex flex-row gap-3">
      <p>{value} :</p>
      <input
        type="text"
        value={fieldValue}
        onChange={(e) => set({ [value]: e.target.value })}
      />
    </div>
  );
}

export default TextInput;
