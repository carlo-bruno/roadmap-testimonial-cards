import Avatar from "../components/Avatar";

export default function DialogBubbleCardV2() {
  return (
    <div
      className="max-w-lg bg-white border border-gray-200 rounded-xl shadow px-8 py-4 text-left align-center
                  grid grid-cols-[112px_1fr] grid-rows-[minmax(25px,max-content)_auto]"
    >
      <div className="col-start-1 row-start-1 row-span-2">
        <Avatar />
      </div>
      <div className="max-w-xs whitespace-wrap h-min">
        <span className="text-md text-gray-500 font-bold self-end">
          Jardani Jovanovich
        </span>
        <span className="text-sm font-normal text-gray-500 pl-2 text-balance">
          Senior Staff Software Engineer IV at The Continental, New York
        </span>
      </div>

      <div
        className="font-normal text-white text-lg bg-black rounded-2xl px-4 py-2 rounded-tl-none col-start-2 relative
                    h-min m-1
                    before:absolute before:-inset-x-3 before:-inset-y-0
                    before:block before:w-0 before:h-0
                    before:border-t-[14px] before:border-t-black
                    before:border-l-[14px] before:border-l-transparent
                    before:rounded-tl-sm"
      >
        <p className="text-left">
          Example of dialog comment V2. Inspired by a chat message bubble.
          Commenter name displayed above bubble.
        </p>
      </div>
    </div>
  );
}
