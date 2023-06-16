import * as S from "./styles";
import Header from "../../components/Header";
import Logo from "../../assets/logo.png";
import { selectIcon } from "../../utils/selectIcon";
import Location from "./components/Location";
import Divider from "../../components/Divider";
import NearServices from "./components/NearServices";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <S.Container>
      <Header leftIcon={selectIcon("menu")} rightIcon={selectIcon("filter")}>
        <S.Logo source={Logo} />
      </Header>

      <S.Content>
        <Location />

        <Divider marginTop={20} />

        <NearServices />

        <Divider marginTop={2} />
      </S.Content>
      <Footer />
    </S.Container>
  );
};

export default Home;
