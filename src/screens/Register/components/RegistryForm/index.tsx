import { z } from "zod";
import InputBox from "../InputBox";
import * as S from "./styles";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../../routes/stack.routes";
import { Platform } from "react-native";

const registryFormSchema = z
  .object({
    name: z.string().min(3, "Nome é obrigatário"),
    email: z.string().email("Email inválido"),
    phone: z.string().min(10, "Telefone inválido"),
    password: z.string().min(8, "Senha deve conter pelo menos 8 caracteres"),

    confirmPassword: z.string().min(8, "Senha inválida"),
  })
  .refine((data) => data.password !== data.password.toLowerCase(), {
    message: "Senha deve conter pelo menos uma letra maiúscula",
    path: ["password"],
  })
  .refine((data) => data.password !== data.password.toUpperCase(), {
    message: "Senha deve conter pelo menos uma letra minúscula",
    path: ["password"],
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não conferem",
    path: ["confirmPassword"],
  });

type RegistryFormData = z.infer<typeof registryFormSchema>;

type RegistryFormProps = {
  navigation: NativeStackNavigationProp<
    RootStackParamList,
    "Register",
    undefined
  >;
};

const RegistryForm = ({ navigation }: RegistryFormProps) => {
  const [toggleVisibility, setToggleVisibility] = useState<boolean>(false);
  const [toggleConfirmVisibility, setToggleConfirmVisibility] =
    useState<boolean>(false);
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const { control, register, formState, handleSubmit, watch, getValues } =
    useForm<RegistryFormData>({
      resolver: zodResolver(registryFormSchema),
    });

  const togglePassword = () => {
    setToggleVisibility(!toggleVisibility);
  };

  const toggleConfirmPassword = () => {
    setToggleConfirmVisibility(!toggleConfirmVisibility);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    formState.errors ? navigation.navigate("Home") : null;
  };

  return (
    <S.Container
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 64 : 0}
    >
      <S.FormStacker>
        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox
              title="Nome"
              placeholder="Nome"
              {...register("name")}
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={formState?.errors?.name?.message}
            />
          )}
          name="name"
          defaultValue=""
        />

        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox
              title="E-mail"
              placeholder="E-mail"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={formState?.errors?.email?.message}
            />
          )}
          name="email"
          defaultValue=""
        />

        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox
              title="Telefone"
              placeholder="Telefone"
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              error={formState?.errors?.phone?.message}
            />
          )}
          name="phone"
          defaultValue=""
        />

        <Controller
          rules={{ required: true }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox
              title="Criar senha"
              placeholder="Criar senha"
              passwordInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              toggleVisibility={togglePassword}
              visibility={toggleVisibility}
              error={formState?.errors?.password?.message}
            />
          )}
          name="password"
          defaultValue=""
        />

        <Controller
          rules={{
            required: true,
          }}
          control={control}
          render={({ field: { onChange, onBlur, value } }) => (
            <InputBox
              title="Confirmar senha"
              placeholder="Confirmar senha"
              passwordInput
              onChange={onChange}
              onBlur={onBlur}
              value={value}
              toggleVisibility={toggleConfirmPassword}
              visibility={toggleConfirmVisibility}
              error={formState?.errors?.confirmPassword?.message}
            />
          )}
          name="confirmPassword"
          defaultValue=""
        />
        <S.RegistryButton onPress={handleSubmit(onSubmit)}>
          <S.RegistryButtonText>Criar Conta</S.RegistryButtonText>
        </S.RegistryButton>
      </S.FormStacker>
    </S.Container>
  );
};

export default RegistryForm;
