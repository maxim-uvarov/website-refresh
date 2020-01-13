import React from 'react'
import PropTypes from 'prop-types'
import config from '../config'

export default class HTML extends React.Component {
  render () {
    return (
      <html {...this.props.htmlAttributes} lang="en">
        <head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no"
          />
          {config.siteMetadata.ogImage
            ? (<meta property="og:image" content={config.siteMetadata.ogImage} />) : null
          }
          <meta property="twitter:card" content="summary_large_image" />
          {config.siteMetadata.ogImage
            ? (<meta property="twitter:image" content={config.siteMetadata.ogImage} />) : null
          }
          {config.siteMetadata.favicon
            ? (<link rel="shortcut icon" type="image/svg" href={config.siteMetadata.favicon} />) : null
          }
          <noscript key="noscript"></noscript>
          {this.props.headComponents}
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <meta name='msapplication-TileColor' content='#da532c' />
          <meta name='msapplication-config' content='/browserconfig.xml' />
          <meta name='theme-color' content='#ffffff' />
        </head>
        <body {...this.props.bodyAttributes}>
          {this.props.preBodyComponents}
          <div
            key={'body'}
            id="___gatsby"
            dangerouslySetInnerHTML={{ __html: this.props.body }}
          />
          {this.props.postBodyComponents}
          <script
            defer
            dangerouslySetInnerHTML={{
              __html: `
            function navBarClose() {
              document.getElementById("navbar").classList.remove("responsive");
            }
            document.addEventListener('click',function(e){
              if(e.target && e.target.tagName.toLowerCase() === 'a'){
                navBarClose();
              }
           });
            `
            }}
          />
        </body>
      </html>
    )
  }
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array
}
