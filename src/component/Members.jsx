    import 'bootstrap-icons/font/bootstrap-icons.css';

function Members({ imgProgrammer, nameProgrammer, role, linkLinkedIn, linkGitHub}) {
  return (
    <section
      style={{ boxShadow: "2px 2px 50px #DCDCDC" }}
      className="relative lg:pt-28 pt-[5rem] pb-8 px-6 mx-4 my-6 w-full max-w-md sm:max-w-lg md:max-w-xl flex flex-col justify-start items-center gap-2 border rounded-2xl bg-white"
    >
      <div className="absolute -top-20 w-[160px] h-[160px] sm:w-[180px] sm:h-[180px] md:w-[200px] md:h-[200px] rounded-full bg-blueGradient p-[5px] shadow-md">
        <img
          src={imgProgrammer}
          alt={nameProgrammer}
          className="w-full h-full rounded-full object-cover"
        />
      </div>

      <h2 className="text-2xl font-bold text-darkBlue mt-6 text-center">{nameProgrammer}</h2>
      <h2 className="text-lg text-darkBlue text-center">{role}</h2>
      <ul className="mt-4 flex justify-center gap-6 list-none p-0">
        {linkLinkedIn && (
          <li>
            <a href={linkLinkedIn} target="_blank" rel="noopener noreferrer" className="text-sm text-blue-600 hover:underline flex items-center gap-1">
              <i class="bi bi-linkedin lg:text-3xl"></i>
            </a>
          </li>
        )}
        {linkGitHub && (
          <li>
            <a href={linkGitHub} target="_blank" rel="noopener noreferrer" className="text-sm text-gray-800 hover:underline flex items-center gap-1">
              <i class="bi bi-github lg:text-3xl"></i>
            </a>
          </li>
        )}
      </ul>
    </section>


  );
}

export default Members;
