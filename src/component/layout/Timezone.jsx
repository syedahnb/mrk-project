/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

import moment from "moment";
import { MomentTimezone } from "moment-timezone";

const people = [
  { id: 1, name: "Wade Cooper" },
  { id: 2, name: "Arlene Mccoy" },
  { id: 3, name: "Devon Webb" },
  { id: 4, name: "Tom Cook" },
  { id: 5, name: "Tanya Fox" },
  { id: 6, name: "Hellen Schmidt" },
  { id: 7, name: "Caroline Schultz" },
  { id: 8, name: "Mason Heaney" },
  { id: 9, name: "Claudie Smitham" },
  { id: 10, name: "Emil Schaefer" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Timezone() {
  const currentUserTimezone = moment.tz.guess();
  const gmtOffset = `GMT${moment.tz(currentUserTimezone).format("Z")}`;
  const abbr = moment.tz(currentUserTimezone).format("z");
  const [selected, setSelected] = useState(`(${gmtOffset}) ${abbr}`);

  const tzOptions = moment.tz
    .names()
    .map((name) => {
      const now = Date.now();
      const zone = moment.tz.zone(name);
      return { name, offset: zone !== null ? zone.utcOffset(now) : 0 };
    })
    .sort((a, b) =>
      a.offset === b.offset ? a.name.localeCompare(b.name) : b.offset - a.offset
    )
    .map((zone, index) => {
      const gmtOffset = `GMT${moment.tz(zone.name).format("Z")}`;
      const abbr = moment.tz(zone.name).format("z");
      return {
        id: index,
        value: zone.name,
        label: `(${gmtOffset}) ${zone.name} - ${abbr}`,
      };
    });

  return (
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <>
          <div className='w-full px-2 '>
            <div className='mb-6 md:flex md:items-center'>
              <div className='md:w-1/3'>
                <label
                  className='mb-1 block pr-4 font-bold text-gray-500 md:mb-0 md:text-right'
                  htmlFor='inline-full-name'
                >
                  Change Timezone:
                </label>
              </div>

              <div className='md:w-1/2'>
                <div className='relative mt-1'>
                  <Listbox.Button className='relative w-full cursor-default rounded-md border border-gray-300 bg-white py-2 pl-3 pr-10 text-left shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm'>
                    <span className='block truncate'>{selected}</span>
                    <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2'>
                      <SelectorIcon
                        className='h-5 w-5 text-gray-400'
                        aria-hidden='true'
                      />
                    </span>
                  </Listbox.Button>

                  <Transition
                    show={open}
                    as={Fragment}
                    leave='transition ease-in duration-100'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                  >
                    <Listbox.Options className='absolute z-10 mt-1 max-h-60  w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
                      {tzOptions.map((timezone, index) => (
                        <Listbox.Option
                          key={index}
                          className={({ active }) =>
                            classNames(
                              active
                                ? "bg-indigo-600 text-white"
                                : "text-gray-900",
                              "relative cursor-default select-none py-2 pl-3 pr-9"
                            )
                          }
                          value={timezone.label}
                        >
                          {({ selected, active }) => (
                            <>
                              <span
                                className={classNames(
                                  selected ? "font-semibold" : "font-normal",
                                  "block truncate"
                                )}
                              >
                                {timezone.label}
                              </span>

                              {selected ? (
                                <span
                                  className={classNames(
                                    active ? "text-white" : "text-indigo-600",
                                    "absolute inset-y-0 right-0 flex items-center pr-4"
                                  )}
                                >
                                  <CheckIcon
                                    className='h-5 w-5'
                                    aria-hidden='true'
                                  />
                                </span>
                              ) : null}
                            </>
                          )}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </Transition>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </Listbox>
  );
}
