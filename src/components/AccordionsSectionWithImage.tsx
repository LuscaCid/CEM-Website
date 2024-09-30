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
    <section className={`flex gap-14 ${props.reverse ? "flex-row-reverse" : "flex-row"}`}>
      <aside className="flex flex-col gap-3 w-1/2">
      <header className="flex flex-col gap-2">
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <p className="text-sm font-normal">{props.subtitle}</p>
      </header>
      <main className="flex w-full flex-col gap-2">
        {props.children}
      </main>
      </aside>
      <aside className="w-1/2">
        <img src={props.img} className="w-full" alt="" />
      </aside>
    </section>
  );
}