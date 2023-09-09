import {
    Box,
    Container,
    Wrap,
    Image,
    WrapItem,
    Flex,
    Text,
    Input,
    FormControl,
    Button,
  } from "@chakra-ui/react";
  import React, { useEffect, useState } from "react";
  import { useDispatch, useSelector } from "react-redux";
  import { buy, sell } from "../redux/spendmoney/spendmoneySlice";

export default function Product({item}) {

    const dispatch = useDispatch()
   // const [unit,setUnit] = useState(0)
    const basket = useSelector(state => state.spendmoney.basket)
    const currentMoney = useSelector(state => state.spendmoney.money)
    const unit = basket.filter(res => res.name === item.name).length


    return (
    <WrapItem
    flexDirection={"column"}
    alignItems={"center"}
    bgColor={"white"}
    p={16}
    m={5}
  >
    <Image src={item.image} />
    <Text fontSize={20} fontWeight={"bold"}>
      {item.name}
    </Text>
    <Text color={"green.400"} fontSize={20} fontWeight={"bold"}>
      $ {item.price}
    </Text>

    <FormControl
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      {
        basket.map(e => e.name).indexOf(item.name) !== -1 ? <Button bgColor={"red.400"} color={"white"} onClick={()=> dispatch(sell(item))}>Sell</Button> : <Button bgColor={"red.400"} color={"white"} onClick={()=> dispatch(sell(item))} isDisabled>Sell</Button>
      }
      <Input type="number" w={20} m={2} textAlign={"center"} value={unit} isDisabled />
      {
       currentMoney >= item.price ? <Button bgColor={"green.400"} color={"white"} onClick={() => dispatch(buy(item)) }>Buy</Button> : <Button bgColor={"green.400"} color={"white"} onClick={() => dispatch(buy(item)) } isDisabled >Buy</Button>  
      }
    </FormControl>
  </WrapItem>
  )
}
