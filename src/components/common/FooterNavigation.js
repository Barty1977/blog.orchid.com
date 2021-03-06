import React from 'react'
import { css } from '@emotion/core'
import { Link } from 'gatsby'

import config from '../../utils/config';

const style = css`
    list-style: none;
    margin: 0;
    padding: 0;
    min-width: 6rem;

    & > li {
        display: block;
        margin: 0;
        line-height: 1.75;
    }
    & > li > a {
        color: var(--link-color);
        position: relative;
        @media (max-width: 870px) {
            font-size: 14px;
            padding: 10px 0;
        }

        &:hover {
            text-decoration: none;
        }
    }
`;


const items = [];
const items2 = [];

for (let i = 0; i < config.footer_navigation.length; i++) {
    const navItem = config.footer_navigation[i];

    const internalLink = navItem.url.match(/^\s?http(s?)/gi) === null;

    const output = <li key={i}>
        {!internalLink ? (
            <a css={css`display:block;`} href={navItem.url} rel="noopener noreferrer">
                {navItem.label}
            </a>
        ) : (
                <Link css={css`display:block;`} to={navItem.url}>{navItem.label}</Link>
            )}
    </li>

    if (i < 4) {
        items.push(output);
    } else {
        items2.push(output);
    }
}

const FooterNavigation = () => (
    <>
        <ul css={style}>
            {items}
        </ul>
        <ul css={style}>
            {items2}
        </ul>
    </>
);

export default FooterNavigation;
