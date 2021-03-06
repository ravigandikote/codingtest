import React from 'react'
import { Button } from 'react-bootstrap'

const PageSizeButton = ({ pageSize, value, handlePageSize }) => (
  <Button
    variant={pageSize === value ? 'info' : 'outline-info'}
    onClick={() => {
      handlePageSize(value)
    }}
  >
    {value}
  </Button>
)

export default PageSizeButton
