import styled from "styled-components";

export const IntroductionWrap = styled.div`
  padding: 12px 0 30px 21px;
  width: 95%;
  min-height: 738px;
  box-sizing: border-box;
  background-color: #fff;
  border-top: 1px solid rgb(240, 240, 240);
  font-family: PingFang SC, Helvetica Neue, Verdana, Microsoft Yahei,
    Hiragino Sans GB, Microsoft Sans Serif, WenQuanYi Micro Hei, sans-serif;
  > div:nth-child(1) {
    border-bottom: 1px solid rgb(240, 240, 240);
    > div:first-child {
      position: relative;
      margin-bottom: 10px;
      padding-right: 14px;
      > h2 {
        position: relative;
        margin-top: 10px;
        margin-bottom: 13px;
        font-size: 16px;
        font-weight: 600;
        color: #404040;
      }
    }
    > div:nth-child(2) {
      margin-bottom: 20px;
      position: relative;
      padding-right: 21px;
      > div {
        max-height: none;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: 400;
        color: #353535;
        white-space: normal;
        word-break: break-word;
        line-height: 28px;
        overflow: hidden;
        > ul {
          list-style: none;
          > li {
            position: relative;
            margin-left: 14px;
            line-height: 28px;
            font-size: 15px;
            font-weight: 400;
            color: #353535;
            word-break: break-word;
            white-space: normal;
          }
          > li:after {
            content: "";
            position: absolute;
            top: 10px;
            left: -11px;
            width: 2px;
            height: 2px;
            border-radius: 50%;
            background: #888;
          }
        }
      }
    }
    > div:nth-child(3) {
      margin-top: -4px;
      position: relative;
      height: 1px;
      display: block;
    }
  }
  > div:nth-child(2) {
    border-bottom: 1px solid rgb(240, 240, 240);
    > div:first-child {
      position: relative;
      margin-bottom: 20px;
      padding-right: 14px;
      > h2 {
        position: relative;
        margin-top: 10px;
        margin-bottom: 13px;
        font-size: 16px;
        font-weight: 600;
        color: #404040;
      }
      > h2:before {
        content: "";
        width: 16px;
        height: 16px;
        display: block;
        background: linear-gradient(0deg, #f9f0e3, #efcea5);
        opacity: 0.5;
        position: absolute;
        left: -8px;
        border-radius: 50%;
        z-index: -1;
      }
    }
    > div:nth-child(2) {
      position: relative;
      margin: 12px 20px 6px 0;
      padding: 13px 8px;
      background: #f6f7fb;
      border-radius: 8px;
      > div {
        display: flex;
        > img {
          width: 50px;
          height: 50px;
          border-radius: 50%;
          flex-shrink: 0;
          max-width: 100%;
          background-color: #eee;
          border: 0;
        }
        > div:nth-child(2) {
          padding-left: 8px;
          padding-right: 12px;
          text-overflow: ellipsis;
          > h3 {
            font-size: 17px;
            font-weight: 600;
            color: #353535;
            position: relative;
            margin-bottom: 13px;
          }
          > div {
            line-height: 18px;
            margin-top: -7px;
            white-space: pre-wrap;
            font-size: 13px;
            font-weight: 400;
            color: #888;
          }
        }
        > div:nth-child(3) img {
          width: 20px;
          height: 20px;
          z-index: 1;
          position: absolute;
          top: 11px;
          right: 10px;
          font-size: 12px;
          color: #999;
        }
      }
    }
    > div:nth-child(3) {
      margin-bottom: 20px;
      position: relative;
      margin-top: 20px;
      padding-right: 21px;
      > div {
        max-height: none;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: 400;
        color: #353535;
        white-space: normal;
        word-break: break-word;
        line-height: 28px;
        overflow: hidden;
        > p {
          > a {
            color: #fa8919;
            text-decoration: none;
            border-bottom: 1px solid #fa8919;
          }
        }
      }
    }
    > div:nth-child(4) {
      > div:nth-child(1) {
        position: relative;
        margin-bottom: 20px;
        padding-right: 14px;
        > h2 {
          position: relative;
          margin-top: 10px;
          margin-bottom: 13px;
          font-size: 16px;
          font-weight: 600;
          color: #404040;
        }
        > h2:before {
          content: "";
          width: 16px;
          height: 16px;
          display: block;
          background: linear-gradient(0deg, #f9f0e3, #efcea5);
          opacity: 0.5;
          position: absolute;
          left: -8px;
          border-radius: 50%;
          z-index: -1;
        }
      }
      > div:nth-child(2) {
        position: relative;
        margin-top: 20px;
        padding-right: 21px;
        > div {
          margin-top: 0;
          margin-bottom: 20px;
          font-size: 15px;
          font-weight: 400;
          color: #353535;
          white-space: normal;
          word-break: break-word;
          line-height: 28px;
          overflow: hidden;
          > p {
            margin-top: 10px;
            > img {
              display: block;
              width: 100%;
              border-radius: 6px;
              max-width: 100%;
              background-color: #eee;
              border: 0;
            }
          }
          > h1 {
            position: relative;
            margin-top: 10px;
            margin-bottom: 13px;
            font-size: 16px;
            font-weight: 600;
            color: #404040;
          }
        }
      }
    }
  }
  > div:nth-child(3) {
    border-bottom: 1px solid rgb(240, 240, 240);
    > div:first-child {
      position: relative;
      margin-bottom: 20px;
      padding-right: 14px;
      > h2 {
        position: relative;
        margin-top: 10px;
        margin-bottom: 13px;
        font-size: 16px;
        font-weight: 600;
        color: #404040;
      }
      > h2:before {
        content: "";
        width: 16px;
        height: 16px;
        display: block;
        background: linear-gradient(0deg, #f9f0e3, #efcea5);
        opacity: 0.5;
        position: absolute;
        left: -8px;
        border-radius: 50%;
        z-index: -1;
      }
    }
    > div:nth-child(2) {
      margin-bottom: 20px;
      position: relative;
      margin-top: 20px;
      padding-right: 21px;
      > div {
        max-height: none;
        margin-top: 0;
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: 400;
        color: #353535;
        white-space: normal;
        word-break: break-word;
        line-height: 28px;
        overflow: hidden;
        > p {
          > img {
            display: block;
            width: 100%;
            border-radius: 6px;
          }
        }
        > h1 {
          position: relative;
          margin-top: 10px;
          margin-bottom: 13px;
          font-size: 16px;
          font-weight: 600;
          color: #404040;
        }
        > h1:before {
          content: "";
          width: 16px;
          height: 16px;
          display: block;
          background: linear-gradient(0deg, #f9f0e3, #efcea5);
          opacity: 0.5;
          position: absolute;
          left: -8px;
          border-radius: 50%;
          z-index: -1;
        }
      }
    }
  }
  > div:nth-child(4) {
    border-bottom: 1px solid rgb(240, 240, 240);
    > div:first-child {
      position: relative;
      margin-bottom: 20px;
      padding-right: 14px;
      > h2 {
        position: relative;
        margin-top: 10px;
        margin-bottom: 13px;
        font-size: 16px;
        font-weight: 600;
        color: #404040;
      }
      > h2:before {
        content: "";
        width: 16px;
        height: 16px;
        display: block;
        background: linear-gradient(0deg, #f9f0e3, #efcea5);
        opacity: 0.5;
        position: absolute;
        left: -8px;
        border-radius: 50%;
        z-index: -1;
      }
    }
    > div:nth-child(2) {
      margin-bottom: 20px;
      position: relative;
      margin-top: 20px;
      padding-right: 21px;
      > div {
        max-height: none;
        margin-top: -10px;
        font-size: 15px;
        font-weight: 400;
        color: #353535;
        white-space: normal;
        word-break: break-word;
        line-height: 28px;
        overflow: hidden;
        > p {
          > img {
            display: block;
            width: 100%;
            border-radius: 6px;
          }
        }
      }
    }
  }
  > div:nth-child(5) {
    > div:first-child {
      position: relative; 
      padding-right: 14px;
      > h2 {
        position: relative;
        margin-top: 10px;
        margin-bottom: 13px;
        font-size: 16px;
        font-weight: 600;
        color: #404040;
      }
      > h2:before {
        content: "";
        width: 16px;
        height: 16px;
        display: block;
        background: linear-gradient(0deg, #f9f0e3, #efcea5);
        opacity: 0.5;
        position: absolute;
        left: -8px;
        border-radius: 50%;
        z-index: -1;
      }
    }
    > div:nth-child(2) { 
      position: relative; 
      padding-right: 21px;
      > div {
        max-height: none;
        margin-top: -10px;
        margin-bottom: 20px;
        font-size: 15px;
        font-weight: 400;
        color: #353535;
        white-space: normal;
        word-break: break-word;
        line-height: 28px;
        overflow: hidden;
        > p {
          margin-top: 10px;
        }
      }
    } 
  } 
`;
