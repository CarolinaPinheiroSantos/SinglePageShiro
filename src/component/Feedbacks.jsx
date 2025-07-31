function Feedback({ img, name, role, feedback }) {
  return (
    <section className="w-full p-4 sm:p-6 flex flex-col justify-center items-center gap-4 border rounded-lg bg-white shadow">
      <div className="flex items-center gap-4 w-full">
        <img
          src={img}
          alt={name}
          className="w-[70px] h-[70px] sm:w-[100px] sm:h-[100px] rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h2 className="text-base sm:text-lg font-semibold text-darkBlue">{name}</h2>
          <h4 className="text-sm text-gray-600">{role}</h4>
        </div>
      </div>
      <p className="text-sm sm:text-base text-gray-700 text-center px-1 sm:px-2">{feedback}</p>
    </section>
  );
}

export default Feedback;

