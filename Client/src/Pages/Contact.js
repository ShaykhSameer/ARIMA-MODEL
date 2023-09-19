import React from "react";
import Card from "../Components/Card";
import developers from "../developers";
function contactMapping(oneContact)
{
return(
    <Card
    name={oneContact.name}
    mail={oneContact.email}
    tel={oneContact.phone}
    />
);
}
function Contact()
{
return(
    <div className="heading">
        <h1>Developers</h1>
{developers.map(contactMapping)}
</div>
);
}
export default Contact;