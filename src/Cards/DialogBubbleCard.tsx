import Avatar from "../components/Avatar";

export default function DialogBubbleCard() {
  return (
    <div className="max-w-lg bg-white border border-gray-200 rounded-xl shadow px-8 py-4 grid grid-cols-4">
      <div className="w-3/4 justify-start flex flex-col py-4">
        <Avatar />
        <div className="flex flex-col justify-start">
          <p className="text-md text-gray-500">Luis Liara</p>
          <p className="text-sm text-gray-500">Software Engineer</p>
        </div>
      </div>
      <div
        className=" font-normal text-white text-lg bg-black rounded-2xl p-4 rounded-tl-none col-span-3 relative
      before:block before:absolute before:-inset-x-3 before:-inset-y-0
      before:w-0 before:h-0
      before:border-t-[14px] before:border-t-black
      before:border-l-[14px] before:border-l-transparent
      before:rounded-tl-sm
      "
      >
        <p className="text-left">
          Example of a dialog comment. Inspired by a chat message bubble. Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Nulla, earum ipsam
          excepturi impedit vitae quisquam corrupti sed sequi necessitatibus
          explicabo natus!
        </p>
      </div>
    </div>
  );
}
