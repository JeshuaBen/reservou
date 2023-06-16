import * as S from "./styles";
import Header from "../../components/Header";
import Logo from "../../assets/logo.png";
import { selectIcon } from "../../utils/selectIcon";
import Location from "./components/Location";
import Divider from "../../components/Divider";

const Home = () => {
  return (
    <S.Container>
      <Header leftIcon={selectIcon("menu")} rightIcon={selectIcon("filter")}>
        <S.Logo source={Logo} />
      </Header>

      <S.Content>
        <Location />

        <Divider />
      </S.Content>
    </S.Container>
  );
};

export default Home;
