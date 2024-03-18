import { Menu, MenuButton, Button, MenuList, MenuItem } from "@chakra-ui/react";

function UserButton() {
    let currUser = localStorage.getItem("username");

    function handleLogout(){
        localStorage.setItem("username", "deep");
        localStorage.setItem("password", "deep");
        window.location.reload();
    }

    return (
        <Menu>
            <MenuButton as={Button} colorScheme='green' variant='outline' size='lg'>
                {currUser}
            </MenuButton>
            <MenuList>
                <MenuItem color='red' onClick={() => handleLogout()}>Logout</MenuItem>
            </MenuList>
        </Menu>
    );
}

export default UserButton;