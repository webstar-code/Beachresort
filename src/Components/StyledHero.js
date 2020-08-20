import styled from 'styled-components';


const StyledHero = styled.header`
  min-height: calc(100vh - 66px);
  background: url(${props => props.img}) center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: -1;
`

export default StyledHero;