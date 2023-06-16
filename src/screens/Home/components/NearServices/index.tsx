import ServiceCard from "../../../../components/ServiceCard";
import { servicesInfo } from "./constants";
import * as S from "./styles";

const NearServices = () => {
  return (
    <S.Container>
      <S.Title>Serviços e Reservas Próximos</S.Title>

      <S.ServiceCardsWrapper>
        {servicesInfo.map((service, index) => (
          <ServiceCard
            key={index}
            Image={service.image}
            title={service.title}
            textColor={service.color}
            backgroundColor={service.backgroundColor}
          />
        ))}
      </S.ServiceCardsWrapper>
    </S.Container>
  );
};

export default NearServices;
