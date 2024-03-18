import { Flex} from "@chakra-ui/react";
import NewCardButton from "./newCardbutton";
import UserButton from "./userButton";

function Usernav(){
    return (
        <Flex gap={10}>
            <NewCardButton />
            <UserButton />
        </Flex>
    );
}

export default Usernav;