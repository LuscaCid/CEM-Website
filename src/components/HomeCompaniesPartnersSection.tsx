import a from "../assets/HomePlaces/Centro-Convencoes 1.png";
import b from "../assets/HomePlaces/Clinica-Estetica 1.png";
import c from "../assets/HomePlaces/Estacionamento 1.png";
import d from "../assets/HomePlaces/Estetica-Automotiva 1.png";
import e from "../assets/HomePlaces/ExataFit 1.png";
import f from "../assets/HomePlaces/Foto (3).png";
import g from "../assets/HomePlaces/Taxi 1.png";
import { CompanyCard } from "./CompanyCard";
const imgsArr = [
  {
    img : a,
    title : "Salão Beleza",
    subTitle : "Estética e Beleza"
  },
  {
    img : b,
    title : "CLÍNICA DE ESTÉTICA",
    subTitle : "Estética e Beleza"
  },
  {
    img : c,
    title : "Estacionamento",
    subTitle : "Estética e Beleza"
  },
  {
    img : d,
    title : "Estetica Automotiva",
    subTitle : "Estética e Beleza"
  },
  {
   img : e,
    title : "ACADEMIA",
    subTitle : "Estética e Beleza"
  },
  {
    img : f,
    title : "Foto",
    subTitle : "Estética e Beleza"
  },
  {
    img : g,
    title : "Taxi",
    subTitle : "Estética e Beleza"
  }
];
export function HomeCompaniesPartners () 
{
  return (
    <main className="grid grid-cols-3 gap-4 mt-14 items-center ">
      {
        imgsArr.map((img, index) => {
          return (
            <CompanyCard 
              key={index.toString()} 
              img={img.img} 
              subTitle={img.subTitle} 
              title={img.title}
            />
          )
        })
      }
    </main>
  );
}