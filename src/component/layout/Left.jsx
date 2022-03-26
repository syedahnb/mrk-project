import Drawer from "./Drawer";

function Left() {
  return (
    <>
      <div className='h-full  relative z-[999] ' style={{ minHeight: "4rem" }}>
        <Drawer />
      </div>
    </>
  );
}

export default Left;
