import React from 'react';
import imageNotFound from './Image/notFound.jpg'

const NewsItem = (props) => {
    return (
        <div>
            <div className='card' >
                <img className='image' src={props.imageUrl ? props.imageUrl : imageNotFound} alt="Image Not Found" />
                <div className="card_body">
                    <h4 className="card_title">{props.title}</h4>
                    <p className="card_description">{props.description}</p>

                    <p className='author'>By {props.author ? props.author : "unknown"} on {new Date(props.date).toGMTString()} </p>
                    <a className='btn' rel='noreferrer' href={props.newsUrl} target='_blank'>Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem