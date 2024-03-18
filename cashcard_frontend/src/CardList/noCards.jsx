import {
    Alert,
    AlertIcon,
} from '@chakra-ui/react'

function NoCards({text}) {
    return (
        <Alert status='warning' marginTop={10}>
            <AlertIcon />
            {text}
        </Alert>
    );
}

export default NoCards;