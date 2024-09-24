
interface ButtonProps 
{
    title : string;
    type? : "submit" | "button" ;
    description? : string;
    onClick? : (e : React.MouseEvent<HTMLButtonElement>) => void;
}
export function Button (props : ButtonProps) {
    return (
        <button
            type={props.type || "button"}
            onClick={props.onClick}
            title={props.description}
            className="bg-main-btn hover:opacity-80 transition duration-150 rounded-md py-2 px-5 text-white font-semibold"    
        >
            {props.title}
        </button>
    )
};