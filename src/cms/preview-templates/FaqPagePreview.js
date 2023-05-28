import React from 'react'
import PropTypes from 'prop-types'
import { FaqPageTemplate } from '../../templates/faq-page'

const FaqPagePreview = ({ entry, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <FaqPageTemplate
        title={data.title}
        // title={entry.getIn(['data', 'title'])}
        description={data.description}
        // description={entry.getIn(['data', 'description'])}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

FaqPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default FaqPagePreview
