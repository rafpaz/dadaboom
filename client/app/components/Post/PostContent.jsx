import React from 'react';
import moment from 'moment';
import PropTypes from 'prop-types';
import PostText from './PostText';
import PostComments from './Comments/PostComments';
import 'moment/locale/he';
import { PostContentContainer, PostTitle, PostAuthor } from './postContentStyle';

const PostContent = ({
  _id, title, date, content, isAdmin,
}) => (
  <>
    <PostContentContainer>
      <PostTitle>{title}</PostTitle>
      <PostAuthor>
        <div>{moment(date).locale('he').format('LL')}</div>
      </PostAuthor>
      <PostText
        content={content}
      />
      <PostComments
        postId={_id}
        isAdmin={isAdmin}
      />
    </PostContentContainer>
  </>
);

PostContent.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  isAdmin: PropTypes.bool,
};

PostContent.defaultProps = {
  isAdmin: false,
};

export default PostContent;
