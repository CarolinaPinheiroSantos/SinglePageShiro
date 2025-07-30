import { div } from "framer-motion/client";

function Members({ img, name, role }) {
  return (
    <section
      className="px-5 py-6 m-6 w-[300px] flex flex-col justify-center items-center gap-4 border rounded-lg overflow-hidden bg-white"
    >
      <div className="flex flex-col items-center gap-2">
        <img
          src={img}
          alt={name}
          className="w-[100px] h-[100px] rounded-full object-cover"
        />
        <h2 className="text-lg font-semibold text-darkBlue">{name}</h2>
        <h4 className="text-base text-darkBlue">{role}</h4>
      </div>
    </section>
  );
}

export default Members;

