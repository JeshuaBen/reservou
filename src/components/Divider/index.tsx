import * as S from "./styles";

const Divider = ({ marginTop }: IDivider) => {
  return (
    <S.Separator
      style={{
        marginTop: marginTop ?? "22px",
      }}
    />
  );
};

export default Divider;
