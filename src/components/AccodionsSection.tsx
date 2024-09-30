import { Accordion, AccordionDetails, AccordionSummary } from "@mui/material";
import { AccordionsSectionWithImage } from "./AccordionsSectionWithImage";
import { CirclePlus } from "lucide-react";
import Elevadores from "../assets/AccordionsImages/Elevadores 1.png";

export function AccordionsSection ({}){
  return (
    <section>
       <div>
        <AccordionsSectionWithImage 
          img={Elevadores} 
          title="Frase sobre Tecnologia" 
          subtitle="lorem ipsun aaaaa"
        >
        <Accordion className="shadow-none" sx={{
          paddingY : "1rem",
          paddingX : "0rem",
          borderRadius: "none",
          boxShadow : "none;", 
          borderBottom: "2px solid black;"
          }}>
          <AccordionSummary 
            className="shadow-none"
            expandIcon = {<CirclePlus />}
            id="tecnologia-accordion"
          >
              Titulacao
            </AccordionSummary>
            <AccordionDetails>
              aaaaaaa
            </AccordionDetails>
          </Accordion>
          <Accordion className="shadow-none" sx={{
              paddingY : "1rem",
              paddingX : "0rem",
              borderRadius: "none",
              boxShadow : "none;", 
              borderBottom: "2px solid black;"
            }}>
            <AccordionSummary 
              className="shadow-none"
              expandIcon = {<CirclePlus />}
              id="tecnologia-accordion"
            >
              Titulacao
            </AccordionSummary>
            <AccordionDetails>
              aaaaaaa
            </AccordionDetails>
          </Accordion>
          <Accordion className="shadow-none" sx={{
              paddingY : "1rem",
              paddingX : "0rem",
              borderRadius: "none",
              boxShadow : "none;", 
              borderBottom: "2px solid black;"
            }}>
            <AccordionSummary 
              className="shadow-none"
              expandIcon = {<CirclePlus />}
              id="tecnologia-accordion"
            >
              Titulacao
            </AccordionSummary>
            <AccordionDetails>
              aaaaaaa
            </AccordionDetails>
          </Accordion>
          <Accordion className="shadow-none" sx={{
              paddingY : "1rem",
              paddingX : "0rem",
              borderRadius: "none",
              boxShadow : "none;", 
              borderBottom: "2px solid black;"
            }}>
            <AccordionSummary 
              className="shadow-none"
              expandIcon = {<CirclePlus />}
              id="tecnologia-accordion"
            >
              Titulacao
            </AccordionSummary>
            <AccordionDetails>
              aaaaaaa
            </AccordionDetails>
          </Accordion>
          <Accordion className="shadow-none" sx={{
              paddingY : "1rem",
              paddingX : "0rem",
              borderRadius: "none",
              boxShadow : "none;", 
            }}>
            <AccordionSummary 
              className="shadow-none"
              expandIcon = {<CirclePlus />}
              id="tecnologia-accordion"
            >
              Titulacao
            </AccordionSummary>
            <AccordionDetails>
              aaaaaaa
            </AccordionDetails>
          </Accordion>
        </AccordionsSectionWithImage>
        </div>
    </section>
   
  );
}