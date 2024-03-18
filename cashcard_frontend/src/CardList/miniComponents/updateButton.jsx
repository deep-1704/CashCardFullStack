import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
    NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper,
} from '@chakra-ui/react'
import { useState } from 'react';

function UpdateButton({ cred }) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    let [amount, setAmount] = useState(null);

    function handleUpdate() {
        if (!amount) {
            alert("Please enter new amount");
            return;
        }

        let url = "http://localhost:8080/api/cashCards";
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");
        let cashCard = {
            "id": cred.id,
            "owner": cred.owner,
            "name": cred.name,
            "amount": amount
        }

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));
        headers.set('Content-Type', "application/json");

        fetch(url,{
            method:"PUT",
            headers: headers,
            body: JSON.stringify(cashCard)
        }).then(response => {
            if(response.status === 204){
                alert("CashCard updated successfully");
                window.location.reload();
            }
            else alert("Invalid request");
        })
    }

    return (
        <>
            <Button onClick={onOpen} colorScheme='blue' variant='outline'>Update</Button>
            <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Update CashCard</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <NumberInput>
                            <NumberInputField placeholder="Amount" onChange={(e) => { setAmount(e.target.value) }} />
                            <NumberInputStepper>
                                <NumberIncrementStepper />
                                <NumberDecrementStepper />
                            </NumberInputStepper>
                        </NumberInput>
                    </ModalBody>

                    <ModalFooter>
                        <Button colorScheme='blue' mr={3} variant='outline' onClick={() => {handleUpdate()}}>
                            Update
                        </Button>
                        <Button variant='ghost' onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

        </>
    );
}

export default UpdateButton;