'use client'
import { useDragControls, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion";
import i0 from "../assets/Caroussel/Centro-Convencoes-Corredor 2.png";
import i1 from "../assets/Caroussel/Centro-de-Convencoes-Sala2 1.png";
import i2 from "../assets/Caroussel/Estacionamento-Moto.png";
import i3  from "../assets/Caroussel/Fachada-2 1.png";
import i4 from "../assets/Caroussel/Portaria-Acesso.png";
import Image from "next/image";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const imagesArr = [ i0, i1, i2,i3, i4 ]
export function Carousel (){
     // const [ width, setWidth ] = useState<number>(0);
  // const [currentPosX, setCurrentPosX] = useState<number>(0);

  const [imgIndex, setImgIndex] = useState(0);
  const dragX = useMotionValue(0);

  const carousel = useRef<{scrollWidth : number, offsetWidth : number}>();
  const dragControls = useDragControls();

  useEffect(() => {
    const intervalRef = setInterval(() => {
      const x = dragX.get();

      if (x === 0) {
        setImgIndex((pv) => {
          if (pv === imagesArr.length - 1) {
            return 0;
          }
          return pv + 1;
        });
      }
    }, AUTO_DELAY);

    return () => clearInterval(intervalRef);
  }, []);

  const onDragEnd = () => {
    const x = dragX.get();

    if (x <= -DRAG_BUFFER && imgIndex < imagesArr.length - 1) {
      setImgIndex((pv) => pv + 1);
    } else if (x >= DRAG_BUFFER && imgIndex > 0) {
      setImgIndex((pv) => pv - 1);
    }
  };
  const onClickArrowButton = (dir : "left"|"right") => 
  {
    if (dir === "right" && imgIndex < imagesArr.length - 1) 
    {
      setImgIndex((pv) => pv + 1);
      return ;
    }
    else if ( dir === "left" && imgIndex > 0) 
    {
      setImgIndex((pv) => pv - 1);
    }
  }
    return (
        <article 
        className="relative w-full items-center pb-2 rounded-md h-fit overflow-hidden">
          <header>
            <motion.div ref={carousel as any} className="">
              <motion.div  
                dragControls={dragControls}
                drag="x"
                dragConstraints={{ left: 0, right: 0 }}
                whileTap={{cursor : "grabbing"}}
                style={{
                  x: dragX,
                }}
                animate={{
                  translateX: `-${imgIndex * 100}%`,
                }}
                transition={SPRING_OPTIONS}
                onDragEnd={onDragEnd}
                className=" flex cursor-grab items-center border border-blue-500">
                {
                  imagesArr.map((img,idx) => (
                    <motion.div 
                    
                    className="w-[80%]  rounded-md border border-zinc-700 ">
                      <Image src={img} alt="imagem" className="w-full object-contain h-auto " />
                    </motion.div>
                  ) )
                }
              </motion.div>
            </motion.div>
          </header>
          <div className="flex w-full justify-between items-center">
         
          </div>
          
          
        </article>
            
    )
}