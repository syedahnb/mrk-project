import Content from "./Content";
import DaisyTables from "./DaisyTables";

function Main() {
  return (
    <>
      <div className='relative h-full' style={{ minHeight: "36rem" }}>
        <div className='absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg'>
          <DaisyTables />
        </div>
      </div>
      <div className='relative h-full' style={{ minHeight: "36rem" }}>
        <div className='absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg'>
          <Content />
        </div>
      </div>
    </>
  );
}

export default Main;
