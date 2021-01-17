import React, { useState, useEffect } from 'react'
import { Dispatch, SetStateAction } from "react";

/** @jsx jsx */
import { jsx, css } from '@emotion/react'
import { block } from './styles/block'
import { button } from './styles/button'

interface TagBrowserProps {
  className: string;
  selectedTag: string;
  setSelectedTag: Dispatch<SetStateAction<string>>;
  projectNames: string[];
  tags: string[];
}

const tagCSS = css`
ul {
  margin: 0;
  padding: 0;
  list-style-type: none;
}
.selected {
  font-weight: bold;
}`

const tagBrowserCSS = css`
  ${block}
  ${button}
  ${tagCSS}
`

// Refactored into own component for convenience.
const TagList: React.FC<TagBrowserProps> = ({
  selectedTag,
  setSelectedTag, 
  projectNames, 
  tags }) => (<ul>
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
</ul>)

// Appears either as a sidebar or dropdown depending on className passed from props.
export const TagBrowser: React.FC<TagBrowserProps> = (props) => {
  // Tags will be visible by default in sidebar and hidden by default in dropdown.
  const [tagVis, setTagVis] = useState(props.className==='sidebarTags'?true:false)

  return (
    <aside
      className={props.className}
      css={tagBrowserCSS}
    >

      <button 
        className={`${''===props.selectedTag && 'selected'}`}
        onClick={() => props.setSelectedTag('')}
      >all devlogs</button>

    { props.className==="dropdownTags" &&
      <button onClick={() => setTagVis(!tagVis)}>find by tags</button>
    }

    { tagVis && <TagList {...props} />}
    
    </aside>
  )
}

/////////////////////////////////////////////
// OLD VERSION WITH NO CLASSNAME IN PROPS: //
/////////////////////////////////////////////

// import React, { useState } from 'react'
// import { Dispatch, SetStateAction } from "react";

// /** @jsx jsx */
// import { jsx, css } from '@emotion/react'
// import { block } from './styles/block'
// import { button } from './styles/button'

// interface TagBrowserProps {
//   selectedTag: string;
//   setSelectedTag: Dispatch<SetStateAction<string>>;
//   projectNames: string[];
//   tags: string[];
// }

// const tagCSS = css`
// ul {
//   margin: 0;
//   padding: 0;
//   list-style-type: none;
// }
// .selected {
//   font-weight: bold;
// }`

// const tagBrowserCSS = css`
//   ${block}
//   ${button}
//   ${tagCSS}
// `

// export const SidebarTags: React.FC<TagBrowserProps> = ({
//   selectedTag,
//   setSelectedTag, 
//   projectNames, 
//   tags }) => {
//   return (
//     <aside 
//       className="sidebarTags"
//       css={tagBrowserCSS}>
//       <button 
//         className={`${''===selectedTag && 'selected'}`}
//         onClick={() => setSelectedTag('')}
//       >all devlogs</button>
//       <ul>

//         {projectNames.map(proj => 
//           <li 
//             className={`projectName ${proj===selectedTag && 'selected'}`} 
//             key={proj} 
//             onClick={() => setSelectedTag(proj)}
//           >{proj}</li>
//         )}

//         {tags.map(tag => 
//           <li 
//             className={`tag ${tag===selectedTag && 'selected'}`} 
//             key={tag} 
//             onClick={() => setSelectedTag(tag)}
//           >{tag}</li>
//         )}

//       </ul>
//     </aside>
//   )
// }

// export const DropdownTags: React.FC<TagBrowserProps> = ({
//   selectedTag,
//   setSelectedTag, 
//   projectNames, 
//   tags }) => {
//   const [tagVis, setTagVis] = useState(false)
//   return (
//     <aside
//       className="dropdownTags"
//       css={tagBrowserCSS}>
//       <button 
//         className={`${''===selectedTag && 'selected'}`}
//         onClick={() => setSelectedTag('')}
//       >all devlogs</button>
//       <button onClick={() => setTagVis(!tagVis)}>find by tags</button>
      
//     { tagVis &&      
//       <ul>
//         {projectNames.map(proj => 
//           <li 
//             className={`projectName ${proj===selectedTag && 'selected'}`}
//             key={proj} 
//             onClick={() => setSelectedTag(proj)}
//           >{proj}</li>
//         )}

//         {tags.map(tag => 
//           <li 
//             className={`tag ${tag===selectedTag && 'selected'}`} 
//             key={tag} 
//             onClick={() => setSelectedTag(tag)}
//           >{tag}</li>
//         )}

//       </ul>
//     }
    
//     </aside>
//   )
// }