import CMS from 'netlify-cms-app'
import uploadcare from 'netlify-cms-media-library-uploadcare'
import cloudinary from 'netlify-cms-media-library-cloudinary'

import IndexPagePreview from './preview-templates/IndexPagePreview'
import DonatePagePreview from './preview-templates/DonatePagePreview'
import FaqPagePreview from './preview-templates/FaqPagePreview'
import FeaturePostPreview from './preview-templates/FeaturePostPreview'
// import BlogPostPreview from './preview-templates/BlogPostPreview'

CMS.registerMediaLibrary(uploadcare)
CMS.registerMediaLibrary(cloudinary)

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('donate', DonatePagePreview)
CMS.registerPreviewTemplate('faq', FaqPagePreview)
CMS.registerPreviewTemplate('feature', FeaturePostPreview)
// CMS.registerPreviewTemplate('blog', BlogPostPreview)
