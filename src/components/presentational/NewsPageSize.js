import React from 'react'
import { ButtonGroup } from 'react-bootstrap'
import PageSizeButton from './PageSizeButton'
import { PAGE_SIZES_LIST } from 'config/Constants'

const pageSizesArr = PAGE_SIZES_LIST

const NewsPageSize = ({ pageSize, handlePageSize }) => (
  <ButtonGroup className='mr-2' aria-label='First group'>
    {pageSizesArr.map((size, i) => {
      return (
        <PageSizeButton
          key={size + i}
          pageSize={pageSize}
          value={size}
          handlePageSize={handlePageSize}
        />
      )
    })}
  </ButtonGroup>
)

export default NewsPageSize
