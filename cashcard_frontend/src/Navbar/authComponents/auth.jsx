import { Flex} from "@chakra-ui/react";

import Login from "./login";
import Signup from "./signup";

function Auth() {
    return (
        <Flex gap={10}>
            <Login />
            <Signup />
        </Flex>
    );
}
export default Auth;