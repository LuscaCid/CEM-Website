import { ReactNode } from "react";

interface BlogAsideContainerProp{
  children : ReactNode;
  title : string;
}
export function BlogAsideContainer ({ children, title } : BlogAsideContainerProp){
  return (
    <article className="border border-secondary shadow-md p-4 w-full">
      <h1 className="font-bold text-lg text-secondary">{title}</h1>
      {children}
    </article>
  );
}