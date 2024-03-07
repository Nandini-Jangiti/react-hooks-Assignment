import React, { useEffect, useReducer, useRef } from 'react';

const mockApi = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                name: 'Nandini',
                country: 'India',
                gender: 'Female',
                pan: '123456789'
            });
        }, 2000);
    });
};

const profileReducer = (state, action) => {
    switch (action.type) {
        case 'FETCH_SUCCESS':
            return {
                ...state,
                loading: false,
                profileData: action.payload
            };
        case 'FETCH_ERROR':
            return {
                ...state,
                loading: false,
                error: action.payload
            };
        default:
            return state;
    }
};

const useProfileData = () => {
    const isMounted = useRef(true); // useRef to track mounted state
    const [state, dispatch] = useReducer(profileReducer, {
        loading: true,
        error: null,
        profileData: {}
    });

    useEffect(() => {
        return () => {
            isMounted.current = false; // isMounted to false when component unmounts
        };
    }, []);

    useEffect(() => {
        mockApi()
            .then(data => {
                if (isMounted.current) { // Check if component is still mounted
                    dispatch({ type: 'FETCH_SUCCESS', payload: data });
                }
            })
            .catch(error => {
                if (isMounted.current) { // Check if component is still mounted
                    dispatch({ type: 'FETCH_ERROR', payload: error.message });
                }
            });
    }, [isMounted]); // useEffect dependency array

    return state;
};

const ProfilePage = () => {
    const { loading, error, profileData } = useProfileData();

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Profile</h2>
            <p>Name: {profileData.name}</p>
            <p>Country: {profileData.country}</p>
            <p>Gender: {profileData.gender}</p>
            <p>PAN: {profileData.pan}</p>
        </div>
    );
};

export default ProfilePage;
