import { Button, Modal, ModalOverlay, ModalContent, useDisclosure, Heading, Stack, Input, InputGroup, InputRightElement, } from "@chakra-ui/react";
import { useState } from "react";

function Signup() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    let [username, setUsername] = useState(null);
    let [password, setPassword] = useState(null);

    function handleRegister(){
        if (!username || !password) {
            alert("Username/Password is missing");
            return;
        }

        let url = "http://localhost:8080/api/users/register";
        let defaultUsername = "deep";
        let defaultPassword = "deep";

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(defaultUsername + ":" + defaultPassword));
        headers.set('Content-Type', "application/json");

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify({username, password})
        }).then(response => {
            if(response.status === 403){
                alert("Username: "+username+" already exist");
                return;
            }
            else if(response.status === 200){
                localStorage.setItem("username", username);
                localStorage.setItem("password", password);
                alert("Registered successfully");
                window.location.reload();
            }else{
                alert("Request failed");
            }
        })
    }

    return (
        <>
            <Button onClick={onOpen} size='lg'>Register</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent padding={30}>
                    <Stack spacing={10}>
                        <Heading size='md'>Register</Heading>
                        <Input placeholder="Username" size='lg' onChange={(e) => { setUsername(e.target.value) }}/>
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
                        <Button colorScheme='green' onClick={() => handleRegister()}>Register</Button>
                    </Stack>
                </ModalContent>
            </Modal>
        </>
    );
}

export default Signup;