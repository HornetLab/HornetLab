import React from 'react'
import PropTypes from 'prop-types'
import { BlogPostTemplate } from '../../templates/blog-post'

const BlogPostPreview = ({ entry, widgetFor }) => {
  const tags = entry.getIn(['data', 'tags'])
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <BlogPostTemplate
        title={data.title}
        // title={entry.getIn(['data', 'title'])}
        description={data.description}
        // description={entry.getIn(['data', 'description'])}
        content={widgetFor('body')}
        tags={tags && tags.toJS()}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

BlogPostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default BlogPostPreview
