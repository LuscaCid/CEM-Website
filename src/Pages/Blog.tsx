import { useQuery } from "@tanstack/react-query";
import { NoticeCard, NoticeCardProps } from "../components/NoticeCard";
import { Section } from "../components/Sections";
import { TopPageIndicator } from "../components/TopPageIndicator";
import { Button } from "../ui/Button";
import { api } from "../services/api";
import { useState } from "react";
import { Response } from "../@types/Responses";
import BloodDonation from "../assets/PlacesList/image 1.png";
import { BlogAside } from "../components/BlogAside";
export function Blog() {
  const [ page, setPage ] = useState(1);
  const { data:  response , isLoading, isSuccess } = useQuery({
    queryKey : ["get-blog-posts"],
    queryFn : async () => {
      const response = await api.get<Response<NoticeCardProps> >(`blog_posts?_page=${page}&_per_page-10`);
      console.log(response);
      return response.data;
    },
  });
  return (
    <main className="flex items-center gap-2 flex-col ">
      <div className="py-1 w-full px-28">
        <TopPageIndicator page="Blog"/>
      </div>
      {/* Secao que vai conter o componente de carrossel assim como nas outras paginas */}
      <header className="w-[50%] flex flex-col gap-4 items-center justify-center m-auto">
        <h1>
          Titulo desta campanha foto 
        </h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, fugiat. Praesentium, reprehenderit quos, iure sequi ea inventore pariatur eum debitis esse et dolor, laborum atque neque vitae dolorem dignissimos sunt! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis illum voluptas delectus commodi. Numquam quia aspernatur repellat illum quod, pariatur vel enim inventore ipsam. Tempore commodi officia alias? Facilis, rerum.
        </p>
        <Button title="Leia mais"/> 
      </header>
      <Section className="flex gap-6 items-start">
        <main className="w-[65%] grid grid-cols-2 gap-6">
          {
            response && response.data.length > 0 && response.data.map((post) => (
              <NoticeCard 
                title={post.title}
                description={post.description}
                //obtencao da imagem na pasta onde vai conter a informacao (static files) e insercao no frontend,m
                img={BloodDonation}
                slug={post.slug}
                headerParagraph={post.headerParagraph}
                key={post.headerParagraph}
              />
            ))
          }
        </main>
        <BlogAside />
      </Section>
    </main>
  );
}