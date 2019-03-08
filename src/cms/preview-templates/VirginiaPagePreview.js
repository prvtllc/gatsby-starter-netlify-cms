import React from 'react'
import PropTypes from 'prop-types'
import { VirginiaPageTemplate } from '../../templates/virginia-page'

const VirginiaPagePreview = ({ entry, widgetFor }) => (
  <VirginiaPageTemplate
    title={entry.getIn(['data', 'title'])}
    content={widgetFor('body')}
  />
)

VirginiaPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default VirginiaPagePreview
