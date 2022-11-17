import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Home = () => {
    const allnews = useLoaderData();
    useTitle('Home');
    return (
        <div>
            {/* <h2>This is home component: {allnews.length}</h2> */}
            {
                allnews.map(news => <NewsSummeryCard
                key={news._id}
                news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Home;