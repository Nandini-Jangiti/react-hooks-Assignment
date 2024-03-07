import React, { useContext } from 'react';
import useProfileData from './useProfileData';
import { UserContext } from './App';

const Dashboard = () => {
    const { loading, error, profileData } = useProfileData();
    const { username } = useContext(UserContext);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h2>Dashboard</h2>
            <p>Welcome: {username}</p>
            <p>Name: {profileData.name}</p>
            <p>Country: {profileData.country}</p>
            <p>Gender: {profileData.gender}</p>
            <p>PAN: {profileData.pan}</p>
        </div>
    );
};

export default Dashboard;
