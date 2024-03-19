import React from "react";
import {useState , useEffect} from "react";
function Header()
{

    const[isScrolled , setIsScrolled] = useState(false);

    useEffect(()=>{
        const handleScroll = ()=>{
            const scrollPosition = window.scrollY;

            if(scrollPosition >0) {
                setIsScrolled(true);
            } else{
                setIsScrolled(false); 
            }
        };
  

    window.addEventListener('scroll' ,handleScroll);

    return ()=>{
        window.removeEventListener("scroll" , handleScroll);
    } ; 
} , []);
     return(
        <header className= {isScrolled ? "scrolled" : ""}>
 
    <form className="styleHeader">
    <input type="text" placeholder="Newsletter Sign Up" /> <button type="submit"> Sign Up </button>
</form>
</header>
);
}


export default Header;