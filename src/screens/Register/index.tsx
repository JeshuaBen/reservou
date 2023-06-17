import { StatusBar } from "expo-status-bar";
import * as S from "./styles";
import RegistryHeader from "./components/RegistryHeader";
import RegistryForm from "./components/RegistryForm";
import { RegistryScreenProps } from "./types";

const Register = ({ navigation }: RegistryScreenProps) => {
  return (
    <S.Container>
      <StatusBar style="dark" />

      <RegistryHeader />

      <RegistryForm navigation={navigation} />
    </S.Container>
  );
};

export default Register;
