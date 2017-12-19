import React from 'react'
import Link from 'gatsby-link'
import styled from 'styled-components'

export default ({ data }) => {
  const { edges: posts } = data.allIndexJson

  return (
    <ul>
      {
        posts.map(p => (
          <StyledLink key={p.node.id} to={`/posts/${p.node.id}`}>
            {p.node.title}
          </StyledLink>
        ))
      }
    </ul>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allIndexJson {
      edges {
        node {
          id,
          title
        }
      }
    }
  }
`

const StyledLink = styled(Link) `
  transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;
  display: block;
  line-height: 40px;
  padding-left: 10px;
  color: rgba(0, 0, 0, 0.87);
  &:hover {
    background: rgb(232, 232, 232);
  }
`
