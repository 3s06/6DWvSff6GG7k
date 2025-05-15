'use client'

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import { BookTextIcon } from "./ui/book-text"
import { CircleDollarSignIcon } from "./ui/circle-dollar-sign"
import { RiTShirt2Line, RiPencilLine } from "react-icons/ri"
import { RocketIcon } from "./ui/rocket"
import { BoxesIcon } from "./ui/boxes"
import { StethoscopeIcon } from "./ui/stethoscope"

export function SessãoDosProdutos() {
  const containerRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1.5, 0.7]);
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="w-full min-h-screen mx-auto bg-black flex flex-col items-center justify-center py-20 overflow-hidden"
    >
      <div className="w-full py-10 flex flex-col sm:flex-row gap-y-4 sm:gap-y-0 items-center justify-between px-6 sm:px-20 mb-40">
        <div className="text-xl text-white/70 font-medium max-w-xl text-center sm:text-left">
          Diversos produtos para atender a todos os tipos de mercado.
          <p className="text-white font-medium text-xl">
            Crie facilmente soluções físicas e digitais para diferentes públicos
          </p>
          com agilidade e simplicidade
        </div>
        <div  className="flex flex-col gap-y-2 items-center">
          <div className="flex items-center gap-x-2 flex-wrap justify-center">
            <Tag icon={<RiTShirt2Line size={15} />} label="Moda" />
            <Tag icon={<RocketIcon size={15} />} label="Marketing Digital" />
            <Tag icon={<RiPencilLine size={15} />} label="Design" />
            <Tag icon={<CircleDollarSignIcon size={15} />} label="Economia" />
            <Tag icon={<BoxesIcon size={15} />} label="Info Produtos" />
            <Tag icon={<StethoscopeIcon size={15} />} label="Saúde" />
            <Tag icon={<BookTextIcon size={15} />} label="E-books" />
          </div>
        </div>
      </div>
     <motion.div
        style={{ scale }}
        className="items-center flex flex-col gap-[20rem] h-[1200px] justify-start px-0 pb-0 w-full relative z-0"
      >
        <div className="framer-4lhjoq">
            <div className="ssr-variant">
                <div className="framer-xf75wf">
                    <div className="framer-puew1h"  key={"Line 1"}>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/xwLpWxnMv7Bh1TSBPbayf9E8Mu4.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/9Weh5hCugrP9Mj1tPTesOmrR33A.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/2QIPFG0AGFp9ZIfx4M6U2dpq8.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/3JkOAoMuiocoX6UOrljAXTcv0g.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/nXgNFYTJWtT1d7Wa35vqHo0jmIM.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/4vfSowNTymlJ7r4syrMyUZSsRw.png" alt="" />
                        </div>
                    </div>
                    <div className="framer-puew1h"  key={"Line 2"}>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/3dqND7MkL4W41l7hDsNbtdaHkx4.png" alt="" />
                        </div>
                        <div className="framer-hx98nc">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/Z9JbLodbjJvxuaiWzpXr5kZV4.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/ZX1Yr1GTSRFG0p6lAxvuhRGPPc.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/NgASX3njfDpsoR7k9P5IUNlKrGI.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/XQazkZtmPLRoGoP895yyxJXw7vE.png" alt="" />
                        </div>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/3dqND7MkL4W41l7hDsNbtdaHkx4.png" alt="" />
                        </div>
                    </div>
                    <div className="framer-puew1h"  key={"Line 3"}>
                        <div className="framer-1yoxxiy">
                            <img className="w-[512.7px] opacity-50 hover:opcity-100 h-[302.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/x96LDNs1BbnorXKdZS9UNxFHbw.png" alt="" />
                        </div>
                    </div>
                    <div className="framer-puew1h"  key={"Line 4"}>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/xwLpWxnMv7Bh1TSBPbayf9E8Mu4.png" alt="" />
                        </div>
                    </div>
                    <div className="framer-puew1h"  key={"Line 5"}>
                        <div className="framer-1yoxxiy">
                            <img className="w-[515.7px] opacity-50 hover:opcity-100 h-[411.52px] object-cover z-5 rounded-lg" src="https://framerusercontent.com/images/xwLpWxnMv7Bh1TSBPbayf9E8Mu4.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      </motion.div>
     {/*  <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-red-500 to-transparent z-10"></div> */}
    </section>
  )
}

function Tag({ icon, label }: { icon: React.ReactNode; label: string }) {
  return (
    <div className="bg-black hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-white/30 rounded-full px-3 py-1 flex items-center justify-center">
      <div className="rounded-full border border-white/30 text-white flex items-center justify-center size-7 mr-1">
        {icon}
      </div>
      <span className="text-white font-medium">{label}</span>
    </div>
  )
}
