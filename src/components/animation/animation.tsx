import * as React from 'react';
import { useEffect, useRef } from "react";
import {Paper} from '@mui/material';
import { styled } from "@mui/material/styles";
import { animationSetInterval, animationRAF } from '../../utils/utils';

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
        justify-content: center;
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

   return (
        <AnimationSlice ref={containerRef}>
            <AnimationSlice ref={squareRef} id={`${id}`} className="square">
                {`${id}`}
            </AnimationSlice>
        </AnimationSlice>
    );
}