import React from 'react'
import { Breadcrumb } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const BreadCrumbs = () => (
  <Breadcrumb>
    <Breadcrumb.Item>
      <Link to={'/'}>Search</Link>
    </Breadcrumb.Item>
    <Breadcrumb.Item active>Results</Breadcrumb.Item>
  </Breadcrumb>
)
export default BreadCrumbs
