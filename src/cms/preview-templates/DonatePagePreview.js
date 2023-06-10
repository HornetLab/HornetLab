import React from 'react'
import PropTypes from 'prop-types'
import { DonatePageTemplate } from '../../templates/donate-page'

const DonatePagePreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <DonatePageTemplate
        heroImage={getAsset(data.heroImage)}
        heroTitle={data.heroTitle}
        heroSubtitle={data.heroSubtitle}
        content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

DonatePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default DonatePagePreview
