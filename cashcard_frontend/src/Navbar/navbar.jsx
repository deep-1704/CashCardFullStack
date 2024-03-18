import { Flex, Heading, Spacer } from "@chakra-ui/react";
import Auth from "./authComponents/auth";
import Usernav from "./userNavComponents/userNav";

function Navbar(){
    let isLoggedin = ((localStorage.getItem("username") !== null)&&(localStorage.getItem("username") !== "deep"));
    return(
        <Flex padding={30} boxShadow='xs' p='6' rounded='md'>
            <Heading>CashCard</Heading>
            <Spacer />
            {isLoggedin? <Usernav /> : <Auth />}
        </Flex>
    );
}

export default Navbar;