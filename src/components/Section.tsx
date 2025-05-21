import type {ReactElement } from "react"
import Overlay from "./Overlay"

interface sectionContent{
    center?:ReactElement,
    height?:string,
    bg?:string
};
const Section = ({center,height,bg}:sectionContent) => {
  return (
    <div className="hero_banner" style={{height:height,background:bg}}>
      <Overlay />
        {
            center
        }
    </div>
  )
}

export default Section