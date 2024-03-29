import React from "react";
import { useNavigation } from "@react-navigation/native";

import {
  Container,
  AboutUser,
  Avatar,
  TextContainer,
  HelloMessage,
  BoldText,
  SecondaryMessage,
  AddButton,
  Icon,
  BackButton,
  Title,
} from "./styles";
import { StackNavigationProp } from "@react-navigation/stack";

interface HeaderProps {
  user?: {
    name: string;
    avatar_url: string;
  };
}

type RootStackParamList = {
  Home: undefined;
  RegisterLoginData: undefined;
};

type NavigationProps = StackNavigationProp<RootStackParamList>;

export function Header({ user }: HeaderProps) {
  const { navigate, goBack } = useNavigation<NavigationProps>();

  function handleAddPass() {
    navigate("RegisterLoginData");
  }

  return (
    <Container
      hasUserData={!!user}
      style={{
        ...(user
          ? {
              backgroundColor: "#475569",
            }
          : {
              backgroundColor: "#475569",
            }),
      }}
    >
      {user ? (
        <>
          <AboutUser>
            <Avatar source={require("../../../assets/images/adaptive-icon.png")} />

            <TextContainer>
              <HelloMessage>
                Olá,
                {/* <BoldText>{user.name}</BoldText> */}
              </HelloMessage>

              <SecondaryMessage>Sinta-se seguro aqui</SecondaryMessage>
            </TextContainer>
          </AboutUser>

          <AddButton onPress={handleAddPass}>
            <Icon name="plus" color="#FFFFFF" size={24} />
          </AddButton>
        </>
      ) : (
        <>
          <BackButton onPress={goBack}>
            <Icon name="chevron-left" color="#ffffff" size={28} />
          </BackButton>

          <Title>Cadastro de senha</Title>
        </>
      )}
    </Container>
  );
}
