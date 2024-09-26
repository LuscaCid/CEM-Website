interface CompanyCardProps {
  img : string;
  title : string;
  subTitle : string;
}
export function CompanyCard (props : CompanyCardProps) {
  return (
    <div className="flex items-center justify-center gap-3 flex-col">
      <img src={props.img} className="rounded-full " />
      <h3 className="text-lg font-normal">{props.title}</h3>
      <p className="text-md ">{props.subTitle}</p>
    </div>
  );
}