import { ReactNode } from "react";
interface AccordionsSectionWithImage {
  children : ReactNode;
  title: string;
  subtitle: string;
  img : string;
  reverse? : boolean
}
export function AccordionsSectionWithImage(props : AccordionsSectionWithImage){
  return (
    <section className={`flex sm:flex-col items-start  gap-14 ${props.reverse ? "md:flex-row-reverse" : "md:flex-row"} px-4 py-2  `}>
      <aside className="flex flex-col gap-3 w-1/2">
      <header className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <p className="text-sm font-normal">{props.subtitle}</p>
      </header>
      <main className="flex w-full flex-col gap-2 2xl:gap-10">
        {props.children}
      </main>
      </aside>
      <aside className="w-1/2">
        <img src={props.img} className="w-full" alt="" />
      </aside>
    </section>
  );
}