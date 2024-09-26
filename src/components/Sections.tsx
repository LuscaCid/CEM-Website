import { ReactNode } from "react";

interface Props {
    children : ReactNode;
    title? : string;
    isBlue? : boolean;
    description? : string;
    className? : string;
}
export function Section ({ children, isBlue, title, description, className } : Props) {
    return (
        <section className={`w-full px-20  py-10 my-10  text-black ${isBlue ? "bg-main " : ""}` + className} >
            {
                title && (
                    <h2 className="text-2xl m-auto font-bold text-black text-center pb-6">
                        {title}
                    </h2>
                )
            }
            {
                description && (
                    <p className="text-md text-black mb-4 text-center">
                        {description}
                    </p>
                )
            }       
            {children}
        </section>
    );
}
