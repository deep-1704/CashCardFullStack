import { Card, CardBody, CardFooter, Stack, Heading, Text, Divider, ButtonGroup } from '@chakra-ui/react'
import DeleteButton from './miniComponents/deleteButton';
import UpdateButton from './miniComponents/updateButton';


function CashCard({ cred }) {
    return (
        <Card maxW='md'>
            <CardBody>
                <Stack spacing='3'>
                    <Heading size='md'>{cred.name}</Heading>
                    <Text>Amount:</Text>
                    <Text color='blue.600' fontSize='2xl'>
                        {"$"+cred.amount}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <ButtonGroup spacing='10'>
                    <UpdateButton cred={cred} />
                    <DeleteButton id={cred.id} />
                </ButtonGroup>
            </CardFooter>
        </Card>
    );
}

export default CashCard;