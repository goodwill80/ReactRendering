import TextInput from './TextInput';

function FormContainer() {
  return (
    <div className="border-2 p-8">
      <h5 className="font-semibold">FormContainer</h5>
      <TextInput value="first" />
      <TextInput value="last" />
    </div>
  );
}

export default FormContainer;
