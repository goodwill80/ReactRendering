import ContentContainer from './Components/ContentContainer';
import { StoreContextProvider } from './Context/useStoreContext';

function App() {
  return (
    <StoreContextProvider>
      <div className="w-[100vw] h-[100vh] flex flex-col justify-center b-4 p-12">
        <h1 className="font-bold">App</h1>
        <ContentContainer />
      </div>
    </StoreContextProvider>
  );
}

export default App;
