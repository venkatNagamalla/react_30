// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import './index.css'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogItemDetails extends Component {
  state = {blogDetails: {}, isLoading: true}

  componentDidMount() {
    this.getSingleBlog()
  }

  getSingleBlog = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      id: data.id,
      author: data.author,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      title: data.title,
      topic: data.topic,
      content: data.content,
    }
    this.setState({blogDetails: updatedData, isLoading: false})
  }

  render() {
    const {blogDetails, isLoading} = this.state
    const {title, imageUrl, avatarUrl, author, content} = blogDetails
    return (
      <>
        {isLoading ? (
          <Loader type="TailSpin" color="#00BFFF" height="50" width="50" />
        ) : (
          <div className="blog-details-container">
            <h1 className="title">{title}</h1>
            <div className="avatar-container">
              <img className="avatar" src={avatarUrl} alt="avatar" />
              <p className="author-name">{author}</p>
            </div>
            <img className="image-url" src={imageUrl} alt={title} />
            <p className="content">{content}</p>
          </div>
        )}
      </>
    )
  }
}

export default BlogItemDetails
