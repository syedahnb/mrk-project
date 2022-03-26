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
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 3,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 4,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 5,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 6,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 7,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 8,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 9,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 10,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 11,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 12,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
  {
    id: 13,
    image: "https://v2.crichd.tv/assets/uploads/categories/1.png",
    date: "Today",
    time: "05:00",
    comp: "International Cricket",
    title: "ICC Women's Cricket World Cup",
    live: "https://crichd.tv/icc-women-cricket-world-cup-live-streaming",
    status: 1,
  },
];
function DaisyTables() {
  return (
    <>
      <div class='overflow-x-auto w-full'>
        <table class='table w-full text-center'>
          <thead>
            <tr>
              <th>Date & Time</th>
              <th>Event Details</th>
              <th>Live</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {Schdules.map((schdule) => (
              <tr key={schdule.id}>
                <td>
                  {schdule.date}
                  <br />
                  <span class='badge badge-ghost badge-sm'>{schdule.time}</span>
                </td>
                <td>
                  <div class='flex items-center space-x-3'>
                    <div class='avatar'>
                      <div class='mask mask-squircle w-12 h-12'>
                        <img
                          src={schdule.image}
                          alt='Avatar Tailwind CSS Component'
                        />
                      </div>
                    </div>
                    <div>
                      <div class='font-bold'>{schdule.title}</div>
                      <div class='text-sm opacity-50'>{schdule.comp}</div>
                    </div>
                  </div>
                </td>

                <td>
                  <a href={schdule.live}>Live</a>
                </td>
                <th>
                  <button class='btn btn-ghost btn-xs'>Active</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default DaisyTables;
