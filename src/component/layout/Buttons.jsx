/* This example requires Tailwind CSS v2.0+ */
import { CalendarIcon } from "@heroicons/react/solid";

export default function Buttons() {
  const handleCategory = () => {
    console.log("Testing");
  };
  return (
    <>
      <button
        onClick={handleCategory}
        type='submit'
        className=' inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2'
      >
        <CalendarIcon className='-ml-1 mr-3 h-5 w-5' aria-hidden='true' />
        SCHEDULE
      </button>
    </>
  );
}
