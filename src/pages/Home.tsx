import { useEffect } from "react"
import Content from "../components/Content"
import Section from "../components/Section"
import GridLayout from "../components/GridLayout"

const Home = () => {
  useEffect(()=>{
    document.title="Home";
  },[])
  return (<>
      <Section content={<Content heading="Crafting Delicious Food" paragraph="Making Delicious Food since 1990" boxShadow="none" bgColor="none" headingSize="6em" paragraphSize="1.4em" />} overlay={true} height={'100vh'} />
      <div style={{display:"flex",justifyContent:"center",alignContent:"center",height:"18em",textAlign:"center"}}>
      <Content heading="The Restraunt" headingSize="2.7em" paragraphSize="1em" paragraph="Welcome to Fatima Restaurant" boxShadow="none" bgColor="transparent"/>
      </div>
      <GridLayout left={
        <div className="superman" style={{display:"flex",flexDirection:"column",gap:"0.5em"}}>
        <Section overlay={true} content={<img src="images/chef.jpg" className="cardImage"/>} />
        <Section overlay={true} content={<img src="images/cardimage.jpg" className="cardImage"/>}/>
        </div>  
      }
      right={
        <div>
            <p style={{textTransform:"uppercase",fontSize:"1em"}}>Welcome to Tasty a joyous eatery inspired by
the spirit and culture of italian cuisine.</p>
<div >
        <p style={{fontWeight:"500",margin:"8px 0",textTransform:"uppercase"}}>Making delicious italian food since 1990</p>
        <p style={{fontWeight:"300",fontSize:"13px"}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book galley of type and scrambled .
        </p>
</div>
        </div>
      }
          
        />
    <Section content={<Content heading="make a reservation" paragraph="OPENS 9:00 AM - 10:00 PM EVERY DAY" text="BOOK A TABLE" />} bg={"images/cardimage.jpg"} />

  </>
  )
}

export default Home