/* eslint-disable react-refresh/only-export-components */
import {createContext,useContext,useState} from 'react';


export const AuthContext = createContext();

export const useAuthContext = () => {
    return useContext(AuthContext);
}

export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

    // useEffect(() => {
    //     const user = localStorage.getItem("user");
    //     if (user) {
    //         setUser(JSON.parse(user));
    //     }
    // }, []);
    return (
        <AuthContext.Provider value={{ user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
}