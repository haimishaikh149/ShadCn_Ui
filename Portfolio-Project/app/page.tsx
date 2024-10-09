
import Image from 'next/image'


  const page=()=> {
  return (
  <div
   className="bg-local ...bg-[length:50px_50px]" 
    style={{backgroundImage: 'url("/black.gif")',textDecoration:"underline",
    textDecorationStyle:"double",textDecorationColor:"Highlight",
    textAlign:"justify",textEmphasisStyle:"open",fontSize:""}}>

   <center><h1 style={{fontFamily:"fantasy",color:"skyblue"}}>WELCOME TO PORTFOLIO</h1></center>

   <center> <Image 
    src="/gif AI.gif"
    alt="profile image"
    width={150}
    height={150}
    
    /></center>

    <h1 style={{fontStyle:"italic",color:"skyblue"}}>ASSALAM U ALAIKUM EVERYONE</h1>
  <h1 style={{fontStyle:"italic",color:"yellow"}}>About Me</h1>
   <p style={{fontStyle:"italic",color:"skyblue",fontSize:"10px"}}>My Name Is Hira Shaikh <br/>
    I love Python<br/>
    And I Am Student In Governour House
   </p>
  <h1 style={{fontStyle:"italic",color:"yellow"}}>SKILLS</h1>
<ol style={{fontStyle:"italic",color:"skyblue",fontSize:"10px"}} >
 <li> Programming Languages: JavaScript, Python, Java</li>
<li>Frameworks: React, Next.js, Django</li>
<li>Tools: Git, Docker, Figma, Photoshop</li>
    </ol>
    <h1 style={{fontStyle:"italic",color:"yellow"}} >EXPERIENCE</h1>
    <ol  style={{fontStyle:"italic",color:"skyblue",fontSize:"10px"}}>
      <li>Built responsive web applications using React and Next.js</li>
      <li>Collaborated with designers to create a seamless user experience</li>
    </ol>
    <h1 style={{fontStyle:"italic",color:"yellow"}}>PROJECTS</h1>
    <ol  style={{fontStyle:"italic",color:"skyblue",fontSize:"10px"}}>
      <li>Designed and developed a personal portfolio using Next.js</li>
      <li>Features an interactive UI with optimized loading speed</li>
    </ol>
    <h1 style={{fontStyle:"italic",color:"yellow"}}>EDUCATION & CERTIFICATION</h1>
    <ol  style={{fontStyle:"italic",color:"skyblue",fontSize:"10px"}}>
      <li>B.com Commerce , in Karachi University</li>
      <li>Certified JavaScript Developer</li>
    </ol>
  
   </div>
   
   
  );
}
export default page

