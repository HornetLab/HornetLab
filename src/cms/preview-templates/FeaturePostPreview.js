import React from 'react'
import PropTypes from 'prop-types'
import { FeaturePostTemplate } from '../../templates/feature-post'

const FeaturePostPreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <FeaturePostTemplate
        featuredImage={getAsset(data.featuredImage)}
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

FeaturePostPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default FeaturePostPreview
