import styled from 'styled-components';
import { keyframes } from 'styled-components';

const spin = keyframes`
    0%          { transform:rotate(0deg);
                  -webkit-transform:rotate(0deg); }
    50%         { transform:rotate(180deg);
                  -webkit-transform:rotate(180deg) }
    100%        { transform:rotate(360deg);
                  -webkit-transform:rotate(360deg); }
`
export const SpinnerOverlay = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow:column;
`;

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-radius: 50%;
  border-top-color: #636767;
  animation: ${spin} 1s infinite linear;


  @keyframes spin {
    0%          { transform:rotate(0deg);
                  -webkit-transform:rotate(0deg); }
    50%         { transform:rotate(180deg);
                  -webkit-transform:rotate(180deg) }
    100%        { transform:rotate(360deg);
                  -webkit-transform:rotate(360deg); }
  }

  @-webkit-keyframes spin {
      0%          { -webkit-transform:rotate(0deg); }
      50%         { -webkit-transform:rotate(180deg); }
      100%        { -webkit-transform:rotate(360deg); }
  }

  @-moz-keyframes spin {
    0%          { -moz-transform:rotate(0deg); }    
    50%         { -moz-transform:rotate(180deg); }
    100%        { -moz-transform:rotate(360deg); }
  }
`;