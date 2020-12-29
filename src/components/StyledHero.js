import styled from 'styled-components'
import DefaultImg from '../images/room-6.jpeg'

const StyleHero = styled.header`
min-height: 60vh;
background: url(${props => props.img?props.img:DefaultImg}) center/cover no-repeat;
display: flex;
align-items: center;
justify-content: center;

`
export default StyleHero