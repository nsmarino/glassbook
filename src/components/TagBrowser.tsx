import React, { useState, useEffect } from 'react'
import { Dispatch, SetStateAction } from "react";
import useWindowSize from '../hooks/useWindowSize'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'

interface TagBrowserProps {
  className: 'dropdownTags' | 'sidebarTags';
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  projectNames: string[];
  tags: string[];
}

const TagList: React.FC<TagBrowserProps> = ({
  selectedTag,
  setSelectedTag, 
  projectNames, 
  tags }) => (
  <ul>
    {projectNames.map(proj => 
      <li 
        className={`projectName ${proj===selectedTag && 'selected'}`}
        key={proj} 
        onClick={() => setSelectedTag(proj)}
      >{proj}</li>
    )}

    {tags.map(tag => 
      <li 
        className={`tag ${tag===selectedTag && 'selected'}`} 
        key={tag} 
        onClick={() => setSelectedTag(tag)}
      >{tag}</li>
    )}
  </ul>
)

export const TagBrowser: React.FC<TagBrowserProps> = (props) => {
  const screenSize = useWindowSize()
  const [tagVis, setTagVis] = useState(false)
  
  useEffect(() => {
    if ( screenSize.width >= 800 ) {
      setTagVis(true)
    }
    else setTagVis(false)  
  }, [(screenSize.width >= 800)])

  return (
    <>
      <button 
        className={`${''===props.selectedTag && 'selected'}`}
        onClick={() => props.setSelectedTag('')}
      >all devlogs</button>

    { (screenSize.width <= 800) &&
      <button onClick={() => setTagVis(!tagVis)}>find by tags</button>
    }

    { tagVis && <TagList {...props} />} 
    </>
  )
}