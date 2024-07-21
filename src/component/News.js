import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';
import Loader from './spinner'
import '../App.css';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component"

const News = (props) => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1)
  }

  const updateNews = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
    setLoading(true);
    
    let response = await fetch(url);
    let data = await response.json();
   
    setArticles(data.articles);
    setTotalResults(data.totalResults);
    setLoading(false);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - New24Hours`
    updateNews();
  }, [])

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page+1}&pageSize=${props.pageSize}`
    setPage(page + 1)
    setLoading(true)
    let response = await fetch(url);
    let data = await response.json();
    
    setArticles(articles.concat(data.articles));
    setTotalResults(data.totalResults);
    setLoading(false)
  }

  return (
    <>
      <h2 className='heading'>{`News24Hours - Top ${capitalizeFirstLetter(props.category)} Headlines`}</h2>
      {loading && <Loader />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loader />}
      >
        <div className='container'>
          <div className="rows">
            {articles.map((element) => {
              return <div className="col" key={element.url}>
                <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : ""} newsUrl={element.url ? element.url : ""} author={element.author} date={element.publishedAt} />
              </div>
            })}
          </div>
        </div>
      </InfiniteScroll >
    </>
  )
}

News.defaultProps = {
  country: 'in',
  pageSize: 6,
  category: 'general'
}

News.defaultTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
}


export default News