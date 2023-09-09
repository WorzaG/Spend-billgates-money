import {

  Flex,

} from "@chakra-ui/react";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Product from "./Product";

export default function ProductsList() {
  const products = useSelector((state) => state.spendmoney.items);
  //const [unit,setUnit] = useState(0)


  return (
    <Flex justifyContent={"center"} wrap={"wrap"}>
      {products.map((item) => (
       <Product item={item} key={item.id}/>
      ))}
    </Flex>
  );
}
