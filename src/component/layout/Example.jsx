import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { MenuAlt1Icon, XIcon } from "@heroicons/react/outline";
import Logo from "../../assets/logo-front.png";
import SlideOvers from "./SlideOvers";
import CategoryList from "./CategoryList";
import Buttons from "./Buttons";
import TablesSch from "./TablesSch";
import Chat from "./Chat";
import Timezone from "./Timezone";
import Navbar from "./Navbar";
import Content from "./Content";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <>
      {/* Background color split screen for large screens */}
      <div
        className='fixed top-0 left-0 h-full w-1/2 bg-white'
        aria-hidden='true'
      />
      <div
        className='fixed top-0 right-0 h-full w-1/2 bg-gray-50'
        aria-hidden='true'
      />
      <div className='relative flex min-h-screen flex-col'>
        {/* Navbar */}
        <Navbar />

        {/* 3 column wrapper */}
        <div className='mx-auto w-full max-w-7xl flex-grow lg:flex xl:px-8'>
          {/* Left sidebar & main wrapper */}
          <div className='min-w-0 flex-1 bg-white xl:flex'>
            <div className='border-b border-gray-200 bg-white xl:w-64 xl:flex-shrink-0 xl:border-b-0 xl:border-r xl:border-gray-200'>
              <div className=' py-6 pl-4 pr-6 sm:pl-6 lg:pl-8 xl:pl-0'>
                {/* Start left column area */}
                <div className='relative h-full' style={{ minHeight: "5rem" }}>
                  <div className=' rounded-lg border-2 border-dashed border-gray-200'>
                    <div className='mx-auto sm:block  sm:flex sm:justify-center sm:justify-items-center  sm:space-y-5 md:hidden lg:hidden'>
                      <Buttons />
                    </div>
                    <div className='  sm:hidden md:block lg:block'>
                      <CategoryList />
                    </div>
                  </div>
                </div>
                {/* End left column area */}
              </div>
            </div>

            <div className='bg-white lg:min-w-0 lg:flex-1'>
              <div className='  py-6 px-0'>
                {/* Start main area*/}
                <div className='relative h-full' style={{ minHeight: "36rem" }}>
                  <Timezone />

                  <div className='rounded-lg border-2 border-dashed border-gray-200'>
                    <div className=' sm:block md:block lg:block'>
                      <TablesSch />
                    </div>
                    <div className='relative'>
                      <Content />
                    </div>
                  </div>
                </div>
                {/* End main area */}
              </div>
            </div>
          </div>

          <div className=' bg-gray-50 pr-4 sm:pr-6 lg:flex-shrink-0 lg:border-l lg:border-gray-200 lg:pr-8 xl:pr-0'>
            <div className='h-full py-6 pl-6 lg:w-80'>
              {/* Start right column area */}
              <div className='relative h-full' style={{ minHeight: "16rem" }}>
                <div className='rounded-lg border-2 border-dashed border-gray-200'>
                  <div className='  '>
                    <Buttons />
                  </div>
                  <div className='  sm:hidden md:block lg:block'>
                    <CategoryList />
                    <Chat />
                  </div>
                </div>
              </div>
              {/* End right column area */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
