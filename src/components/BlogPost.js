import React from 'react';
import styled from 'styled-components';
import Button from './Button'

const BlogPost = ({ content }) => {
    return ( 
        <Article>
            <div>
                <h4>{content.title}</h4>
                <div className="text">{content.content}</div>
                {content.button ? <Button isYellow>{content.button}</Button> : null}
                <p className="date">{content.date}</p>
            </div>
        </Article>
     );
}
 
export default BlogPost;

const Article = styled.article`
    width: 100%;
    display: flex;
    justify-content: flex-end;
    overflow: hidden;
    & > div {
        width: 55%;
        background-color: #F1F1F1;
        position: relative;
        padding: 2rem;
        @media (max-width: 1200px) {
            width: 65%;
        }
        @media (max-width: 768px) {
                width: 80%;
        }
        @media (max-width: 480px) {
                width: 90%;
                padding: 2rem 1rem;
        }
        h4 {
            font-size: 2.5rem;
            width: 55%;
            margin: 0 auto;
            text-align: left;
            max-width: 600px;
            @media (max-width: 1600px) {
                width: 70%;
            }
            @media (max-width: 1024px) {
                width: 80%;
            }
            @media (max-width: 640px) {
                width: 95%;
            }
            @media (max-width: 480px) {
                width: 100%;
            }
        }
        div.text {
            width: 55%;
            max-width: 600px;
            margin: 0 auto;
            padding: 2rem 0;
            @media (max-width: 1600px) {
                width: 70%;
            }
            @media (max-width: 1024px) {
                width: 80%;
            }
            @media (max-width: 640px) {
                width: 95%;
            }
            @media (max-width: 480px) {
                width: 100%;
            }
            box-sizing: border-box;
                text-align: left;
                font-size: 1.2rem;
                line-height: 1.8rem;
                letter-spacing: 1px;
                text-align: justify;
                @media (max-width: 680px) {
                    letter-spacing: 0px;
                }
                @media (max-width: 620px) {
                    font-size: 1.1rem;
                }
                @media (max-width: 585px) {
                    line-height: 1.6rem;
                }
            ul {
                list-style: none;
                text-align: left;
                li {
                    padding: 1rem 0;
                    span {
                        font-size: 1.5em;
                        font-weight: 700;
                    }
                }
            }
        }
        p.date {
            width: 200px;
            text-align: center;
            font-size: 1.5rem;
            position: absolute;
            top: 50%;
            transform-origin: left center;
            transform: translateY(-110px) rotate(90deg);
        }
        button {
            margin: 0 -40% 0 0;
        }
    }
    &:nth-child(odd){
        justify-content: flex-start;
        & > div {
            p.date {
                position: absolute;
                right: 0;
                top: 50%;
                transform-origin: right center;
                transform: translateY(80px) rotate(90deg);
            }
        }
    }
    &:nth-child(even){
        & > div {
            p.date {
                left: 0;
            }
        }
    }
`;