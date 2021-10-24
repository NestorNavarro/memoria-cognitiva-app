import React from 'react'
import { useSelector } from 'react-redux';
import DashboardPage  from './DashboardPage';

const DashboardPageContainer = () => {
    const { auth, test} = useSelector(state => state);

    return (
        <DashboardPage 
            auth={auth}
            test={test}
        />
    );
}
export default DashboardPageContainer;
