import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, Icon, IconButton,Text } from '@chakra-ui/react'
import React from 'react'

const Chat = () =>{
    return (
        <Flex p="3" align="center" _hover={{bg: "gray.100", cursor:"pointer"}} >
            <Avatar src='' marginEnd="3"/>
            <Text>user@gmail.com</Text>
        </Flex>
    )
}

export default function Sidebar() {
  return (
    <Flex  w="300px" h="100vh" borderEnd="1px solid" borderColor="gray.200" direction="column">
        <Flex  h="81px" w="100%" align="center" justifyContent="space-between" borderBottom="1px solid" borderColor="gray.200" p="3">
            <Flex align="center">
                <Avatar src="" marginEnd="3" />
                <Text>Albert Einstein</Text>
            </Flex>
            <IconButton size="sm" isRound icon={<ArrowLeftIcon/>} />
        </Flex>
        <Button m="5" p="4">New Chat</Button>
        <Flex overflowX="scroll" direction="column" sx={{scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none'}}}>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
            <Chat/>
        </Flex>
    </Flex>
  )
}
