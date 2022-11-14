import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image'
import { FaRegBookmark, FaRegEye, FaShareAlt, FaStar } from 'react-icons/fa';

const NewsSummeryCard = ({ news }) => {
    // console.log(news);
    const { _id, title, author, total_view, details, image_url, rating } = news;
    return (
        <div className='mb-3'>
            <Card>
                <Card.Header className='d-flex justify-content-between align-items-center'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <Image
                            roundedCircle
                            src={author?.img}
                            style={{ height: '60px', width: '60px', marginRight:'15px'}}
                        ></Image>
                        <div>
                            <h5 className='mb-0'>{author?.name}</h5>
                            <p className='mb-0'>{author?.published_date}</p>
                        </div>
                    </div>
                    <div>
                        <FaRegBookmark className='me-2'></FaRegBookmark>
                        <FaShareAlt></FaShareAlt>
                    </div>
                </Card.Header>
                <Card.Body>
                    <Card.Title>{title}</Card.Title>
                    <Card.Img variant="top" src={image_url} />
                    <Card.Text>
                        {
                            details.length > 150 ?
                                <p>{details.slice(0, 250) + '...'}<Link to={`/news/${_id}`}>Read more</Link></p>
                                :
                                <p>{details}</p>
                        }
                    </Card.Text>
                </Card.Body>
                <Card.Footer className='d-flex justify-content-between align-items-center'>
                    <p className='mb-0'><FaStar className='me-1 text-warning'/> {rating?.number}</p>
                    <p className='mb-0'><FaRegEye className='me-1'/>{total_view}</p>
                </Card.Footer>
            </Card>
        </div>
    );
};

export default NewsSummeryCard;