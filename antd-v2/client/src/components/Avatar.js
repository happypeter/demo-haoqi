import styled from 'styled-components'

const Avatar = styled.div`
  width: ${props => props.size}px;
  height: ${props => props.size}px;
  background-image: url(${props => props.avatar});
  border-radius: 50%;
  background-size: ${props => props.size * 1.5}px;
  background-position: center center;
`

export default Avatar
