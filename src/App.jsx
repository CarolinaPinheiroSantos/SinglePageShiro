import wallpaper from './assets/wallpaper5S.png';
import zoomWallpaper from './assets/zoomWallpaper5S.png'
import zoomMascote from './assets/shiroZoom.png'
import shiroSreens from './assets/shiroScreens.png'
import mascote from './assets/Shiro.png';
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
import Orbiting5S from './component/Orbiting5S.jsx';
import S1 from './assets/botaoUtilizacao.png';
import S2 from './assets/botaoPadronizacao.png';
import S3 from './assets/botaoLimpeza.png';
import S4 from './assets/botaoDisciplina.png';
import S5 from './assets/botaoOrganizacao.png';
import medalCenter from './assets/medalha.png';

function App() {
  return (
    <>
    <div className="relative bg-blue w-screen h-[500px] lg:h-[700px]">
      <div>
        <p className="absolute z-10 text-white font-bold text-4xl lg:text-[3.5rem] px-5 py-10 lg:py-[20rem]">Plataforma 5S
        </p>

        <h1 className="absolute z-10 text-white font-extrabold text-8xl lg:text-[12rem] px-5 py-20 lg:py-[350px]">SHIRO
        </h1>

        <p className="absolute z-10 text-white font-extrabold text-[1.5rem] lg:text-[4rem] lg:py-[550px] px-5 py-[180px]">Seu melhor amigo no 5S!
        </p>
      </div>

      <img
        src={wallpaper}
        alt=""
        className="absolute w-full h-full object-cover lg:object-contain lg:hidden"
      />

      <img
        src={zoomWallpaper}
        alt=""
        className="hidden lg:block absolute w-full h-full object-cover"
      />
      <img
        src={mascote}
        alt=""
        className="absolute w-full max-w-xs -bottom-60 left-1/2 -translate-x-1/2 lg:hidden "
      />

      <img
        src={zoomMascote}
        alt=""
        className="hidden lg:block absolute right-0 bottom-0 scale-[0.5] origin-bottom-right lg:flex items-end"
      />
    </div>


    {/* Só desktoop */}
    <div className="hidden lg:flex flex-col items-center justify-center px-16 py-15 bg-white gap-10">
      <div className="w-full px-[4rem] pt-[12rem]">
        <h2 className="text-[3.5rem] text-center font-bold bg-blueGradient bg-clip-text text-transparent mb-4">
          Eficiência, engajamento e gestão com a Plataforma 5S
        </h2>
        <p className="text-lg text-gray-700 text-center px-[14rem]">
          Descubra como a Plataforma 5S ajuda você a ganhar tempo, motivar os aprendizes e manter tudo organizado com poucos cliques! E nosso mascote é o Shiro, nosso urso polar escoteiro perfeito para representar o 5S! Seus distintivos simbolizam cada "S" da metodologia, nós guiando rumo à organização, disciplina, padronização, limpeza e melhoria contínua.
        </p>
      </div>

      <img
        src={shiroSreens}
        alt= ""
        className="w-[90%] h-[90%] object-contain"
      />
    </div>


    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:mt-[200px] mt-[305px] mb-[30px]">
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

    <section>
      <Carousel/>
    </section>

    <section className="bg-blue px-4 sm:px-6 py-12 flex flex-col items-center gap-6 overflow-x-hidden">
      <h1 className="text-white text-[1.4rem] md:text-[2rem] lg:text-[2.5rem] flex justify-center font-bold">
        O QUE DIZEM NOSSOS USUÁRIOS:
      </h1>

      <div className="mt-10 mb-[100px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
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

        <div className="md:col-span-2 md:flex md:justify-center lg:col-span-1 lg:justify-normal">
          <Feedback
            img={person3}
            name="Laura Mendes"
            role="Aprendiz"
            feedback='"A melhor coisa foi que o Shiro automatizou todo o processo antigo. O sorteio é editável, e eu gostei muito do mascote. A plataforma é necessária e está ajudando muito no 5S"'
          />
        </div>
      </div>
    </section>



    <section className="mt-16">
      <h2 className="text-[3rem] lg:text-[5rem] font-bold text-center lg:text-left lg:pl-[14rem]  bg-blueGradient bg-clip-text text-transparent mb-12">TIME DO 5S</h2>

      <div className="flex flex-row justify-center gap-6">

        <Members imgProgrammer={Programmer1} nameProgrammer="Gabriel Bosco" role="Full-stack" />
        <Members imgProgrammer={Programmer2} nameProgrammer="Carolina Pinheiro" role="UI/UX" />

      </div>
    </section>

    <section className="mt-16">
      <div className="flex flex-row justify-center gap-6">
        <Members imgProgrammer={Programmer3} nameProgrammer="Rafael Silva" role="Back-end" />
        <Members imgProgrammer={Programmer4} nameProgrammer="Alyson Pereira" role="Front-end" />
      </div>
    </section>

    <section className="bg-blue px-6 py-12 flex items-center gap-6 mt-14">
      <Orbiting5S
        centerImg={medalCenter}
        surroundingImgs={[S1, S2, S3, S4, S5]}
      />
    </section>
    </>
  );
}

export default App
