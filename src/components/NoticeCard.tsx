interface NoticeCardProps {
  img : string;
  slug : string;
  headerParagraph : string;
  title : string;
  description : string;
}
export function NoticeCard (props : NoticeCardProps) {
  return (
    <section className="flex flex-col gap-3 w-full ">
      <header className="relative w-full">
        <img src={props.img} className="w-full" alt="" />
        <span className="absolute top-2 left-2 p-2 rounded-none bg-main text-black uppercase">
          {props.slug}
        </span>
      </header>
      <main className="flex flex-col gap-2">
        <p className="text-secondary text-sm">{props.headerParagraph}</p>
        <h2 className="font-semibold text-lg">{props.title}</h2>
        <span>{props.description}</span>
      </main>      
      <footer className="p-2">
        <button className="group border-none flex items-center gap-3 bg-none text-secondary">
          Leia mais <span className="group-hover:translate-x-2 transition duration-150">&gt;</span> 
        </button>
      </footer> 
    </section>
  );
}