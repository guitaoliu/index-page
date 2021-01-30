import React from 'react'
import PropTypes from 'prop-types'

import Chip from '@material-ui/core/Chip'

const SocialBadge = (props) => {
  const { site, icon, link } = props
  return (
    <Chip
      avatar={icon}
      label={site}
      component="a"
      href={link}
      clickable
      variant="outlined"
    />
  )
}

SocialBadge.propTypes = {
  site: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
  link: PropTypes.string.isRequired,
}

export default SocialBadge
