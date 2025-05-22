import type {ReactElement } from "react"
import Overlay from "./Overlay"

interface sectionContent{
    content?:ReactElement,
    height?:string,
    bg?:string,
    overlay?:boolean,
};
const Section = ({content,height,bg,overlay}:sectionContent) => {
  return (
    <div className="hero_banner" style={{height:height,background:bg}}>
      {overlay?<Overlay/>:null}
        {
            content
        }
    </div>
  )
}

export default Section