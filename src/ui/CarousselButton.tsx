type Direction = "left" | "right";
interface Props {
    direction: Direction
}
export function CarouselButton ({ direction } : Props ){
    return (
        <button className="p-3 rounded-none border-none bg-main text-black">
            {
                direction === "left" ? (

                ) : (

                )
            }
        </button>
    );
}