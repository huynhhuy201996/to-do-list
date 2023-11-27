import { createContext, useContext } from "react";

const defaultVAlue = {
    email: '',
    photoURL: '',
    displayName: '',
};

const UserContext = createContext(defaultVAlue);

export default UserContext;
