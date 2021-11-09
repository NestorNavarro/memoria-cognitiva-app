import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams }   from 'react-router';

import DetailsTestPage from './DetailsTestPage';
import { setSLR }      from '../../store/Actions/statisticsActions';

const DetailsTestPageContainer = () => {
    const { id, average }   = useParams();
    const {slr, chartData} = useSelector(state => state.statistics);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setSLR(id));    
    }, [dispatch, id]);

    return (
        <DetailsTestPage 
            delegations={{
                slr, 
                average,
                chartData,
            }}
        />
    );
};
export default DetailsTestPageContainer;
