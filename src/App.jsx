import './App.css';
import './components/board';
import { Board }  from './components/board';
const App = () => {

  return (
    <div className="App">
      <div className="body">
       <Board imgSrc="images1/UnleashHer.png" 
       title="The UnleashHer Network Group"
       desc="Connecting & Empowering Like-minded Women to Reach their Full Potential"
       website="https://mailchi.mp/shonveraksheppard/the-unleashher-network-group-sign-up"buttonText ="Learn More"
       />
       <Board imgSrc="images1/fixitfridays.jpg" 
       title="Fix It Fridays"
       desc="Georgia Southern University's Fab Lab and The City of Statesboro’s Greener Boro Commission have partnered to bring you Fix-It-Fridays to reduce waste and encourage innovation."
       website= "https://www.wsav.com/community-calendar/#!/details/Fix-It-Friday/13152951/2024-03-01T18"buttonText="Learn More"
       />
       <Board imgSrc="images1/newcomerClub.jpeg" 
       title="Statesboro Newcomer's Club"
       desc="GREATER  STATESBORO & SURROUNDING AREA
       ARE YOU NEW TO THE AREA OR INTERESTED IN MEETING NEW FRIENDS?
       You are invited to the STATESBORO NEWCOMER'S CLUB"
      website="https://www.wsav.com/community-calendar/?_escaped_fragment_=/show/?start=2023-12-25#!/details/Statesboro-Newcomer-s-Club/12505917/2024-04-02T10" buttonText="Learn More"
       />
       <Board imgSrc="images1/picnicPic.jpg" 
       title="Picnic For Prevention and Resource Fair"
       desc="Resources for the community with over 20 vendors providing resources to our area. Free food, free books, door prizes and more"
       website="https://www.wsav.com/community-calendar/#!/details/Picnic-For-Prevention-and-Resource-Fair/13090497/2024-03-23T10" buttonText="Learn More"
       />
       <Board imgSrc="images1/networkingEvent.jpg" 
       title="Small Business Networking Event"
       desc="Resources for the community with over 20 vendors provJoin the Statesboro Business Commission for an evening of small business networking. Meet and mingle with fellow small business owners as well as service providers. Find solutions for common problems and share ideas for success. Together we rise!iding resources to our area. Free food, free books, door prizes and more"
       website="https://www.wsav.com/community-calendar/#!/details/Small-Business-Networking-Event/13112485/2024-03-12T18" buttonText="Learn More"
       />
       <Board imgSrc="images1/bullochcounty.jpg" 
       title="Bulloch County Planning and Zoning Commission Meeting and Resource Fair"
       desc="Monthly planning and zoning commission meeting"
       website="https://www.wsav.com/community-calendar/?_escaped_fragment_=/show/?start=2023-08-02#!/details/Bulloch-County-Planning-and-Zoning-Commission-Meeting/12303780/2024-12-12T18" buttonText="Learn More"
       />
       <Board imgSrc="images1/baldeagle.jpg" 
       title="Resource Fair"
       desc="The Veterans of Foreign Wars is open to any veteran who has served in a war zone. It supports veterans in need, the local community, youth, and Emergency and Police groups."
       website="https://www.wsav.com/community-calendar/?_escaped_fragment_=%2Fshow%2F%3Fser%3DCoach%27s%20Corner#!/details/Statesboro-VFW/12530243/2023-11-11T08" buttonText="Learn More"
       />
       <Board imgSrc="images1/bullochcounty.jpg" 
       title="Statesboro City Council Meeting"
       desc="Bi-monthly meeting of the Statesboro City Council"
       website="https://www.wsav.com/community-calendar/#!/details/Statesboro-City-Council-Meeting/11405779/2024-04-02T09" buttonText="Learn More"
       />
       <Board imgSrc="images1/princesspic.jpg" 
       title="Princess, Princes, and Pis"
       desc="$10.00 to $35.00—Children are $35 and Parents are $10"
       website="https://www.wsav.com/community-calendar/?_escaped_fragment_=/show/?ser=Bluffton%20Chamber%20of%20Commerce#!/details/Princess-Princes-and-Pis/13060632/2024-03-02T00" buttonText="Learn More"
       />
       <Board imgSrc="images1/tailgatebingo.jpg" 
       title="Tail Gate Bingo"       
       desc="Join us for a fun day of Tailgate Bingo! We will have food, drinks, and prizes!"
       website="https://www.wsav.com/community-calendar/?_escaped_fragment_=/show/?start=2023-02-08#!/details/Tail-Gate-Bingo/13099279/2024-03-02T15" buttonText="Learn More"
       />
       
       </div>
    </div>
      
  )
}

export default App