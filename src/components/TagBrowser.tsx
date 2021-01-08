import React from 'react'
import { Dispatch, SetStateAction } from "react";

interface IProps {
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  projectNames: string[];
  tags: string[];
}

const TagBrowser: React.FC<IProps> = ({
  selectedTag, 
  setSelectedTag, 
  projectNames, 
  tags }) => {
  return (
    <>
      <p onClick={() => setSelectedTag('')}>view all</p>
      <ul>
        {projectNames.map(proj => <li className="projectName" key={proj} onClick={() => setSelectedTag(proj)}>{proj}</li>)}
        {tags.map(tag => <li className="tag" key={tag} onClick={() => setSelectedTag(tag)}>{tag}</li>)}
      </ul>
    </>
  )
}

export default TagBrowser