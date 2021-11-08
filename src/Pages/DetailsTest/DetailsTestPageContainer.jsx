import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useParams }   from 'react-router';

import DetailsTestPage from './DetailsTestPage';
import { setSLR }      from '../../store/Actions/statisticsActions';

const DetailsTestPageContainer = () => {
    const { id }   = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSLR(id));    
    }, [dispatch, id]);

    return (
        <DetailsTestPage />
    );
};
export default DetailsTestPageContainer;
