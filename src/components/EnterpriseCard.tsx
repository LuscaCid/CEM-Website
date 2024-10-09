interface EnterpriseCardProps {
  img : string;
  label : string;  
}
export function EnterprisesCard({img, label} : EnterpriseCardProps){ 
  return (
    <article className="rounded-none p-12 px-16 bg-main text-lg gap-4 flex flex-col">
      <img src={img} className="rounded-full max-w-[100px]" alt="" />
      <label >{label}</label>
    </article>
  );
}