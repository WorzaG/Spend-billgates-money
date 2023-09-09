import { Box, Flex, Text,Heading } from "@chakra-ui/react";
import React from "react";
import { useSelector } from "react-redux";


export default function Receipt() {
  const basket = useSelector((state) => state.spendmoney.basket);
  const initialMoney = useSelector((state) => state.spendmoney.initialMoney);
  const currentMoney = useSelector((state) => state.spendmoney.money);
  const itemCounts = basket
    .map((e) => [e.name, e.price])
    .reduce((acc, item) => {
      acc[item] = (acc[item] || 0) + 1;
      return acc;
    }, {});
  const formattedResult = Object.entries(itemCounts).map(([name, sayi]) => ({
    name,
    sayi,
  }));
 // console.log(formattedResult);

  return (
    <Box
      bgColor={"white"}
      mx={20}
      my={10}
      textAlign={"center"}
      minW={400}
      minH={"full"}
    >
      <Heading as="h2" size="xl" py={5}>
        Your Receipt
      </Heading>
      <Box borderBottom={"1px"}>
        {formattedResult.map((item) => (
          <Flex justifyContent={"center"} alignItems={"center"}>
            <Text p={2}>
              {item.name.split(",")[0]} x {item.sayi}
            </Text>
            <Text p={2} color={"green.400"} fontWeight={"bold"}>
              $ {item.name.split(",")[1]}
            </Text>
          </Flex>
        ))}
      </Box>
      <Flex justifyContent={"center"} alignItems={"center"}>
      <Text px={8} py={2}  fontWeight={"bold"} fontSize={22}>Total</Text>
      <Text px={8} py={2} fontWeight={"bold"}>$ { initialMoney - currentMoney }</Text>
      </Flex>
    </Box>
  );
}
