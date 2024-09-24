import Default from "../assets/default.png";
export function RoundedImgText() 
{
    return (
        <article className="flex flex-col gap-8 w-full items-center">
            <img 
                src={Default}
                alt="Imagem padrão"
                className="rounded-full object-cover"
            />
            <h1 className="font-bold text-lg">
                Titulo do card
            </h1>
            <p className="font-normal text-md">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae mollitia esse quam quis 
            </p>
        </article>
    );   
}