import { Global as _Global, css, useTheme } from "@emotion/react"

import { ThemeProvider as _ThemeProvider } from "@emotion/react"
import { pretendard } from "src/assets"

export const Global = () => {
  const theme = useTheme()

  // 全域CSS在這邊!!
  return (
    <_Global
      styles={css`
        body {
          margin: 0;
          padding: 0;
          color: ${theme.colors.gray12};
          background-color: #323042;
          font-family: ${pretendard.style.fontFamily};
          font-weight: ${pretendard.style.fontWeight};
          font-style: ${pretendard.style.fontStyle};
        }

        * {
          color-scheme: ${theme.scheme};
          box-sizing: border-box;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          margin: 0;
          font-weight: inherit;
          font-style: inherit;
        }

        a {
          all: unset;
          cursor: pointer;
        }

        ul {
          padding: 0;
        }

        // init button
        button {
          all: unset;
          cursor: pointer;
        }

        // init input
        input {
          all: unset;
          box-sizing: border-box;
        }

        // init textarea
        textarea {
          border: none;
          background-color: transparent;
          font-family: inherit;
          padding: 0;
          outline: none;
          resize: none;
          color: inherit;
        }

        hr {
          width: 100%;
          border: none;
          margin: 0;
          border-top: 1px solid ${theme.colors.gray6};
        }

        :root {
          --part1-bg-color: #3f3a5c;
          --part2-bg-color: #323042;
          --light-text-color: #a096b9;
        }

        .css-1rxl5k6,
        .css-9hht0b > .mid,
        .css-n6ste > .content,
        .css-sbeisr,
        .css-15jpr8u,
        .css-776fao,
        .css-ysntgw > .mid,
        .css-ricqr5 article > .content[data-thumb="false"],
        .css-1kjebhu .list a:hover {
          background-color: var(--part1-bg-color) !important;
        }
        
        :not(pre)>code[class*=language-], pre[class*=language-],
        .notion-simple-table tr:first-child td,
        .css-o3k89e {
          background: var(--part2-bg-color) !important;
        }

        .notion-simple-table td,
        .notion-simple-table {
         border: none !important;
        }

        .css-ricqr5 article >.content >.date .content,
        .css-1q3b1wx nav,
        .css-o3k89e,
        .css-n6ste >.content .mid .role {
          color: var(--light-text-color) !important;
        }

        // .css-th7yno,
        // .css-diyve4 ul li,
        // .css-15jpr8u > a,
        // .css-sbeisr a {
        //   color: var(--link-color) !important;
        // }

        .css-15jpr8u > a:hover,
        .css-sbeisr a:hover {
          background-color: inherit !important;
        }

        .css-1h5x3dy {
         visibility: hidden !important;
        }
      `}
    />
  )
}
