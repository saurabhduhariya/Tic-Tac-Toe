import { toast } from 'react-toastify';

export const handleSuccess = (msg) => {
    toast.success(msg, {
        position: "top-right",
    });
};

export const handleError = (msg) => {
    toast.error(msg, {
        position: "top-right",
    });
};

export const isAuthenticated = () => {
    return localStorage.getItem('jwtToken') !== null;
};

export const getLoggedInUser = () => {
    return localStorage.getItem('loggedInUser');
};

export const logout = () => {
    localStorage.removeItem('jwtToken');
    localStorage.removeItem('loggedInUser');
};
