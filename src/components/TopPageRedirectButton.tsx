import Chrevron from "../assets/Icons/Vector.png"
import React, { ForwardedRef, forwardRef, MutableRefObject, useCallback, useEffect, useRef, useState } from "react"

export const TopPageRedirectButton = (() => {
  const [btnIsVisible, setBtnIsVisible] = useState(false);

  const handleNavigateToTopPage = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }, []);

  const handleScroll = () => {
    if(window.scrollY < 300) {
      setBtnIsVisible(false);
      return;
    }
    setBtnIsVisible(true);
  }
  useEffect(() => {
    handleScroll();
    window.addEventListener("scroll" ,handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  } ,[ window.scrollY]);
  return (
    <button 
      onClick={handleNavigateToTopPage}
      className={`${btnIsVisible ? "on-open-modal" : "on-close-modal opacity-0"}  flex items-center justify-center rounded-none border-none bg-dark-text fixed h-10 w-10 z-30 shadow-lg bottom-20 right-5`}>
      <img 
        className="text-white"
        src ={Chrevron}
        alt="Voltar para o topo da pagina..."
      />
    </button>
  )
})