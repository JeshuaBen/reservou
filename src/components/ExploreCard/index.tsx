import * as S from "./styles";
import { IExploreCard } from "./types";

const ExploreCard = ({ Image, title }: IExploreCard) => {
  return (
    <S.Container>
      <S.Card>
        <S.Item source={Image} />
      </S.Card>
      <S.Title>{title}</S.Title>
    </S.Container>
  );
};

export default ExploreCard;
