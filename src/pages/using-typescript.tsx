import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from "../components/layout"

type DataProps = {
  site: {
    buildTime: string
  }
}

// TypeScript Handbook: Basic Types
let isDone: boolean = false
let decimal: number = 1.2
let color: string = 'blue'
// Two ways to write arrays:
let listOne : number[] = [1,2,3]
let listTwo : Array<number> = [1,2,3] // using generics
// TUPLE: array w fixed number of elements; types are known but not all the same
let tupleExample : [string, number] = ["hello", 100]
// ENUM: friendly name for sets of numeric values
enum Color {
  Red,
  Green,
  Blue,
}

let c : Color = Color.Green
// UNKNOWN
let notSure: unknown = 'here it is a string'
notSure = false // now a boolean
// ANY keyword explains to TS compiler that we are opting out of typechecking
declare function getValue(key: string): any;

// VOID - undefined or function w no return value
let unusable: void = undefined;
function warnUser(): void {
  console.log("This is my warning message");
}

// Give info to typescript compiler with as-syntax
let someValue: unknown = "this is a string";
let strLength: number = (someValue as string).length;

// Type checking with typescript focuses on the shape that values have
function printLabel(labeledObj: { label: string}) {
  console.log(labeledObj.label)
}
// let's use an INTERFACE to describe the requirement of having a label property
interface LabeledValue {
  label: string
}

// above function can be re-written:
function newPrintLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label)
} // can pass in obj with more props as long as they have a property label of type string
// interfaces can have optional properties
interface SquareConfig {
  color?: string;
  width?: number;
}

// describes params using interface, and type of returned value as ts obj
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
// interfaces can also have readonly values
interface Point {
  readonly x: number;
  readonly y: number;
} // variables use CONST whereas properties use READONLY

// Interfaces can also describe function types
interface SearchFunc {
  (source: string, subString: string): boolean
} // describes parameter list and return value

const UsingTypescript: React.FC<PageProps<DataProps>> = ({ data, path }) => (
  <Layout>
    <h1>Gatsby supports TypeScript by default!</h1>
    <p>This means that you can create and write <em>.ts/.tsx</em> files for your pages, components etc. Please note that the <em>gatsby-*.js</em> files (like gatsby-node.js) currently don't support TypeScript yet.</p>
    <p>For type checking you'll want to install <em>typescript</em> via npm and run <em>tsc --init</em> to create a <em>.tsconfig</em> file.</p>
    <p>You're currently on the page "{path}" which was built on {data.site.buildTime}.</p>
    <p>To learn more, head over to our <a href="https://www.gatsbyjs.com/docs/typescript/">documentation about TypeScript</a>.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default UsingTypescript

// previous Index page -- reference for form setup
// import { graphql, PageProps } from "gatsby"
// import * as React from "react"
// import { useState } from 'react'
// import { useForm } from "react-hook-form";

// import Layout from "../components/layout"

// type Inputs = {
//   newNote: string,
// };


// interface Note {
//   content: string
// }

// // type TestProps = {
// //   sample: string
// // }
// // const Practice: React.FC<TestProps> = ({sample} )=> (<div>{sample}</div>)

//  const IndexPage: React.FC = () => {
//   const [notes, setNotes] = useState<Note[]>([] as Note[])

//   const { register, handleSubmit, watch, errors, reset } = useForm<Inputs>();
  
//   const displayNotes = () => notes.map(note => <p key={`${note.content}`}>{note.content}</p>)
  
//   const onSubmit = (data: { newNote: string }) => {
//     console.log(data)
//     const updatedNotes = [...notes, {content: data.newNote}]
//     setNotes(updatedNotes)
//     reset()
//   };

//   return (
//     <Layout>
//       <h1>The Glass Book</h1>
//       <form onSubmit={handleSubmit(onSubmit)}>
//         <input name="newNote" ref={register({ required: true })} />
//         {errors.newNote && <span>required</span>}
        
//         <input type="submit" value="add" />      
//       </form>
//       {displayNotes()}
//     </Layout>
//   )
// }

// export default IndexPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
