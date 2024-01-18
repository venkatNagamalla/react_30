// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import BlogItem from '../BlogItem'
import './index.css'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

class BlogList extends Component {
  state = {blogList: [], isLoading: true}

  componentDidMount() {
    this.getBlogsList()
  }

  getBlogsList = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(eachBlog => ({
      title: eachBlog.title,
      id: eachBlog.id,
      topic: eachBlog.topic,
      author: eachBlog.author,
      imageUrl: eachBlog.image_url,
      avatarUrl: eachBlog.avatar_url,
    }))
    this.setState({blogList: updatedData, isLoading: false})
  }

  render() {
    const {blogList, isLoading} = this.state
    return (
      <div className="spinner-container">
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height="50" width="50" />
          </div>
        ) : (
          <ul className="all-blog-item-container">
            {blogList.map(eachBlog => (
              <BlogItem key={eachBlog.id} blogDetails={eachBlog} />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default BlogList
