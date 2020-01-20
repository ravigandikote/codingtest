import React from 'react'
import { Badge } from 'react-bootstrap'

const TagBadge = ({ tag, onTagClick }) => (
  <Badge
    style={{ cursor: 'pointer', margin: '5px' }}
    pill
    variant='info'
    onClick={() => {
      onTagClick(tag.webTitle)
    }}
  >
    {tag.webTitle}
  </Badge>
)

export default TagBadge
