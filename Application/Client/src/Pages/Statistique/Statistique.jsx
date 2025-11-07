import BarGraphic from "./Graphic/BarGraphic";
import { fakeStats, fakeEquipes } from "./dataset/stats";

function Statistiques() {
  const equipeId = "EQ010";
  const equipe = fakeEquipes.find((e) => e.id === equipeId);
  const sport = equipe.sport;
  const statsData = fakeStats.find((e) => e.equipeId === equipeId);

  //Pour natation, c'est "epreuves" || sinon c'est "matchs"
  const data = statsData.matchs || statsData.epreuves || [];
  return (
    <>
      <BarGraphic sport={sport} data={data} />
    </>
  );
}

export default Statistiques;
