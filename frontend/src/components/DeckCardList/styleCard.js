import styled from 'styled-components';

export const StyledCard = styled.div.attrs((props) => ({
  // set dynamic rotation using props
  rotation: props.rotation || '0',
  // heightfrombutton: props.heightfrombutton || '0'
}))`
  transform: rotate(${(props) => props.rotation}deg);

  background: white;
  width: 192px;
  height: 264px;
  border-radius: 24px;
  display: flex;
  flex-direction: column;

  margin-top: 102px;
  margin-bottom: 102px;

  span {
    font-family: Courier Prime;
    font-size: 90px;
    font-style: normal;
    font-weight: 700;
    line-height: 101px;
    letter-spacing: 0em;
    text-align: center;
    color: black;

    margin-left: 10%;
    margin-right: auto;
  }
`;

export const SmallSuit = styled.img`
  height: 36px;
  width: 36px;

  margin-left: 15%;
  margin-right: auto;
`;

export const BigSuit = styled.img`
  height: 90px;
  width: 90px;

  margin-left: auto;
  margin-right: 15%;
`;
