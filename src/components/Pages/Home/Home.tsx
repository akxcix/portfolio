import React from "react";
import styled, {keyframes} from "styled-components";
import Theme from "../../../common/Theme";

const Blink = keyframes`
    0%   { border-bottom-color: ${Theme.green}; }
    50%  { border-bottom-color: ${Theme.green}; }
    51%  { border-bottom-color: transparent; }
    100% { border-bottom-color: transparent; }
`

const StyledHome = styled.div`
    h6 {
        font-family: Menlo, Consolas, monospace;
        position: absolute;
        top: 50%;
        left: 50%;
        margin: 0;
        transform: translate(-50%, -50%);
        font-size: 12px;
        font-weight: normal;
        color: ${Theme.white};
    }
    h6 span {
        color: ${Theme.secondary};
    }
    h6 i {
        font-style: normal;
        border-bottom: 1px solid ${Theme.green};
        animation: ${Blink} 1s infinite;
    }
`;

const Home = () => {
    return (
        <div className="Home">
            <StyledHome>
            <h6><span>{'>'}</span> adarsh<span>kumar<i>.</i>io</span></h6>
            </StyledHome>
        </div>
    )
}

export default Home;