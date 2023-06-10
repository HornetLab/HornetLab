import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import DonatePagePreview from './preview-templates/DonatePagePreview'
import ProductItemPreview from './preview-templates/ProductItemPreview'
import PartnerItemPreview from './preview-templates/PartnerItemPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('donate', DonatePagePreview)
CMS.registerPreviewTemplate('feature', ProductItemPreview)
CMS.registerPreviewTemplate('feature', PartnerItemPreview)
