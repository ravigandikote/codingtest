import React, { useState } from 'react'
import Input from 'components/presentational/Input'
import { Container, Row, Col, Button } from 'react-bootstrap'
import { useHistory, withRouter } from 'react-router-dom'
import { getSearchTags } from 'store/actions/appActions'
import { connect } from 'react-redux'
import TagBadge from 'components/presentational/TagBadge'

function SearchContainer (props) {
  var history = useHistory()
  const { getSearchTags, tags } = props
  const [searchText, setSearchText] = useState('')
  const [searchTags, setSearchTags] = useState(tags)

  function handleChange (event) {
    setSearchText(event.target.value)
    getSearchTags({
      query: event.target.value
    }).then(res => {
      setSearchTags(res.payload.response)
    })
  }

  function onSearchBtnClick () {
    setSearchTags(null)
    history.push('/results/' + searchText)
  }

  function onSearchTagClick (tag) {
    setSearchText(tag)
  }

  return (
    <>
      <Container
        style={{
          backgroundColor: '#9FA2AD',
          textAlign: 'center',
          verticalAlign: 'middle',
          border: '1px solid #20639B'
        }}
      >
        <Row
          style={{ backgroundColor: '#20639B', color: '#FFF', padding: '20px' }}
        >
          <Col md={12}>
            <h2>News Lister</h2>
          </Col>
        </Row>
        <Row
          style={{
            backgroundColor: 'white',
            textAlign: 'center',
            padding: '20px'
          }}
        >
          <Col md={3}>
            <h3>Search Text</h3>
          </Col>
          <Col md={'10'}>
            <Input
              type='text'
              id='search_text'
              value={searchText}
              handleChange={handleChange}
            />
            {searchTags &&
              searchTags.results.map((tag, i) => {
                return (
                  <TagBadge
                    key={tag.webTitle + i}
                    tag={tag}
                    onTagClick={onSearchTagClick}
                  />
                )
              })}
          </Col>
          <Col md={2} style={{ display: 'inline-flex' }}>
            <Button variant='primary' onClick={onSearchBtnClick}>
              Search
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}

const mapStateToProps = state => {
  return {
    tags: state.getIn(['app', 'tags'])
  }
}

const mapDispatchToProps = dispatch => {
  return {
    getSearchTags: searchObj => dispatch(getSearchTags(searchObj))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(SearchContainer))
