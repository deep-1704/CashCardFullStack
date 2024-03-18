import { Wrap, WrapItem } from "@chakra-ui/react";
import CashCard from "./cashCard";
import NoCards from "./noCards";
import { useEffect, useState } from "react";

function CardList() {
    let [allCards, setAllCards] = useState([]);

    let url = "http://localhost:8080/api/cashCards";
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    let headers = new Headers();
    headers.set('Authorization', 'Basic ' + btoa(username + ":" + password));

    useEffect(() => {
        fetch(url, {
            method: "GET",
            headers: headers
        })
            .then(response => {
                return response.json();
            }).then(data => {
                setAllCards(data);
            })
    }, [])

    return (
        <>{(allCards.length === 0) ?
            <NoCards text="No CashCards to show!" /> :
            <Wrap spacing={15} marginTop={10} marginLeft={5} marginRight={5}>
                {allCards.map(cred => <WrapItem><CashCard cred={cred} /></WrapItem>)}
            </Wrap>}</>
    );
}

export default CardList;