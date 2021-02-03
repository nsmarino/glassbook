import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { under768 } from '../components/styles/mediaQueries'

const CSS_recentWork = `
padding-left: 12.5%;
padding-right: 25%;
padding-top: calc(var(--xxl) * 3 + 1rem);

${under768} {
  padding-left: 1%;
  padding-right: 1%;
}

.workfile {
  .flexContainer {display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  margin-bottom: var(--xxl);
  * {
    margin-right: 0.512rem;
    margin-bottom: 0.512rem;
    ${under768} {
      margin-right: 0rem;
    }
  }}
  h2 {
    font-size: var(--m);
    margin-top: 0;
    font-family: var(--mono);
    font-weight: normal;
    opacity: 0.5;
    text-transform: uppercase;

    ${under768} {
      width: calc(50vw - 2%);
    }
    :hover {
      opacity: 1;
      cursor: pointer;
    }
  
  }
  .test {

    width: 150px;
    ${under768} {
      width: calc(100vw - 2%);
    }
  }
  p {
    margin: 0;
  }
  .link {
    color: var(--fontColor);
    text-decoration: none;
    font-family: var(--mono);
    width: 150px;
    word-wrap: break-word;
    overflow: hidden;
    font-size: var(--s);
    opacity: 0.5;

    ${under768} {
      width: calc(50vw - 2%);
    }

    :hover {
        text-decoration: underline;
    } 
  }
}
`

interface iRecentWork {
  node: {
    html: string
    id: string
  }
}
const WorkSample: React.FC = () => {
  const {allMarkdownRemark: { edges: recentWork}} = useStaticQuery(graphql`
  query recentWork {
  allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/(recentwork)/"  }}) {
    edges {
      node {
        html
        id
      }
    }
  }
}
`)
  return (
  <section css={css`${CSS_recentWork}`} id="workSample">
  {recentWork.map((edge:iRecentWork) => 
    <div
      key={edge.node.id}
      className="workfile"
      dangerouslySetInnerHTML={{ __html: edge.node.html }}
    />
  )}
</section>
)}

export default WorkSample