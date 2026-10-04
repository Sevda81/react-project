import { Link, Outlet } from "react-router-dom";
import MyNavbar from "../../components/navbar/Navbar";
import './Article.css'
import ArticleIteme from "../../components/article/ArticleIteme";
import { Row,Col, Container} from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
function Article() {
  const [articles , setArticles] =useState([]);
  useEffect (()=>{
    axios.get('http://localhost:5000/articles')
    .then((response)=> setArticles(response.data));
  }, [])
  return (
    <div className="articleWrapper">
   
      <MyNavbar />
      <Container>
      <h2 style={{marginTop : '20px'}}>لیست مقالات</h2>
      
      <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
        
        {articles.map(article =>(
          <Col key={article.id}>
            <ArticleIteme{...article} />
          </Col>
        ))}
      </Row>

      
      {/* <div className="btnContainer">
        <Link to='php' className='linkBtn'>php article</Link>
        <Link to='js' className='linkBtn'>js article</Link>
        <Link to='react' className='linkBtn'>react article</Link>
      </div>
      <hr />

      <Outlet /> */}

      
      </Container>
    </div>
  );
}
export default Article;