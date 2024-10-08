import { MetricsData } from "../Constants/Metrics";

export interface MetricsProps {
  icon : string;
  alt : string;
  metric : string;
  subTitle : string; 
}
function MetricsCard({ icon, metric, subTitle, alt } : MetricsProps){
  return (
    <div 
      className="bg-metric-card px-1 py-10 border-none w-full rounded-sm flex flex-col items-center gap-3 min-w-[240px] ">
      <img 
        className="w-20"
        src={icon}
        alt={alt}
      />
      <h2 className="text-4xl text-white">
        {metric}
      </h2>
      <p className="text-main text-lg font-thin">
        {subTitle}
      </p>
    </div>
  )
}
export function Metrics () {
  return (
    <main className="flex justify-between items-center lg:gap-14 md:gap-10 sm:flex-col md:flex-row sm:gap-2 sm:py-6">
      {
        MetricsData.metrics.map(metric => (
          <MetricsCard
            key={metric.subTitle}
            icon={metric.icon}
            metric={metric.metric}
            subTitle={metric.subTitle}
            alt={metric.alt}
          />
        ))
      }
    </main>
  );
}