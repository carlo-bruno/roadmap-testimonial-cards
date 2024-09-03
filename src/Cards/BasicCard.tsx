import Avatar from "../components/Avatar";

export default function BasicCard() {
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow px-8 py-4">
      {/* comment */}
      <div className="mb-3 font-normal text-black text-lg">
        <p className="text-left">
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Nulla, earum ipsam excepturi impedit vitae quisquam
          corrupti sed sequi necessitatibus explicabo natus!
        </p>
      </div>
      {/* basic user info + avatar */}
      <div className="flex flex-column w-3/4 m-auto justify-around">
        <div className="flex flex-col justify-center">
          <p className="text-lg text-gray-500">Luis Liara</p>
          <p className="text-md text-gray-500">Software Engineer</p>
        </div>
        <Avatar />
      </div>
    </div>
  );
}
