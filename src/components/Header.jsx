import { Text, Center, Image, Container } from '@chakra-ui/react'
import React from 'react'

export default function Header() {
  return (
    <Container p={1} bgColor={'white'} maxW={'full'} mt={14}>
     <Center flexDirection="column" my={5}>
        <Image src='https://neal.fun/spend/billgates.jpg' alt='bill Gates' borderRadius={'full'} w={150}/>
        <Text my={5} fontWeight={'bold'} fontSize={20}>Spend Bill Gates' Money</Text>
     </Center>
    </Container>
  )
}
