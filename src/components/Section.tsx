import type {ReactElement } from "react"

interface sectionContent{
    content?:ReactElement,
    height?:string,
    children?:ReactElement,
    className:string
};
const Section = ({content,height,children,className}:sectionContent) => {
  return (
    <div className={className} style={{height:height}}>
      {children}
        {
            content
        }
    </div>
  )
}

export default Section