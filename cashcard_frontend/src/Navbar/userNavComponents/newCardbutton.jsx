import { Button, Modal, ModalOverlay, ModalContent, useDisclosure, Heading, Stack, Input, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { useState } from "react";

function NewCardButton() {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    let [name, setName] = useState(null);
    let [amount, setAmount] = useState(null);

    function handleCreate() {
        if(!name || !amount){
            alert("Insufficient information");
            return;
        }
        let url = "http://localhost:8080/api/cashCards";
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        let cashCard = {
            "id": null,
            "owner": username,
            "name": name,
            "amount": amount
        }

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers.set('Content-Type', "application/json");

        fetch(url, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(cashCard)
        }).then(response => {
            if(response.status === 200){
                alert("CashCard created successfully");
                window.location.reload();
            }else{
                alert("Failed to create CashCard");
            }
        })
    }
    return (
        <>
            <Button onClick={onOpen} size='lg' colorScheme='green'>+ New Card</Button>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent padding={30}>
                    <Stack spacing={10}>
                        <Heading size='md'>New Card</Heading>
                        <Input placeholder="Name" size='lg' onChange={(e) => {setName(e.target.value)}}/>
                        <NumberInput>
                            <NumberInputField placeholder="Amount" onChange={(e) => {setAmount(e.target.value)}}/>
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                        <Button colorScheme='green' onClick={() => handleCreate()}>Create</Button>
                    </Stack>
                </ModalContent>
            </Modal>
        </>
    );
}

export default NewCardButton;