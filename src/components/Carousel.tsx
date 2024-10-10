'use client'
import { useDragControls, useMotionValue } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import {motion} from "framer-motion";
import i0 from "../assets/Caroussel/Centro-Convencoes-Corredor 2.png";
import i1 from "../assets/Caroussel/Centro-de-Convencoes-Sala2 1.png";
import i2 from "../assets/Caroussel/Estacionamento-Moto.png";
import i3  from "../assets/Caroussel/Fachada-2 1.png";
import i4 from "../assets/Caroussel/Portaria-Acesso.png";
import i5 from "../assets/Caroussel/CFTV 1@2x.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const ONE_SECOND = 1000;
const AUTO_DELAY = ONE_SECOND * 10;
const DRAG_BUFFER = 50;

const SPRING_OPTIONS = {
  type: "spring",
  mass: 3,
  stiffness: 400,
  damping: 50,
};

const imagesArr = [ i3,  i1, i5 ,i0, i4, i2 ]
const imagesArrWithTitle : {img: string, title?: string; subTitle? : string}[] = [
  {
    img : i3,
    subTitle : "lorem ipsum dolor sit am equivalents",
    title : "TÍTULO FALANDO SOBRE O CENTRO DE CONVENCOES",
  },
  {
    img: i1
  }
  ,
  {
    img : i5,
    subTitle : "lorem ipsum dolor sit am equivalents",
    title : "TÍTULO FALANDO SOBRE O CENTRO DE CONVENCOES",
  },
  {
    img : i0,
  },
  {
    img : i4,
    subTitle : "lorem ipsum dolor sit am equivalents",
    title : "TÍTULO FALANDO SOBRE O CENTRO DE CONVENCOES",
  },
  {
    img : i3,
    
  },
]
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
    className="w-full relative overflow-hidden">
      <motion.div ref={carousel as any} className="lg:translate-x-[310px] 2xl:translate-x-[390px]">
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
          
          className=" flex cursor-grab gap-10 sm:w-full lg:w-[50%] lg:h-[50%] ">
          {
            imagesArrWithTitle.map((img,idx) => (
              <motion.div 
              style={{
                backgroundImage: `url(${img.img})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                height: "100%",
                width: "100%",
              }}
              className="min-w-full flex justify-center h-full aspect-video rounded-sm object-cover">
                {
                  img.title && img.subTitle && (
                    <header className="flex items-center mt-20 flex-col">
                      <h2 className="text-3xl text-center text-[#22181C] font-bold">{img.title}</h2>
                      <p className="text-md font-medium">{img.subTitle}</p>
                    </header>
                  )
                }
              </motion.div>
            ) )
          }
        </motion.div>
      </motion.div>
      <button
        onClick={() => onClickArrowButton("left")}  
        className="p-4 absolute left-5 top-[50%] rounded-none bg-main hover:opacity-80 transition duration-150">
        <ChevronLeft />
      </button>
      <button
          onClick={() => onClickArrowButton("right")} 
          className="p-4 rounded-none absolute right-5    top-[50%] bg-main hover:opacity-80 transition duration-150">
          <ChevronRight />
      </button>
    </article>
  )
}