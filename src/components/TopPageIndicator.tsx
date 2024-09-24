import Home from "../../assets/Icons/Home.png";

export function TopPageIndicator(){
    return (
        <header className="flex gap-1">
            <img 
                src={Home}
                alt={"icone de home"}
            />
            <span>
                &gt; Quem somos
            </span>
        </header>
    );
}