import Elevadores from "../assets/Icons/Elevadores.png";
import Cameras from "../assets/Icons/CCTV.png";
import Sustentabilidade from "../assets/Icons/Sustentabilidade.png";
import Wifi from "../assets/Icons/Wifi.png";
export function UsefulSlugIconSection (){
  return (
    <main className="flex items-center justify-between w-[60%]">
    <article className="flex flex-col gap-4 items-center">
      <img  className="max-w-[110px]" src={Elevadores} alt="Icone que demonstra os elevadores na construção" />
      <p>Frase sobre Tecnologia</p>
    </article>  
    <article className="flex flex-col gap-4 items-center">
      <img  className="max-w-[110px]" src={Cameras} alt="Icone que demonstra a segurança" />
      <p>Frase sobre Segurança</p>
    </article> 
    <article className="flex flex-col gap-4 items-center">
      <img  className="max-w-[110px]" src={Sustentabilidade} alt="Icone que demonstra como a sustentabilidade é tratada" />
      <p>Frase sobre Sustentablidade</p>
    </article>
    <article className="flex flex-col gap-4 items-center">
      <img className="max-w-[110px]" src={Wifi} alt="Icone que demonstra a conectitividade com wifi" />
      <p>Frase sobre WiFi</p>
    </article>
  </main>
  );
}