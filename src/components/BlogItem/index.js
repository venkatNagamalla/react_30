// Write your JS code here
import {Component} from 'react'
import './index.css'
import {Link} from 'react-router-dom'

class BlogItem extends Component {
  render() {
    const {blogDetails} = this.props
    const {id, imageUrl, avatarUrl, title, topic, author} = blogDetails
    console.log(id)
    return (
      <Link className="link-item-container" to={`/blogs/${id}`}>
        <li className="blog-item-container">
          <img className="image" src={imageUrl} alt="img" />
          <div className="details-container">
            <p className="topic-text">{topic}</p>
            <h1 className="title-text">{title}</h1>
            <div className="avatar-container">
              <img className="avatar" src={avatarUrl} alt="avatar" />
              <p className="author-text">{author}</p>
            </div>
          </div>
        </li>
      </Link>
    )
  }
}

export default BlogItem
