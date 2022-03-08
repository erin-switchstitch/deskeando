export default function DeskListBooker(){

    console.log("BOOKER RUN") ;

    return (
        <div className="bookingDropdown">
            <form>
                <label htmlFor="fname">First name:</label>
                <input type="text" id="fname" name="fname" value="John"></input>
                <label htmlFor="lname">Last name:</label>
                <input type="text" id="lname" name="lname" value="Doe"></input>
            </form>
        </div>

    );

}
