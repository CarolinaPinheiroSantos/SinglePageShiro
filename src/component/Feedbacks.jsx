function Feedback({ img, name, role, feedback }) {
  return (
    <section className="w-full max-w-md p-5 py-6 m-4 flex flex-col justify-center items-center gap-4 border rounded-lg overflow-hidden bg-white shadow">
      <div className="flex items-center gap-4">
        <img src={img} alt={name} className="w-[100px] h-[100px] rounded-full object-cover" />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-darkBlue">{name}</h2>
          <h4 className="text-sm text-gray-600">{role}</h4>
        </div>
      </div>
      <p className="text-center text-gray-700 px-2">{feedback}</p>
    </section>
  );
}

export default Feedback;

