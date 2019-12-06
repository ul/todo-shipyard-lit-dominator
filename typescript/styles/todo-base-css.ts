import {css} from "lit-element";

export const todo_base = css`
    hr {
        margin: 20px 0;
        border: 0;
        border-top: 1px dashed #c5c5c5;
        border-bottom: 1px dashed #f7f7f7;
    }

    .learn a {
        font-weight: normal;
        text-decoration: none;
        color: #b83f45;
    }

    .learn a:hover {
        text-decoration: underline;
        color: #787e7e;
    }

    .learn h3,
    .learn h4,
    .learn h5 {
        margin: 10px 0;
        font-weight: 500;
        line-height: 1.2;
        color: #000;
    }

    .learn h3 {
        font-size: 24px;
    }

    .learn h4 {
        font-size: 18px;
    }

    .learn h5 {
        margin-bottom: 0;
        font-size: 14px;
    }

    .learn ul {
        padding: 0;
        margin: 0 0 30px 25px;
    }

    .learn li {
        line-height: 20px;
    }

    .learn p {
        font-size: 15px;
        font-weight: 300;
        line-height: 1.3;
        margin-top: 0;
        margin-bottom: 0;
    }

    #issue-count {
        display: none;
    }

    .quote {
        border: none;
        margin: 20px 0 60px 0;
    }

    .quote p {
        font-style: italic;
    }

    .quote p:before {
        content: '“';
        font-size: 50px;
        opacity: .15;
        position: absolute;
        top: -20px;
        left: 3px;
    }

    .quote p:after {
        content: '”';
        font-size: 50px;
        opacity: .15;
        position: absolute;
        bottom: -42px;
        right: 3px;
    }

    .quote footer {
        position: absolute;
        bottom: -40px;
        right: 0;
    }

    .quote footer img {
        border-radius: 3px;
    }

    .quote footer a {
        margin-left: 5px;
        vertical-align: middle;
    }

    .speech-bubble {
        position: relative;
        padding: 10px;
        background: rgba(0, 0, 0, .04);
        border-radius: 5px;
    }

    .speech-bubble:after {
        content: '';
        position: absolute;
        top: 100%;
        right: 30px;
        border: 13px solid transparent;
        border-top-color: rgba(0, 0, 0, .04);
    }

    .learn-bar > .learn {
        position: absolute;
        width: 272px;
        top: 8px;
        left: -300px;
        padding: 10px;
        border-radius: 5px;
        background-color: rgba(255, 255, 255, .6);
        transition-property: left;
        transition-duration: 500ms;
    }

    @media (min-width: 899px) {
        .learn-bar {
            width: auto;
            padding-left: 300px;
        }

        .learn-bar > .learn {
            left: 8px;
        }
    }

`;