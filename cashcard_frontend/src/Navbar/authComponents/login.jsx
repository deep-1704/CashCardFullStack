import { Button, Modal, ModalOverlay, ModalContent, useDisclosure, Heading, Stack, Input, InputGroup, InputRightElement, } from "@chakra-ui/react";
import { useState } from "react";

function Login() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    let [username, setUsername] = useState(null);
    let [password, setPassword] = useState(null);

    function handleLogin() {
        if (!username || !password) {
            alert("Username/Password is missing");
            return;
        }

        let url = "http://localhost:8080/api/users/login";

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

        fetch(url, {
            method: 'GET',
            headers: headers
        })
        .then(response => {
            if(response.status === 200){
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                window.location.reload();
                return;
            }
            alert("Invalid credentials");
        })
    }

    return (
        <>
            <Button onClick={onOpen} size='lg'>Login</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent padding={30}>
                    <Stack spacing={10}>
                        <Heading size='md'>Login</Heading>
                        <Input placeholder="Username" size='lg' onChange={(e) => { setUsername(e.target.value) }} />
                        <InputGroup size='lg'>
                            <Input
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Enter password'
                                onChange={(e) => { setPassword(e.target.value) }}
                            />
                            <InputRightElement width='4.5rem'>
                                <Button h='1.75rem' size='sm' onClick={handleClick}>
                                    {show ? 'Hide' : 'Show'}
                                </Button>
                            </InputRightElement>
                        </InputGroup>
                        <Button colorScheme='green' onClick={() => handleLogin()}>Login</Button>
                    </Stack>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Login;