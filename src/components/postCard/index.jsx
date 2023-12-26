import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./index.css";

const PostCard = ({ postItem }) => {
  return (
    <>
      {postItem.map((post, index) => (
        <Row className="custom-post-row" key={index}>
          <Col lg={4}>
            <Link to={post.postPath}>
              <div className="postImage">
                <Image width={"100%"} src={post.postImage} />
                <div className="date-box">
                  <span className="day">{post.date}</span>
                  <span className="month">{post.month}</span>
                </div>
              </div>
            </Link>
          </Col>
          <Col lg={8}>
            <div>
              <div className="preview">
                <h3>
                  <Link className="previewLink" to={post.postPath}>{post.postTitle}</Link>
                </h3>
                {post.postDiscritption && <p>{post.postDiscritption}</p>}
                <Link to={post.postPath}>Leggi la news »</Link>
              </div>
            </div>
          </Col>
        </Row>
      ))}
    </>
  );
};

export default PostCard;
