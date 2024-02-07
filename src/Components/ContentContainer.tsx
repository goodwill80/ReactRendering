import FormContainer from './FormContainer';
import DisplayContainer from './DisplayContainer';

function ContentContainer() {
  return (
    <div className="flex flex-col gap-4 border-4 p-24">
      <h5 className="font-bold">Content Container</h5>
      <FormContainer />
      <DisplayContainer />
    </div>
  );
}

export default ContentContainer;
