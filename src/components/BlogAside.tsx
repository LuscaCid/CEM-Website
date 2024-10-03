import { BlogAsideContainer } from "./BlogAsideContainer";

export function BlogAside (){
  return (
    <aside className="flex flex-col w-[40%] gap-4">
      <BlogAsideContainer title="Categorias">
        <ul className="list-none flex flex-col gap-2">
          <li className="underline underline-offset-2">Campanhas (4)</li>
          <li className="underline underline-offset-2">Eventos  (1)</li>
          <li className="underline underline-offset-2">Notícias (2)</li>
          <li className="underline underline-offset-2">Categoria 4 (3)</li>
        </ul>
      </BlogAsideContainer>
      <BlogAsideContainer title="Top Posts">
          <div>

          </div>
      </BlogAsideContainer>
      <BlogAsideContainer title="Tags">
          <div>
            
          </div>
      </BlogAsideContainer>
    </aside>
  );
}