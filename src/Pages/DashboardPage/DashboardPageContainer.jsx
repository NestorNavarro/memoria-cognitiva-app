import React from 'react'
import { useSelector } from 'react-redux';
import DashboardPage  from './DashboardPage';

const DashboardPageContainer = () => {
    const { auth } = useSelector(state => state);

    return (
        <DashboardPage 
            auth={auth.userInfo}
        />
    );
}
export default DashboardPageContainer;
