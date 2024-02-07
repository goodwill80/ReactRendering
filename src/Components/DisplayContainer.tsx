import Display from './Display';

function DisplayContainer() {
  return (
    <div className="border-2 p-8">
      <h5 className="font-semibold">Display Container</h5>
      <Display value="first" />
      <Display value="last" />
    </div>
  );
}

export default DisplayContainer;
