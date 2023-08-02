import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html,
    body,
    div,
    span,
    applet,
    object,
    iframe,
    h1,
    h2,
    h3,
    h4,
    h5,
    h6,
    p,
    blockquote,
    pre,
    a,
    abbr,
    acronym,
    address,
    big,
    cite,
    code,
    del,
    dfn,
    em,
    img,
    ins,
    kbd,
    q,
    s,
    samp,
    small,
    strike,
    strong,
    sub,
    sup,
    tt,
    var,
    b,
    u,
    i,
    center,
    dl,
    dt,
    dd,
    ol,
    ul,
    li,
    fieldset,
    form,
    label,
    legend,
    table,
    caption,
    tbody,
    tfoot,
    thead,
    tr,
    th,
    td,
    article,
    aside,
    canvas,
    details,
    embed,
    figure,
    figcaption,
    footer,
    header,
    hgroup,
    menu,
    nav,
    output,
    ruby,
    section,
    summary,
    time,
    mark,
    audio,
    video {
        margin: 0;
        padding: 0;
        border: 0;
        font-size: 100%;
        vertical-align: baseline;
    }
    article,
    aside,
    details,
    figcaption,
    figure,
    footer,
    header,
    hgroup,
    menu,
    nav,
    section {
        display: block;
    }
    body {
        line-height: 1;
    }
    ol,
    ul {
        list-style: none;
    }
    blockquote,
    q {
        quotes: none;
    }
    blockquote:before,
    blockquote:after,
    q:before,
    q:after {
        content: "";
        content: none;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    button {
        padding: 0;
        background: none;
        border: 0;
        cursor: pointer;
        color: inherit;
    }
    * {
        box-sizing: border-box;
    }


    // Hyundai Sans Head
   @font-face {
        font-family: 'headMedium1';
        font-style: normal;
        font-display: swap;
        font-size: 22px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFMedium.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'headMedium2';
        font-style: normal;
        font-display: swap;
        font-size: 20px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFMedium.woff2') format('woff2'); 
  }   
  @font-face {
        font-family: 'headMedium3';
        font-style: normal;
        font-display: swap;
        font-size: 18px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFMedium.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'headRegular3';
        font-style: normal;
        font-display: swap;
        font-size: 18px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFRegular.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'headMedium4';
        font-style: normal;
        font-display: swap;
        font-size: 16px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFMedium.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'headRegular4';
        font-style: normal;
        font-display: swap;
        font-size: 16px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFRegular.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'headMedium5';
        font-style: normal;
        font-display: swap;
        font-size: 14px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFMedium.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'headRegular5';
        font-style: normal;
        font-display: swap;
        font-size: 14px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFRegular.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'headRegular6';
        font-style: normal;
        font-display: swap;
        font-size: 12px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansHeadKROTFRegular.woff2') format('woff2'); 
  }

  // Hyundai Sans Body
  @font-face {
        font-family: 'bodyMedium1';
        font-style: normal;
        font-display: swap;
        font-size: 16px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansTextKROTFMedium.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'bodyRegular1';
        font-style: normal;
        font-display: swap;
        font-size: 16px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansTextKROTFRegular.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'bodyMedium2';
        font-style: normal;
        font-display: swap;
        font-size: 14px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansTextKROTFMedium.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'bodyRegular2';
        font-style: normal;
        font-display: swap;
        font-size: 14px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansTextKROTFRegular.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'bodyMedium3';
        font-style: normal;
        font-display: swap;
        font-size: 12px;
        font-weight: 500;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansTextKROTFMedium.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'bodyRegular3';
        font-style: normal;
        font-display: swap;
        font-size: 12px;
        font-weight: 400;
        line-height: 130%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansTextKROTFRegular.woff2') format('woff2'); 
  }
  @font-face {
        font-family: 'popupRegular';
        font-style: normal;
        font-display: swap;
        font-size: 14px;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: -3%;
        src: url('../asset/fonts/HyundaiSansTextKROTFRegular.woff2') format('woff2'); 
  }
`;

export default GlobalStyle;
