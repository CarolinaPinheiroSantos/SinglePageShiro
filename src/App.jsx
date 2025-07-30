import './App.css'
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
import team from './assets/team.png'

function App() {
  return (
    <>
    <div className="relative bg-blue w-screen h-[500px]">
      <p className="absolute z-10 text-white font-bold text-4xl px-5 py-10" >Plataforma 5S</p>
      <h1 className="absolute z-10 text-white font-extrabold text-8xl px-5 py-20">SHIRO</h1>
      <p className="absolute z-10 text-white font-extrabold text-3xl px-5 py-40">Seu melhor amigo no 5S!</p>
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

    <section>
      <Carousel/>
    </section>

    <section className="bg-blue p-6 flex flex-col justify-center">
        <h1 className="text-white text-2xl flex justify-center font-bold">O Que dizem nossos usuários:</h1>

        <Feedback
          img={person1}
          name="Heloisa Militão"
          feedback='"Achei muito bom! A plataforma está visualmente organizada e muito limpa. Centralizou todas as necessidades do dia a dia do 5S. Foi muito positiva para a organização. O incentivo com o ranking é ótimo. Amei o Shiro!"'
        />

        <Feedback
          img={person2}
          name="Giovanna Pedro"
          feedback='"Gostei muito, centralizou tudo em uma única plataforma! Facilitou bastante o processo, pois não precisamos ir em cada turma conferir se o 5S foi feito pois tem a visualização dos feedbacks na plataforma e a edição das funções e o CRUD de aprendizes que foi positivo e sem contar o gerador de etiquetas ajudou muito, pois o processo anterior era muito ruim "'
        />

        <Feedback
          img={person3}
          name="Laura Mendes"
          feedback='"A melhor coisa foi que o Shiro automatizou todo o processo antigo. O sorteio é editável, e eu gostei muito do mascote. A plataforma é necessária e esta ajudar muito no 5S"'
        />
    </section>

    <section>
      <h1 className="text-4xl text-blue font-extrabold p-5">Nosso time</h1>
      <img src={team} alt="" />
      <div className='pr-8 text-1xl flex flex-row gap-4 '>
        <p>Alyson Santos</p>
        <p>Gabriel Bosco</p>
        <p>Carolina Pinheiro</p>
        <p>Rafael Macharete</p>
      </div>
    </section>

    </>
  );
}

export default App
