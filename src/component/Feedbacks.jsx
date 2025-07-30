import { div } from "framer-motion/client"

function Feedback({ img, name, feedback }) {

  return (
    <section
      className="px-5 py-6 m-6 w-[300px] flex flex-col justify-center items-center gap-4 border rounded-lg overflow-hidden bg-white"
    >
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-16 h-16 rounded-full object-cover" />
        <h2 className="text-lg font-semibold text-darkBlue">{name}</h2>
      </div>

      <p className="text-center text-gray-700 px-2">{feedback}</p>
    </section>
  );
}

export default Feedback;
