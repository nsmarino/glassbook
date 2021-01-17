import React from 'react'
import { Link } from 'gatsby'
import { ProjectData } from '../../types'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { block } from '../styles/block'

const ProjectCard: React.FC<{project: ProjectData}> = ({ 
  project: {
    name,
    year,
    description,
    url,
    blogs,
  } 
}) => {
  return (
    <div css={css`
      ${block}
      img {
        width: calc(100% - 1rem);
        margin-bottom: 1rem;
        border-radius: 1rem;
      }
      @media only screen and (max-width: 800px) {
        flex-direction: column;
        align-items: start;
        display: flex;
        align-items: center;
      }
      @media only screen and (min-width: 800px) {
        display: grid;
        grid-template-areas:
          '. header'
          'info picture';
        grid-template-columns: 1fr 2fr;
        h2 {
          grid-area: header;
        }
        img {
          grid-area: picture;
        }
        .info {
          grid-area: info;
          padding-left: 1rem;
          padding-right: 1rem;
          p {
            margin: 0;
          }
        }


      
      }  
    `}>

      
      <h2>{name} ({year})</h2>
      <img src="https://source.unsplash.com/random/400x200" alt="unsplash"/>
      

      <div className="info">
      <p>{description}</p>
      <ul>
      { blogs.map(b => <li><Link to={`${b.frontmatter.slug}`} key={b.frontmatter.slug  }>{b.frontmatter.title}</Link></li>)}
      </ul>
      </div>

    </div>
  )
}

export default ProjectCard