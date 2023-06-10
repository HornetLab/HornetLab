import React from 'react'
import PropTypes from 'prop-types'
import { PartnerItemTemplate } from '../../templates/partner-item'

const PartnerItemPreview = ({ entry, getAsset, widgetFor }) => {
  const data = entry.getIn(['data']).toJS()

  if (data) {
    return (
      <PartnerItemTemplate
        title={data.title}
        partnerImage={getAsset(data.partnerImage)}
        partnerLink={data.description}
        // content={widgetFor('body')}
      />
    )
  } else {
    return <div>Loading...</div>
  }
}

PartnerItemPreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  getAsset: PropTypes.func,
  widgetFor: PropTypes.func,
}

export default PartnerItemPreview
