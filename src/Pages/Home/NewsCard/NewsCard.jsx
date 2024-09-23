import React from 'react';
import { Image } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { CiBookmark } from "react-icons/ci";
import moment from 'moment';
import { IoShareSocialOutline , } from "react-icons/io5";
import { FaEye } from 'react-icons/fa';



const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author , total_view } = news;
  return (
    <Card className="mb-4">
      <Card.Header className='d-flex align-item-center'>
        <Image style={{ height: "40px" }} src={author.img} roundedCircle />
        <div className='ps-2 flex-grow-1'>
          <p>{author?.name}</p>
          <p>{moment(author?.published_date).format('yyyy-MM-D')}</p>
        </div>
        <div>
        <CiBookmark />
        <IoShareSocialOutline />
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> :
            <>{details.slice(0, 250)}... <Link to={`/news/${_id}`}>read more</Link> </>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted">
        div

      </Card.Footer>
    </Card>
  );
};

export default NewsCard;