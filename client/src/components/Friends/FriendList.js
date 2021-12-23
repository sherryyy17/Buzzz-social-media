import axios from "axios";
import React, { useEffect, useState } from "react";

const FriendList = (props) => {
    const [firstName, setFirstName] = useState(null);
    const [lastName, setLastName] = useState(null);

    const { id } = props;
    useEffect(async () => {
           const user = await axios.get(`/api/users/${ id }`);
           setFirstName(user.data.firstName);
           setLastName(user.data.lastName);
    }, []);

    return <div>
            <img alt = "user dp" />
            <p>{firstName }{ lastName }</p>
        </div>
}

export default FriendList;