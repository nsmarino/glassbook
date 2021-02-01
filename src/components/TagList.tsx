import React, { useState, useEffect } from 'react'
import { Dispatch, SetStateAction } from "react";
import useWindowSize from '../hooks/useWindowSize'

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { ulForLinks } from './styles/scratch';

interface TagListProps {
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  projectNames: string[];
  tags: string[];
}

const TagList: React.FC<TagListProps> = ({
  selectedTag,
  setSelectedTag, 
  projectNames, 
  tags }) => (
  <ul css={css`
    ${ulForLinks}
    flex-wrap: wrap;
    font-family: var(--headerFont);

    .selected {
      font-weight: bold;
      text-decoration: underline;
    }
  `}>
    <li 
      onClick={() => setSelectedTag('')}
      className={`${''===selectedTag && 'selected'}`}
    >all</li>
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

export default TagList