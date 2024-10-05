import { ContribuitorsSection } from "../components/ContribuitorsSection";
import { Section } from "../components/Sections";
import { TopPageIndicator } from "../components/TopPageIndicator";
import Fachada from "../assets/Caroussel/Fachada.png";
import Missao from "../assets/Icons/Missao.png"
import Valores from "../assets/Icons/Valores 1.png"
import Visao from "../assets/Icons/Visao.png"
import { UsefulSlugIconSection } from "../components/UsefulSlugSection";
import { AccordionsSection } from "../components/AccodionsSection";
import Elevadores from "../assets/AccordionsImages/Elevadores 1.png";
import Lixos from "../assets/AccordionsImages/Recycle-lixos 1.png";
import Portaria from "../assets/AccordionsImages/Portaria-Acesso 1.png";
export function About() {
  return (
    <main className="flex items-center gap-2 flex-col ">
      <TopPageIndicator page="About"/>
      <Section
      className="flex flex-col gap-5" 
      title="Título sobre a história do CEM 
lorem ipsum dolor sit amet"
      isBlue>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut atque optio laboriosam vero iure. Unde optio qui, consequatur ducimus aspernatur libero iure exercitationem excepturi asperiores voluptatem, assumenda quibusdam eos. Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem ut quaerat consectetur? Aperiam blanditiis excepturi est ex illo nostrum? Deserunt debitis voluptatibus quia odit corrupti, vitae neque numquam. Saepe, officiis.</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis illum magni quidem ex animi sapiente laboriosam incidunt, labore ipsam dolorum voluptatem sit facilis saepe minus nam eveniet deserunt harum veritatis?</p>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta architecto aperiam nesciunt modi mollitia quo deleniti nisi, eveniet possimus? Cum error sit esse cumque. Vel sapiente voluptas nam molestiae nihil.</p>
        <ContribuitorsSection />
      </Section>
      <Section className="flex  gap-10">
        <img className="w-1/2" src={Fachada} alt="Imagem que representa a faixada do predio" />
        <aside>
          <ul className="flex flex-col justify-between h-full">
            <li className="flex items-center gap-10">
              <img src={Missao} alt="" />
              <aside>
                <h2 className="text-lg font-bold">Título sobre missao</h2>
                <p className="text-sm">paragrath Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aperiam dolorum minus incidunt fugiat, magni non quibusdam nam doloribus reprehenderit </p>
              </aside>
            </li>
            <li className="flex  items-center gap-10">
              <img src={Visao} alt="" />
              <aside>
                <h2 className="text-lg font-bold">Título sobre visao</h2>
                <p className="text-sm">paragrath Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aperiam dolorum minus incidunt fugiat, magni non quibusdam nam doloribus reprehenderit </p>
              </aside>
            </li>
            <li className="flex gap-10 items-center">
              <img src={Valores} alt="" />
              <aside>
                <h2 className="text-lg font-bold">Título sobre valores</h2>
                <p className="text-sm">paragrath Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam aperiam dolorum minus incidunt fugiat, magni non quibusdam nam doloribus reprehenderit </p>
              </aside>
            </li>
          </ul>
        </aside>
      </Section> 
      <Section 
        title="Título sobre a  Infraestrutura lorem ipsum dolor sit amet" 
        className="flex items-center flex-col mt-0 pt-0"
      >
        <>
        <UsefulSlugIconSection />
        
        </>

      </Section>
      <Section className="flex flex-col gap-3">
        <AccordionsSection 
          accordionDetails={[
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"}]}
          img={Elevadores}
          subTitle="Subtitle for the Accordion"
          title="Título sobre a tecnologia"
        />
         <AccordionsSection 
          accordionDetails={[
            { description : "Accordion Details", title : "Accordion Title"},
            { description : "Accordion Details", title : "Accordion Title"},
            { description : "Accordion Details", title : "Accordion Title"},
            { description : "Accordion Details", title : "Accordion Title"},
            { description : "Accordion Details", title : "Accordion Title"}]}
          img={Lixos}
          subTitle="Subtitle for the Accordion"
          title="Título sobre a tecnologia"
          reverseImagePosition
        />
        <AccordionsSection 
          accordionDetails={[
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"},
          { description : "Accordion Details", title : "Accordion Title"}]}
          img={Portaria}
          subTitle="Subtitle for the Accordion"
          title="Título sobre a tecnologia"
        />
        <p className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed aut veniam dolore delectus ratione fugiat assumenda iusto eligendi expedita aspernatur corporis, numquam repellendus non, architecto eum odio ab fugit ea!
        </p>
      </Section>
    </main>
  );
}