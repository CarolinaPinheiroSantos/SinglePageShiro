function Members({ imgProgrammer, nameProgrammer, role }) {
  return (
    <section
      style={{ boxShadow: "2px 2px 50px #DCDCDC" }}
      className="relative pt-20 pb-6 px-5 mx-3 my-4 w-[200px] h-[170px] flex flex-col justify-start items-center gap-1 border rounded-lg bg-white"
    >
    <div className="absolute -top-12 w-[138px] h-[138px] rounded-full bg-blueGradient p-[4px] shadow-md">
      <img
        src={imgProgrammer}
        alt={nameProgrammer}
        className="w-full h-full rounded-full object-cover"
      />
    </div>


      <h2 className="text-lg font-bold text-darkBlue mt-4 text-[14.8px]">{nameProgrammer}</h2>
      <h4 className="text-base text-darkBlue">{role}</h4>
    </section>
  );
}

export default Members;
