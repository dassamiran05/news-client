import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../../../hooks/useTitle';

const News = () => {
    const singleNews = useLoaderData();
    const { _id, title, author, total_view, details, image_url, rating, category_id } = singleNews;
    useTitle('News Detail');
    return (
        <div>
            <Card>
                <Card.Img variant="top" src={image_url} />
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <Link to={`/category/${category_id}`}>
                        <Button variant="primary">All news in this Category</Button>
                    </Link>

                </Card.Body>
            </Card>
        </div>
    );
};

export default News;