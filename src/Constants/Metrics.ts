import Map from "../assets/Icons/Area Construida.png";
import Cars from "../assets/Icons/Vagas Estacionamento.png";
import Security from "../assets/Icons/Seguranca (2).png";
import Towers from "../assets/Icons/Predios.png";
import { MetricsProps } from "../components/MetricsCard";

export class MetricsData {
  public static readonly metrics : MetricsProps[] = [
    {
      alt : "Total área construída",
      icon : Map,
      metric : "48.423 m²",
      subTitle : "Área total construída"
    },
    {
      alt : "Quantidade de vagas de para estacionar o seu carro",
      icon : Cars,
      metric : "580",
      subTitle : "Vagas de Estacionamento"
    },
    {
      alt : "Segurança que é passada",
      icon : Security,
      metric : "24h",
      subTitle : "Vigilância"
    },
    {
      alt : "Pavimentos totais.",
      icon : Towers,
      metric : "11",
      subTitle : "Pavimentos"
    },
  ];
}