import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { SearchIcon } from "@heroicons/react/solid";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";

import logo from "../../assets/logo-front.png";

const menu = [
  {
    name: "All Categories",
    imageUrl: "https://v2.crichd.tv/assets/images/home.png",
  },
  {
    name: "Cricket",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/1.png",
  },
  {
    name: "Football",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/2.png",
  },
  {
    name: "Snooker",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/3.jpg",
  },
  {
    name: "Afootball",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/4.jpg",
  },
  {
    name: "Tennis",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/5.png",
  },
  {
    name: "Motors",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/6.gif",
  },
  {
    name: "Rugby",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/7.jpg",
  },
  {
    name: "Basketball",
    imageUrl: "https://v2.crichd.tv/assets/uploads/categories/8.jpg",
  },

  {
    name: "Other Categories",
    imageUrl: "https://v2.crichd.tv/assets/images/others.png",
  },
];

const user = {
  name: "Tom Cook",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as='header' className='bg-gray-800'>
      {({ open }) => (
        <>
          <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8'>
            <div className='relative h-16 flex justify-between'>
              <div className='relative z-10 px-2 flex lg:px-0'>
                <div className='flex-shrink-0 flex items-center'>
                  <img
                    className='block h-16 w-auto'
                    src={logo}
                    alt='Workflow'
                  />
                </div>
              </div>

              <div className='relative z-10 flex items-center lg:hidden'>
                {/* Mobile menu button */}
                <Disclosure.Button className='rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'>
                  <span className='sr-only'>Open menu</span>
                  {open ? (
                    <XIcon className='block h-6 w-6' aria-hidden='true' />
                  ) : (
                    <MenuIcon className='block h-6 w-6' aria-hidden='true' />
                  )}
                </Disclosure.Button>
              </div>
            </div>
            <nav
              className='hidden lg:py-2 lg:flex lg:flex-wrap lg:space-x-8'
              aria-label='Global'
            >
              {menu.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "flex flex-col space-x-4 text-gray-300 hover:bg-gray-700 hover:text-white",
                    "rounded-md py-2 px-3 inline-flex items-center text-sm font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  <img
                    src={item.imageUrl}
                    className=' pr-1 w-8 h-8 shadow-lg object-cover'
                    alt=''
                  />
                  {item.name}
                </a>
              ))}
            </nav>
          </div>

          <Disclosure.Panel as='nav' className='lg:hidden' aria-label='Global'>
            <div className='border-t h-[100vh]  pt-4 pb-3 pl-8'>
              {menu.map((item) => (
                <>
                  <div className='p-3  flex items-center'>
                    <div key={item.name} className='flex-shrink-0'>
                      <img
                        className='h-10 w-10 rounded-full'
                        src={item.imageUrl}
                        alt=''
                      />
                    </div>

                    <div className='ml-3'>
                      <div className='text-base font-medium text-white'>
                        {item.name}
                      </div>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
