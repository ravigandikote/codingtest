import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { getSearchResults } from 'store/actions/appActions'
import { connect } from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import { css } from '@emotion/core'
import ClipLoader from 'react-spinners/ClipLoader'
import BreadCrumbs from 'presentational/BreadCrumbs'
import NewsListTable from 'presentational/NewsListTable'
import NewsPagination from 'presentational/Pagination'
import NewsPageSize from 'presentational/NewsPageSize'
import { Container } from './styles'

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
    <Container>
      <Row style={{ width: '100%' }}>
        <Row style={{ width: '100%', display: loading ? 'none' : 'block' }}>
          <Col md={'12'}>
            <BreadCrumbs />
          </Col>
        </Row>

        <Row
          style={{
            width: '100%',
            marginLeft: '10',
            display: loading ? 'none' : 'block'
          }}
        >
          <Col md={{ span: 10, offset: 1 }}>
            {!loading && searchResults && searchResults.results.length > 0 && (
              <h4>Results</h4>
            )}
          </Col>
        </Row>
        <Row style={{ width: '100%' }}>
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
                  display: loading ? 'none' : 'block',
                  padding: 10
                }}
              >
                No items to show ... Try with different{' '}
                <Link to={'/'}>search</Link>
              </h5>
            )}
          </Col>
        </Row>
        {!loading && searchResults && searchResults.results.length > 0 && (
          <Row className='justify-content-md-center' style={{ width: '100%' }}>
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
      </Row>
    </Container>
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
