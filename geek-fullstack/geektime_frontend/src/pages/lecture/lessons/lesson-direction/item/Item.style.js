import styled from "styled-components";

export const Tab = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    width: calc(33.333% - 5px);
    padding: 0 6px;
    height: 47px;
    line-height: 18px;
    margin-bottom: 7px;
    margin-right: 7px;
    text-align: center;
    font-size: 13px;
    font-weight: bold;
    color: #4c4c4c;
    word-break: break-all;
    line-height: 1.6;
    overflow: hidden; 
    background: #f6f7fb;
    border-radius: 6px; 
    box-sizing: border-box;
    text-align: center;
    font-family: "PingFang SC", "Lantinghei SC", "Microsoft Yahei", "Hiragino Sans GB", "Microsoft Sans Serif", "WenQuanYi Micro Hei", Helvetica, sans-serif;
    :nth-child(2n-1) {
        color: #ae7145;
        background: #fbf5ee;
    }
    :nth-child(3n) {
        margin-right: 0; 
    } 
`;