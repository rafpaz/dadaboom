import React, { Component } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Preloader from '../Preloader/Preloader';
import PostSection from './PostSection';
import Footer from '../Footer/Footer';
import PostHeader from './PostHeader';
import Contact from '../Contact/Contact';
import '../../styles/blog.scss';
import Plugins from '../Home/plugins';
import { PostProvider } from './PostContext';
import TopButton from './TopButton';

class Post extends Component {
  state = {
    postData: null,
  };

  async componentDidMount() {
    const { match } = this.props;
    const result = await axios.get(`/api/posts/byUrl/${match.params.postUrl}`);
    const { data } = result;
    data.tags = data.tags.split(',');
    this.setState({
      postData: data,
    });
    Plugins.handlePreloader();
  }

  render() {
    const { postData } = this.state;
    return (
      <PostProvider value={postData}>
        { postData != null ? (
          <>
            <PostHeader />
            <PostSection
              postData={postData}
            />
            <Contact
              source="Post"
            />
            <Footer />
            <TopButton />
          </>
        ) : (<Preloader />)
        }
      </PostProvider>
    );
  }
}

export default Post;
