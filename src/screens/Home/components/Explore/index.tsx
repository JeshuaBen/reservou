import ExploreCard from "../../../../components/ExploreCard";
import { exploreOptions } from "./constants";
import * as S from "./styles";

const Explore = () => {
  return (
    <S.Container>
      <S.Title>Explore</S.Title>

      <S.ExploreSlider>
        {exploreOptions.map((option, index) => (
          <ExploreCard key={index} Image={option.image} title={option.title} />
        ))}
      </S.ExploreSlider>
    </S.Container>
  );
};

export default Explore;
