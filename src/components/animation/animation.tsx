import * as React from 'react';
import { useEffect, useRef } from "react";
import Paper from '@mui/material/Paper';
import { styled } from "@mui/material/styles";

export type AnimationTypeProps = "keyFrames" | "setInterval" | "animationRAF";

const AnimationSlice = styled(Paper)`
    background-color: #AED6F1;
    height: 100px;
    width: 90%;
    padding: 10px;
    position: relative;
    .square {
        background-color: #2c2b30;
        height: 80px;
        width: 80px;
        color: #f2f3f4;
        font-size: 9px;
        display:flex;
        text-align: center;
        align-items: center;  
        &[id="keyFrames"] {
            animation: square 4s linear infinite alternate  1s;
        }
    }

    @keyframes square {
  0% {
    left: 0;
  }
  25% {
    border-radius: 50%;
  }
  50% {
    border-radius: 100%;
  }
  75% {
    border-radius: 50%;
  }
  100% {
    left: 90%;
  }
}
    
`;

export function AnimationSection({ id }: { id: AnimationTypeProps }) {
  const containerRef = useRef(null);
  const squareRef = useRef(null);

  useEffect(()=>{
    switch(id){
      case "keyFrames" :
        break;
      case "setInterval" :{
       if (!containerRef.current || !squareRef.current) return;
                const intervalId = animationSetInterval(
                    containerRef.current,
                    squareRef.current,
                    4
                );
                return () => clearInterval(intervalId);
            }
      case "animationRAF" :{
       if (!containerRef.current || !squareRef.current) return;
       const intervalId = animationRAF(
                    containerRef.current,
                    squareRef.current,
                    8
                );
                return () => clearInterval(intervalId);
            }
      default:
        return;
      }
  }, [containerRef, squareRef, id])

  const getDistance = (section: HTMLElement, square: HTMLElement) => {
        const squareWidth = square.getBoundingClientRect().width;
        const parentPadding = parseInt(getComputedStyle(section).paddingLeft);
        const sectionWidth = section.clientWidth - 2 * parentPadding;
        let distance = sectionWidth - squareWidth;

        return distance;
    };

    const animationSetInterval = (
        section: HTMLElement,
        square: HTMLElement,
        duration: number
    ) => {
        const distance = getDistance(section, square);

        let path = 0;
        let delta = 1;

        const move = () => {
            path += delta;
            if (path > distance || path < 0) {
                delta *= -1;
            } else {
                square.style.translate = `${path}px`;
            }
        };

        const intervalId = setInterval(() => move(), 10);
        return intervalId;
    };

    const animationRAF= (
      section: HTMLElement,
      square: HTMLElement,
      duration: number
    ) => {
      const distance = getDistance(section, square);

      let start = Date.now()
      let direction : "forth"| "back" = "back"

      const step = () => {
            const time = Date.now();
            let timeFraction = (time - start) / (duration * 1000);
            if (timeFraction >= 1 && direction === "forth") {
                timeFraction = 1;
            }
            if (timeFraction >= 1 && direction === "back") {
                timeFraction = 0;
            }
            let path =
                direction === "forth"
                    ? distance * timeFraction
                    : distance - distance * timeFraction;
            if (timeFraction === 1) {
                start = time;
                direction = "back";
            }
            if (timeFraction === 0) {
                direction = "forth";
                start = time;
                path = 0;
            }

            square.style.translate = `${path}px`;

            requestAnimationFrame(step);
          }
          
          return requestAnimationFrame(step);
    };


   return (
        <AnimationSlice ref={containerRef}>
            <AnimationSlice ref={squareRef} id={`${id}`} className="square">
                {`${id}`}
            </AnimationSlice>
        </AnimationSlice>
    );
}