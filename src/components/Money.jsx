import { Center, Container, Text } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";

export default function Money() {
  const money = useSelector((state) => state.spendmoney.money);

  return (
    <Container
      backgroundColor={"green.200"}
      h={14}
      maxW={"full"}
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      pos={"fixed"}
      top={0}
      zIndex={1000}
    >
      <Text fontWeight={"bold"} fontSize={24} >$ {money}</Text>
    </Container>
  );
}
