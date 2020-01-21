import React, { useState, useEffect } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import { getSearchTags } from 'store/actions/appActions'
import { connect } from 'react-redux'

import Input from 'presentational/Input'
import TagBadge from 'presentational/TagBadge'
import {
  Container,
  Box,
  BoxTitle,
  SearchFieldBox,
  BoxTitleDiv,
  BoxTextDiv,
  Button,
  TagsBox
} from './styles'
import { SEARCH_TEXT_FIELD_PLACEHOLDER } from 'config/Constants'
import { useDebouncedCallback } from 'use-debounce'

function SearchContainer (props) {
  var history = useHistory()
  const { getSearchTags, tags } = props
  const [searchText, setSearchText] = useState('')

  const [debouncedCallback] = useDebouncedCallback(value => {
    setSearchText(value)
    getSearchTags({
      query: value
    }).then(res => {
      setSearchTags(res.payload.response)
    })
  }, 1000)

  const [searchTags, setSearchTags] = useState(tags)

  useEffect(
    () => {
      setSearchTags(null)
    },
    [searchText === '']
  )

  function onSearchBtnClick () {
    setSearchTags(null)
    history.push('/results/' + searchText)
  }

  function onSearchTagClick (tag) {
    setSearchText(tag)
  }

  function onInputKeyDown (e) {
    if (e.key === 'Enter') {
      setSearchTags(null)
      history.push('/results/' + searchText)
    }
  }

  return (
    <>
      <Container>
        <Box>
          <BoxTitleDiv>
            <BoxTitle>News List</BoxTitle>
          </BoxTitleDiv>
          <BoxTextDiv>
            <SearchFieldBox>
              <Input
                type='text'
                placeholder={SEARCH_TEXT_FIELD_PLACEHOLDER}
                id='search_text'
                value={searchText}
                handleChange={e =>
                  setSearchText(e.target.value) &
                  debouncedCallback(e.target.value)
                }
                onInputKeyDown={onInputKeyDown}
              />
              <TagsBox>
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
              </TagsBox>
              <Button primary onClick={onSearchBtnClick}>
                Search
              </Button>
            </SearchFieldBox>
          </BoxTextDiv>
        </Box>
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
