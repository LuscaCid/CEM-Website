import Quote from "../assets/Icons/Frase.svg";

interface TestimonyCardProps {
  testimony : string;
  personName : string;
  roleEnterprise : string;
}

export function TestimonyCard ({ personName, roleEnterprise, testimony } : TestimonyCardProps) {
  return (
    <article className="flex flex-col gap-4 w-full bg-zinc-100 border-none rounded-none shadow-md px-3 py-2">
      <header className="flex flex-col gap-2">
        <span className="text-secondary text-2xl"> <img src={Quote} alt="Simbolo de aspas" /></span>
        <p>{testimony}</p>
      </header>
      <footer className="flex flex-col gap-2">
        <h3 className="text-lg font-bold">{personName}</h3>
        <p className="text-lg font-normal">{roleEnterprise}</p>
      </footer>
    </article>
  );
}