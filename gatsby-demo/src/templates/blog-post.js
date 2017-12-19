import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'
import Helmet from 'react-helmet'

export default ({ data, pathContext }) => {
  const post = data.markdownRemark
  const { title } = data.indexJson
  const { next, prev } = pathContext
  return (
    <Wrap>
      <Helmet title={title} />
      <Title>
        {title}
      </Title>
      <div className='markdown-content'
        dangerouslySetInnerHTML={{ __html: post.html }}
      />
      <Nav>
        <div>
          {
            prev
            && <Link to={prev}>Prev</Link>
          }
        </div>
        <div>
          {
            next
            && <Link to={next}>Next</Link>
          }
        </div>
      </Nav>
    </Wrap>
  )
}

export const query = graphql`
  query BlogPostQuery($slug: String!, $pid: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
    }
    indexJson(id: {eq: $pid}) {
      title
    }
  }
`

const Wrap = styled.div`
  height: 100%;
  display: flex;
  padding-top: 20px;
  flex-direction: column;
  .markdown-content {
    padding: 20px;
    flex-grow: 1;
  }
`

const Nav = styled.div`
  background: #00bcd4;
  padding: 10px;
  color: white;
  display: flex;
  justify-content: space-between;
  a {
    color: white;
    display: block;
    padding: 10px;
  }
`

const Title = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 600px;
`
