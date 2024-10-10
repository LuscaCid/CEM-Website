import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { AccordionsSectionWithImage } from "./AccordionsSectionWithImage";
import { CirclePlus } from "lucide-react";
export interface AccordionDetailsCustomProps {
  title : string; 
  description : string
}
interface Props {
  img : string;
  title : string;
  subTitle : string;
  //informacao para os filhos, no caso os accordions que estarao na secao
  accordionDetails : AccordionDetailsCustomProps[]
  reverseImagePosition? : boolean;
}
export function AccordionsSection ({  accordionDetails, img, subTitle, title, reverseImagePosition } : Props){
  return (
    <AccordionsSectionWithImage 
      img={img} 
      title={title} 
      subtitle={subTitle}
      reverse={reverseImagePosition} 
    >
    {
      accordionDetails.map((accordion, index) => (
        <Accordion  key={index.toString()} sx={{
          paddingY : "0.6rem",
          paddingX : "0rem",
          borderRadius: "none",
          boxShadow : "none;", 
          }}>
          <AccordionSummary expandIcon = {<CirclePlus />} id={`accordion-${index}`} className="shadow-none">
            {accordion.title}
          </AccordionSummary>
          <AccordionDetails>
            <>
              {
                accordion.description.split(".").map((paragraph) => (
                  <section>
                  <p>
                    {paragraph}.
                  </p>
                  <br/>
                </section>
                ))
              }
            </>
           
          </AccordionDetails>
        </Accordion>
      ))
    }
    </AccordionsSectionWithImage>
);
}