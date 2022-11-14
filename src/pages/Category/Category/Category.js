import React, { useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import NewsSummeryCard from '../../Shared/NewsSummeryCard/NewsSummeryCard';

const Category = () => {
    const categorisNews = useLoaderData();
    return (
        <div>
            <h2>This category has news of: {categorisNews.length}</h2>
            {
                categorisNews.map(news => <NewsSummeryCard
                    key={news._id}
                    news={news}
                ></NewsSummeryCard>)
            }
        </div>
    );
};

export default Category;