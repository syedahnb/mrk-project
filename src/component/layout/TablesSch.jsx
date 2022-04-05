import moment from "moment";
import { MomentTimezone } from "moment-timezone";

const Schdules = [
  {
    id: 1,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 2,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "IPL T20 - 2022",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 3,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "South Africa vs Bangladesh Test",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 4,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "New Zealand vs Netherlands",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 5,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "	Sunrisers Hyderabad vs Lucknow Super Giants",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 6,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "Hellas Verona vs Genoa",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 7,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "AC Milan vs Bologna",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 8,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "Crystal Palace vs Arsenal",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 9,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "Real Sociedad vs Espanyol",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 10,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "Rajasthan Royals vs Royal Challengers Bangalore",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 11,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "Pakistan vs Australia T20",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
];

export default function TablesSch() {
  var UTC = moment.utc();
  console.log(UTC.format("HH:mm")); // UTC time

  var cLocal = UTC.local("HH:mm");
  console.log(cLocal.format("HH:mm")); // Convert UTC time

  var local = moment();
  console.log(local.format());

  const guess = moment.utc(UTC).tz(moment.tz.guess());
  const correctTimezone = guess.format();
  return (
    <div className='flex flex-col'>
      <div className='overflow-x-auto '>
        <div className='inline-block  py-2 px-2'>
          <div className='overflow-x-auto'>
            <table className=' divide-gray-300" min-w-full table-auto divide-y'>
              <thead className='border-b'>
                <tr>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-medium text-gray-900'
                  >
                    #
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-medium text-gray-900'
                  >
                    Date
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-medium text-gray-900'
                  >
                    Time
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-medium text-gray-900'
                  >
                    Comp
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-medium text-gray-900'
                  >
                    Title
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-medium text-gray-900'
                  >
                    Live
                  </th>
                  <th
                    scope='col'
                    className='px-6 py-4 text-left text-sm font-medium text-gray-900'
                  >
                    Sts
                  </th>
                </tr>
              </thead>
              <tbody>
                {Schdules.map((schdule) => (
                  <tr className='border-b text-center text-sm' key={schdule.id}>
                    <td>
                      {" "}
                      <img
                        className='h-10 w-10 rounded-full shadow'
                        src={schdule.image}
                        alt=''
                      />
                    </td>
                    <td className=' px-6 py-4 text-sm font-light text-gray-900'>
                      {" "}
                      {schdule.date}
                    </td>
                    <td className=' px-6 py-4 text-sm font-light text-gray-900'>
                      {" "}
                      {moment("05:00").tz("America/New_York").format("HH:mm")}
                    </td>
                    <td className=' px-6 py-4 text-sm font-light text-gray-900'>
                      {" "}
                      {schdule.comp}
                    </td>
                    <td className=' px-6 py-4 text-sm font-light text-gray-900'>
                      {" "}
                      {schdule.title}
                    </td>
                    <td className=' px-6 py-4 text-sm font-light text-gray-900'>
                      {" "}
                      <a href={schdule.live}>Watch</a>
                    </td>
                    <td className=' px-6 py-4 text-sm font-light text-gray-900'>
                      {" "}
                      <a href={schdule.live}>Live</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
