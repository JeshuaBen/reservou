import { useTheme } from "styled-components";
import * as S from "./styles";
import { IServiceCard } from "./types";

const ServiceCard = ({
  title,
  Image,
  backgroundColor,
  textColor,
}: IServiceCard) => {
  const theme = useTheme();

  return (
    <S.Container
      style={{
        shadowColor: "#000000",
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.17,
        shadowRadius: 10,
        elevation: 3,
      }}
    >
      <S.Content
        style={{
          backgroundColor: backgroundColor ?? theme.colors.white,
        }}
      >
        <S.ServiceImage source={Image} resizeMode="cover" />

        <S.ServiceTitleWrapper>
          <S.ServiceTitle>{title}</S.ServiceTitle>
          <S.SeeMore
            style={{
              color: textColor ?? theme.colors.yellow,
            }}
          >
            Ver mais
          </S.SeeMore>
        </S.ServiceTitleWrapper>
      </S.Content>
    </S.Container>
  );
};

export default ServiceCard;
