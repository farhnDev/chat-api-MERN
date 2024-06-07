import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useAuthContext } from '../context/AuthContext';

const useLogout = () => {
    const [loading, setLoading] = useState(false);
    const {setUser} = useAuthContext();

    const logout = async () => {
        setLoading(true);
        try {
            const response = await fetch("/api/auth/logout", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
            });

            const data = await response.json();
            if (data.error) {
                throw new Error(data.error);
            }
            localStorage.removeItem("user");
            setUser(null);
            toast.success("Logout successfully");
        } catch (error) {
            console.log(error.message)
            toast.error("An error occurred");
        } finally {
            setLoading(false);
        }
    }
    return { loading, logout };
}

export default useLogout
