export interface NoticeCardProps {
  img : string;
  slug : string;
  headerParagraph : string;
  title : string;
  description : string;
}
export function NoticeCard (props : NoticeCardProps) {
  return (
    <section className="group flex flex-col gap-3 w-full cursor-pointer hover:opacity-80 transition duration-150 ">
      <header className="relative w-full overflow-hidden">
        <img src={props.img} className="group-hover:scale-105 tranition duration-200 object-cover w-full" alt="" />
        <span className="absolute top-2 left-2 p-2 rounded-none bg-main text-black uppercase">
          {props.slug}
        </span>
      </header>
      <main className="flex flex-col gap-2">
        <p className="text-secondary text-sm font-semibold">{props.headerParagraph}</p>
        <h2 className="font-semibold text-lg">{props.title}</h2>
        <span className="text-sm">{props.description}</span>
      </main>      
      <footer className="p-2">
        <button className="group border-none flex items-center gap-3 bg-none text-secondary">
          Leia mais <span className="group-hover:translate-x-2 transition duration-150">&gt;</span> 
        </button>
      </footer> 
    </section>
  );
}