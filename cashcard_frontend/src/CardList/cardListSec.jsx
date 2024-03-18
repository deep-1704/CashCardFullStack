import CardList from "./cardList";
import NoCards from "./noCards";

function CardListSec(){
    let isLoggedin = ((localStorage.getItem("username") !== null)&&(localStorage.getItem("username") !== "deep"));
    return(
        <>
            {isLoggedin? <CardList />:<NoCards text="PLease login/register to continue"/>}
        </>
    );
}

export default CardListSec;