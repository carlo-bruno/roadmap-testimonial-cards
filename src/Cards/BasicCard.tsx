import Avatar from "../components/Avatar";

export default function BasicCard() {
  return (
    <div className="max-w-md bg-white border border-gray-200 rounded-xl shadow px-6 py-3">
      <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
        Card
      </h2>
      <div className="mb-3 font-normal text-black text-lg">
        {/* comment */}
        <p>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
      <div className="flex">
        {/* basic user info + avatar */}
        <p className="text-lg text-gray-500">Luis Liara</p>
        <p className="text-md text-gray-500">Software Engineer</p>
        <Avatar />
      </div>
    </div>
  );
}
