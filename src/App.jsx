import wallpaper from './assets/wallpaper5S.png';
import mascote from './assets/shiro.png';
import Card from './component/Card.jsx'
import icon1 from './assets/iconUtility.png';
import icon2 from './assets/iconOrganization.png';
import icon3 from './assets/iconStandardize.png';
import Carousel from './component/Carousel.jsx'
import Feedback from './component/Feedbacks.jsx';
import person1 from './assets/Heloisa.png';
import person2 from './assets/Giovanna.png';
import person3 from './assets/Laura.png';
import Members from './component/Members.jsx'
import Programmer1 from './assets/Gabriel.png'
import Programmer2 from './assets/Carolina.png'
import Programmer3 from './assets/Rafael.png'
import Programmer4 from './assets/Alyson.png'

function App() {
  return (
    <>
    <div className="relative bg-blue w-screen h-[500px]">
      <p className="absolute z-10 text-white font-bold text-4xl px-5 py-10" >Plataforma 5S</p>
      <h1 className="absolute z-10 text-white font-extrabold text-8xl px-5 py-20">SHIRO</h1>
      <p className="absolute z-10 text-white font-extrabold text-3xl px-5 py-[180px]">Seu melhor amigo no 5S!</p>
      <img src={wallpaper} alt="" className="absolute w-full h-full object-cover"/>
    </div>
    <img src={mascote} alt="" className="absolute w-full max-w-xs bottom-[120px] left-1/2 -translate-x-1/2"/>

    <section className="mt-[305px] mb-[100px]">
      <Card
        img={icon1}
        title="Eficiência"
        text="Tarefas como sorteios de funções e geração de etiquetas, tornando os processos mais rápidos e eficientes."
      />

      <Card
        img={icon2}
        title="Engajamento"
        text="Rankings entre turmas e sorteios interativos para incentivar a participação ativa dos aprendizes, tornando o 5S mais dinâmico e motivador."
      />

      <Card
        img={icon3}
        title="Gestão"
        text="Instrutores contam com histórico de avaliações e gerenciamento de turmas e ambientes, que facilitam o acompanhamento e monitoramento."
      />
    </section>

    <section className="mb-[100px]">
      <Carousel/>
    </section>

    <section className="bg-blue p-6 flex flex-col items-center gap-6">
        <h1 className="text-white text-[1.25rem] md:text-[2rem] flex justify-center font-bold">O QUE DIZEM NOSSOS USUÁRIOS:</h1>

        <Feedback
          img={person1}
          name="Heloisa Militão"
          role="Aprendiz"
          feedback='"Achei muito bom! A plataforma está visualmente organizada e muito limpa. Centralizou todas as necessidades do dia a dia do 5S. Foi muito positiva para a organização. O incentivo com o ranking é ótimo. Amei o Shiro!"'
        />

        <Feedback
          img={person2}
          name="Giovanna Pedro"
          role="Meio oficial"
          feedback='"Gostei muito, centralizou tudo em uma única plataforma! Facilitou o processo, pois não precisamos ir em cada turma conferir se o 5S foi feito pois tem a visualização dos feedbacks na plataforma e a edição das funções e o CRUD de aprendizes que foi positivo e sem contar o gerador de etiquetas ajudou muito!"'
        />

        <Feedback
          img={person3}
          name="Laura Mendes"
          role="Aprendiz"
          feedback='"A melhor coisa foi que o Shiro automatizou todo o processo antigo. O sorteio é editável, e eu gostei muito do mascote. A plataforma é necessária e esta ajudar muito no 5S"'
        />
    </section>

    <section className="mt-16">
      <h2 className="text-[40px] font-bold text-center bg-blueGradient bg-clip-text text-transparent mb-12">TIME DO 5S</h2>

      <div className="flex flex-row justify-center gap-6">

        <Members imgProgrammer={Programmer1} nameProgrammer="Gabriel Bosco" role="Full-stack" />
        <Members imgProgrammer={Programmer2} nameProgrammer="Carolina Pinheiro" role="UI/UX" />

      </div>
    </section>

    <section className="mt-16">

      <div className="flex flex-row justify-center gap-6">

        <Members imgProgrammer={Programmer3} nameProgrammer="Rafael Macharete" role="Full-stack" />
        <Members imgProgrammer={Programmer4} nameProgrammer="Alyson Pereira" role="Back-end" />

      </div>
    </section>


    </>
  );
}

export default App
