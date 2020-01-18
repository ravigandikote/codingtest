import React from 'react'
import { Button, Table } from 'react-bootstrap'
import DefaultImage from 'assets/images/default-thumbnail.jpg'
import TagBadge from './TagBadge'

const NewsListTable = ({ searchResults, onTagClick, viewDetails }) => (
  <Table responsive>
    <thead>
      <tr>
        <th>Thumbnail</th>
        <th>Headline</th>
        <th>Type</th>
        <th>Details</th>
        <th>Keywords</th>
        <th>Actions</th>
      </tr>
    </thead>
    <tbody>
      {searchResults &&
        searchResults.results.map((item, index) => {
          return (
            <tr key={index}>
              <td>
                <img
                  style={{ width: 50, height: 50, cursor: 'pointer' }}
                  onClick={() => {
                    viewDetails(item.webUrl)
                  }}
                  src={
                    item.fields.thumbnail ? item.fields.thumbnail : DefaultImage
                  }
                />
              </td>
              <td>
                <h6
                  style={{ cursor: 'pointer', color: '#20639B' }}
                  onClick={() => {
                    viewDetails(item.webUrl)
                  }}
                >
                  {item.fields.headline}
                </h6>
              </td>
              <td>
                <h6>{item.type}</h6>
              </td>
              <td>
                <h6>{item.webTitle}</h6>
              </td>
              <td>
                {item.tags &&
                  item.tags.map((tag, i) => {
                    return (
                      <TagBadge
                        key={tag.webTitle + i}
                        tag={tag}
                        onTagClick={onTagClick}
                      />
                    )
                  })}
              </td>
              <td>
                <Button
                  variant='outline-info'
                  onClick={() => {
                    viewDetails(item.webUrl)
                  }}
                >
                  View
                </Button>
              </td>
            </tr>
          )
        })}
    </tbody>
  </Table>
)

export default NewsListTable
