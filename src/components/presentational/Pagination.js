import React from 'react'
import { Pagination } from 'react-bootstrap'

const NewsPagination = ({
  searchResults,
  pageSize,
  page,
  onPaginationItemClick
}) => (
  <Pagination>
    <Pagination.First
      disabled={searchResults.total <= pageSize}
      onClick={() => {
        onPaginationItemClick(1)
      }}
    />
    <Pagination.Prev
      disabled={searchResults.total <= pageSize}
      onClick={() => {
        onPaginationItemClick(page - 1)
      }}
    />
    <Pagination.Next
      disabled={searchResults.total <= pageSize}
      onClick={() => {
        onPaginationItemClick(page + 1)
      }}
    />
    <Pagination.Last
      disabled={searchResults.total <= pageSize}
      onClick={() => {
        onPaginationItemClick(Math.round(searchResults.total / pageSize))
      }}
    />
  </Pagination>
)

export default NewsPagination
