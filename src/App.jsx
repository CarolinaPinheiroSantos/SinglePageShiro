import './App.css'
import wallpaper from './assets/wallpaper5S.png';
import mascote from './assets/shiro.png';

function App() {
  return (
    <>
    <div className="relative bg-blue w-screen h-[500px]">
      <p className="absolute text-white font-bold text-2xl px-5 py-4" >Plataforma 5S</p>
      <h1 className="absolute text-white font-extrabold text-7xl px-5 py-10">SHIRO</h1>
      <p className="absolute text-white font-extrabold text-3xl px-5 py-40">Seu melhor amigo no 5S!</p>
      <img src={wallpaper} alt="" className="absolute w-full h-full"/>
    </div>
    <img src={mascote} alt="" className="absolute w-[600px] h-[490px] bottom-[150px] left-1/2 -translate-x-1/2"/>
    </>
  );
}

export default App
