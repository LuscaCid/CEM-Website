import { NoticeCard } from "./NoticeCard";
import BloodDonation from "../assets/PlacesList/image 1.png";

export function NoticeSection () {
  return (
    <>
      {
        [1,2,3,4].map((e) => (
          <NoticeCard
            key={e}
              description="lorem Ips incorrectly "
              headerParagraph="lorem Ips incorrectly"
              img={BloodDonation}
              slug="Campanhas"
              title="Titulo da campanha"
          />
        ))
      }
    </>
  );
}