const items = [
  { id: 1, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/1.png" },
  { id: 2, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/2.png" },
  { id: 3, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/3.png" },
  { id: 4, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/4.png" },
  { id: 5, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/5.png" },
  { id: 6, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/6.png" },
  { id: 7, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/7.png" },
  { id: 8, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/8.png" },
  { id: 9, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/9.png" },
  { id: 10, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/10.png" },
  { id: 11, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/11.png" },
  { id: 12, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/12.png" },
  { id: 13, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/13.png" },
  { id: 14, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/14.png" },
  { id: 15, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/15.png" },
  { id: 16, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/16.png" },
  { id: 17, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/17.png" },
  { id: 18, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/18.png" },
  { id: 19, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/19.png" },
  { id: 20, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/20.png" },
  { id: 21, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/21.png" },
  { id: 22, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/22.png" },
  { id: 23, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/23.png" },
  { id: 24, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/24.png" },
  { id: 25, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/25.png" },
  { id: 26, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/26.png" },
  { id: 27, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/27.png" },
  { id: 28, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/28.png" },
  { id: 29, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/29.png" },
  { id: 30, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/30.png" },
  { id: 31, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/31.png" },
  { id: 32, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/32.png" },
  { id: 33, imageUrl: "https://v2.crichd.tv/assets/uploads/channels/33.png" },
];

export default function SchduleList() {
  return (
    <ul class='menu p-4 overflow-y-auto w-60 md:w-80 bg-base-100 text-base-content'>
      {items.map((item) => (
        <li key={item.id} className='px-4 py-4 sm:px-0'>
          <img
            src={item.imageUrl}
            className='object-cover w-48 shadow-lg'
            alt={item.id}
          />
        </li>
      ))}
    </ul>
  );
}
