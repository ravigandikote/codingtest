import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { getSearchResults } from 'store/actions/appActions'
import { connect } from 'react-redux'
import { Container, Row, Col } from 'react-bootstrap'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'
import BreadCrumbs from 'components/presentational/BreadCrumbs'
import NewsListTable from 'components/presentational/NewsListTable'
import NewsPagination from 'components/presentational/Pagination'
import NewsPageSize from 'components/presentational/NewsPageSize'

function ResultsContainer (props) {
  const { getSearchResults, results } = props

  const override = css`
    display: block;
    margin: 0 auto;
    border-color: black;
  `

  let [page, setPage] = useState(1)
  let [searchResults, setSearchResults] = useState(results)
  let [pageSize, setPageSize] = useState(10)
  let [searchText, setSearchText] = useState(props.match.params.searchText)
  let [loading, setLoading] = useState(false)
  // let [fetching, setFetching] = useState(false)

  useEffect(
    () => {
      setLoading(true)
      getSearchResults({
        query: searchText,
        page: page,
        pageSize: pageSize
      }).then(res => {
        setSearchResults(res.payload.response)
        setLoading(false)
      })
    },
    [searchResults !== null]
  )

  function handlePageSize (size) {
    setSearchResults(null)
    setPage(1)
    setPageSize(size)
  }

  function viewDetails (url) {
    window.open(url, '_blank')
  }

  function onTagClick (tagTitle) {
    setSearchResults(null)
    setPage(1)
    setSearchText(tagTitle)
  }

  function onPaginationItemClick (page) {
    setSearchResults(null)
    setPage(page)
  }

  function renderPagination () {
    return (
      <div>
        <NewsPagination
          page={page}
          searchResults={searchResults}
          pageSize={pageSize}
          onPaginationItemClick={onPaginationItemClick}
        />
      </div>
    )
  }

  return (
    <>
      <Container fluid>
        <BreadCrumbs />
        <Row>
          <Col md={('auto', { offset: 1 })}>
            <h3>Results</h3>
          </Col>
        </Row>
        <Row>
          <Col md={{ span: 10, offset: 1 }}>
            <ClipLoader
              css={override}
              size={50}
              color={'#123abc'}
              loading={loading}
            />
            {!loading && searchResults && searchResults.results.length > 0 ? (
              <NewsListTable
                onTagClick={onTagClick}
                searchResults={searchResults}
                viewDetails={viewDetails}
              />
            ) : (
              <h5
                style={{
                  textAlign: 'center',
                  display: loading ? 'none' : 'block'
                }}
              >
                No items to show ... Try with different{' '}
                <Link to={'/'}>search</Link>
              </h5>
            )}
          </Col>
        </Row>
        {searchResults && searchResults.results.length > 0 && (
          <Row className='justify-content-md-center'>
            <Col md={('auto', { offset: 1 })}>
              <h5>Pagination</h5> {renderPagination()}
            </Col>
            <Col md={('auto', { offset: 7 })}>
              <h5>Page Size</h5>
              <NewsPageSize
                pageSize={pageSize}
                handlePageSize={handlePageSize}
              />
            </Col>
          </Row>
        )}
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    results: state.getIn(['app', 'results'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearchResults: searchObj => dispatch(getSearchResults(searchObj))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(ResultsContainer))
