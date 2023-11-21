import { ArrowLeftIcon } from '@chakra-ui/icons'
import { Avatar, Button, Flex, Icon, IconButton,Text } from '@chakra-ui/react'
import React from 'react'
import { signOut } from 'firebase/auth'
import {auth} from "/firebaseconfig"

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
    <Flex  w="300px" h="100%" borderEnd="1px solid" borderColor="gray.200" direction="column">
        <Flex  h="81px" w="100%" align="center" justifyContent="space-between" borderBottom="1px solid" borderColor="gray.200" p="3">
            <Flex align="center">
                <Avatar src="" marginEnd="3" />
                <Text>Albert Einstein</Text>
            </Flex>
            <IconButton size="sm" isRound icon={<ArrowLeftIcon/>} onClick={() => signOut(auth)}/>
        </Flex>
        <Button m="5" p="4">New Chat</Button>
        <Flex overflowX="scroll" direction="column" sx={{scrollbarWidth: 'none', '&::-webkit-scrollbar': { display: 'none'}}} flex={1}>
            <Chat/>
            <Chat/>
        </Flex>
    </Flex>
  )
}
