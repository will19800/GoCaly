"use client";

import animation from '../animations/calenderAnimation.json';
import React, { useEffect, useRef, useState } from "react";

export default function AnimationNotFound() {
    const animationRef = useRef<HTMLDivElement>(null);
    const [isAnimationInitialized, setIsAnimationInitialized] = useState(false);

    async function getLottie() {
        const lot = await import("lottie-web");
        
        if (animationRef.current && !isAnimationInitialized) {
            lot.default.loadAnimation({
                autoplay: true,
                loop: true,
                animationData: animation,
                container: animationRef.current,
            });
            setIsAnimationInitialized(true);  // Mark animation as initialized
        }
    }

    useEffect(() => {
        getLottie();
    }, []);  // Empty dependency array to run only once on mount

    return (
        <div ref={animationRef} style={{ width: "100%", height: "100%", marginTop: '-130px', marginBottom: '-150px', marginLeft:'70px' }}></div>
    );
}