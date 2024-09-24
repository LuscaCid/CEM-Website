import { NavLink, useLocation } from "react-router-dom";
import { Routes } from "../Constants/RoutingNames";

interface Props {
    title : string;
    description? : string;
    to : Routes;
}
export function TextLink({ title, description, to} : Props){
    const local = useLocation();
    return (
        <NavLink
            to={to}
            title={description}
        >
            <span
                className={`${local.pathname === to ? " border-b-2 pb-1  text-nowrap flex-nowrap   border-main text-main" : " text-white "} transition duration-7  uppercase tracking-wider  pb-1 px-1 `}
            > 
                {title} 
            </span>
        </NavLink>
    );
}