import * as S from "./styles";
import RegistryLogo from "../../../../assets/png/registryLogo.png";

const RegistryHeader = () => {
  return (
    <S.Container>
      <S.RegistryLogo source={RegistryLogo} />
    </S.Container>
  );
};

export default RegistryHeader;
