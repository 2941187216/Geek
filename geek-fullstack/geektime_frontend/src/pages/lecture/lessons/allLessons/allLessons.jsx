import React from 'react';
import Item from './item/Item';
import './style.css';
import { Wrap, TabNav, InnerDiv, InnerItem, NavWrapper, ContentItem } from './allLessons.style';
import { TabLesson, TabLeftItem } from '../style'; 

export default function All(props) {
    const { data, path } = props;
    const newData = data !== undefined ? data : []; 
    const item = newData.map((item, i) =>
        <Item data={item} key={i} path={path}/>)
    return (
        <Wrap>
            <TabLesson>
                <TabLeftItem>
                    全部课程
                </TabLeftItem>
            </TabLesson>
            <TabNav>
                <NavWrapper>
                    <InnerItem>
                        <InnerDiv>
                            <span>课程形式</span>
                            <span className="iconfont">
                                <img src="asserts/down.png" alt="" />
                            </span>
                        </InnerDiv>
                    </InnerItem>
                    <InnerItem>
                        <InnerDiv>
                            <span>订阅状态</span>
                            <span className="iconfont">
                                <img src="asserts/down.png" alt="" />
                            </span>
                        </InnerDiv>
                    </InnerItem>
                    <InnerItem>
                        <InnerDiv>
                            <span>上新</span>
                            <span className="iconfont">
                                <img src="/asserts/filter.png" alt="" style={{ width: "6vw", height: "3vh" }} />
                            </span>
                        </InnerDiv>
                    </InnerItem>
                </NavWrapper>
            </TabNav>
            <ContentItem>
                {item}
            </ContentItem>
        </Wrap>
    )
};
