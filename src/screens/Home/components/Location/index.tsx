import * as S from "./styles";
import MapImage from "../../../../assets/mapImage.png";

const Location = () => {
  return (
    <S.Container>
      <S.TitleWrapper>
        <S.Title>Localização</S.Title>
      </S.TitleWrapper>

      <S.MapImage source={MapImage} />

      <S.ActivateGpsWrapper>
        <S.ActivateGps>
          <S.ActivateGpsText>Ativar o GPS</S.ActivateGpsText>
        </S.ActivateGps>
      </S.ActivateGpsWrapper>
    </S.Container>
  );
};

export default Location;
