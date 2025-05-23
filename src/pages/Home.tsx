import { useEffect } from "react"
import Content from "../components/Content"
import Section from "../components/Section"
import GridLayout from "../components/GridLayout"
import Overlay from "../components/Overlay"
import { Grid, ListItem } from "@mui/material"

const Home = () => {
  useEffect(()=>{
    document.title="Home";
  },[])
  return (<>
      <Section className="hero_banner" content={<Content heading="Crafting Delicious Food" paragraph="Making Delicious Food since 1990" boxShadow="none" bgColor="none" headingSize="6em" paragraphSize="1.4em" />} 
      height={'100vh'}>
        <Overlay/>
      </Section>
      <div style={{display:"flex",justifyContent:"center",alignContent:"center",height:"18em",textAlign:"center"}}>
      <Content heading="The Restraunt" headingSize="2.7em" paragraphSize="1em" paragraph="Welcome to Fatima Restaurant" boxShadow="none" bgColor="transparent"/>
      </div>
      <GridLayout left={
        <div className="superman">
        <Section className="hero_banner" content={
          <>
          <div className="cardImage">
            <Overlay/>
          <img src="images/chef.jpg" className="Image"/>
          </div>
          <div className="cardImage">
            <Overlay/>
      <img src="images/cardimage.jpg" className="Image"/>
          </div>
      </>
      } />
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
    <Section className="reservation" content={<Content boxShadow="none" heading="make a reservation" paragraph="OPENS 9:00 AM - 10:00 PM EVERY DAY" text="BOOK A TABLE" />}>
      <Overlay/>
    </Section>

  <Section className="tasty_menu">
    <>
    <div className="tasty_menu_heading">

      <Content boxShadow="none" heading="Tasty Menu" paragraph="Variety of Delicious Foods" />
    </div>
      <ul className="menu">
        <li>breakfast</li>
        <li>lunch</li>
        <li>dinner</li>
        <li>desert</li>
      </ul>
      <div className="griding">
        <Grid container justifyContent={"center"}>
            <Grid size={{md:3.8}}>
              <ListItem sx={{flexWrap:"wrap"}}>
                <Content heading="Tasty Create an Omelette" paragraph="Select Any Four of the Following: Bacon, Ham, Sausage, Cheddar." extraInfo="14$"/>
                <Content heading="Tasty Create an Omelette" paragraph="Select Any Four of the Following: Bacon, Ham, Sausage, Cheddar." extraInfo="14$"/>
                <Content heading="waffle bunch" paragraph="A Small Order of French Toast, Bacon and Strawberries." extraInfo="14$" />
              </ListItem>
            </Grid>
            <Grid size={{md:0.3}}/>
            <Grid size={{md:3.8}}>
              <ListItem sx={{flexWrap:"wrap"}}>
                   <Content heading="waffle bunch" paragraph="A Small Order of French Toast, Bacon and Strawberries." extraInfo="14$" />
                   <Content heading="waffle bunch" paragraph="A Small Order of French Toast, Bacon and Strawberries." extraInfo="14$" />
                   <Content heading="waffle bunch" paragraph="A Small Order of French Toast, Bacon and Strawberries." extraInfo="14$" />
              </ListItem>
            </Grid>
        </Grid>
        {/* <li>
       
        </li>
        <li>
       
        </li> */}
      </div>
    </>
  </Section>
    <Section className="reviews">
      <>
      <Overlay />
          <div className="reviews_slider">
            <h1>Content</h1>
          </div>
      </>
    </Section>
    <Section className="todays_special">
      <>
      <div style={{textAlign:"center"}}>
      <Content heading="Today's Special" paragraph="Special Dinner by Cook" boxShadow="none"/>
      </div>
      <Grid container alignItems={"center"} spacing={0.1} justifyContent={"center"}>
        <Grid size={{md:3}}>
          <ListItem sx={{padding:"0"}}>
            <div className="todays_special_cards">
              <img src="images/korma.jpg" />
              <Content heading="CHICKEN KORMA" paragraph="Chicken,Masala,dhai,Adrak,Lassan" extraInfo="14$" boxShadow="none" />
            </div>
          </ListItem>
        </Grid>
            <Grid size={{md:3}}>
          <ListItem sx={{padding:"0"}}>
            <div className="todays_special_cards">
              <Content heading="CHICKEN KORMA" paragraph="Chicken,Masala,dhai,Adrak,Lassan" extraInfo="14$" boxShadow="none" />
              <img src="images/korma.jpg" />
            </div>
          </ListItem>
        </Grid>
            <Grid size={{md:3}}>
          <ListItem sx={{padding:"0"}}>
            <div className="todays_special_cards">
              <img src="images/korma.jpg" />
              <Content heading="CHICKEN KORMA" paragraph="Chicken,Masala,dhai,Adrak,Lassan" extraInfo="14$" boxShadow="none" />
            </div>
          </ListItem>
        </Grid>
      </Grid>
      </>
    </Section>
  </>
  )
}

export default Home