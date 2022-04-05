import SchduleList from "./SchduleList";

function Drawer() {
  return (
    <>
      <div class='drawer sm:drawer-mobile '>
        <input id='my-drawer-2' type='checkbox' class='drawer-toggle' />
        <div class='drawer-content mx-auto'>
          <label
            for='my-drawer-2'
            class='btn btn-primary drawer-button lg:hidden'
          >
            Schdule
          </label>
        </div>
        <div class='drawer-side'>
          <label for='my-drawer-2' class='drawer-overlay'></label>
          <SchduleList />
        </div>
      </div>
    </>
  );
}

export default Drawer;
