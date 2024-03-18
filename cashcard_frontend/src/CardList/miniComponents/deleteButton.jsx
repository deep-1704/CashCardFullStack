import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
    Button,
    useDisclosure
} from '@chakra-ui/react';

import { useRef } from 'react';


function DeleteButton({ id }) {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = useRef()

    function handleDelete(){
        let url = "http://localhost:8080/api/cashCards/"+id;
        let username = localStorage.getItem("username");
        let password = localStorage.getItem("password");

        let headers = new Headers();
        headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

        fetch(url,{
            method: "DELETE",
            headers: headers,
        }).then(response => {
            if(response.status === 204){
                alert("CashCard deleted successfully");
                window.location.reload();
            }
            else{
                alert("Invalid request");
            }
        })
    }

    return (
        <>
            <Button colorScheme='red' variant='outline' onClick={onOpen} >
                Delete
            </Button>
            <AlertDialog
                isOpen={isOpen}
                leastDestructiveRef={cancelRef}
                onClose={onClose}>
                <AlertDialogOverlay>
                    <AlertDialogContent>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold'>
                            Delete CashCard
                        </AlertDialogHeader>

                        <AlertDialogBody>
                            Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                            <Button ref={cancelRef} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button colorScheme='red' onClick={() => {handleDelete()}} ml={3}>
                                Delete
                            </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                </AlertDialogOverlay>
            </AlertDialog>
        </>
    );
}

export default DeleteButton;