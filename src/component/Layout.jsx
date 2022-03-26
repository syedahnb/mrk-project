import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import Drawer from "./layout/Drawer";
import Left from "./layout/Left";
import Main from "./layout/Main";
import Chat from "./layout/Chat";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Layout() {
  return (
    <>
      {/* Background color split screen for large screens */}

      <div className='flex-grow w-full mx-auto xl:px-8 lg:flex'>
        {/* Left sidebar & main wrapper */}
        <div className='flex-1 min-w-0 bg-white xl:flex '>
          <div className='border-b border-gray-200 xl:border-b-0 xl:flex-shrink-0 xl:w-64 xl:border-r xl:border-gray-200 bg-white'>
            <div className='h-full pl-4 pr-6 py-6 sm:pl-6 lg:pl-8 xl:pl-0'>
              {/* Start left column area */}
              <Left />

              {/* End left column area */}
            </div>
          </div>

          <div className='bg-white lg:min-w-0 lg:flex-1'>
            <div className='h-full py-6 px-4 sm:px-6 lg:px-8'>
              {/* Start main area*/}
              <Main />

              {/* End main area */}
            </div>
          </div>
        </div>

        <div className='bg-gray-50 pr-4 sm:pr-6 lg:pr-8 lg:flex-shrink-0 lg:border-l lg:border-gray-200 xl:pr-0'>
          <div className='h-full pl-6 py-6 lg:w-80'>
            {/* Start right column area */}
            <div className='h-full relative' style={{ minHeight: "16rem" }}>
              <div className='absolute inset-0 border-2 border-gray-200 border-dashed rounded-lg'>
                {Chat}
              </div>
            </div>
            {/* End right column area */}
          </div>
        </div>
      </div>
    </>
  );
}
