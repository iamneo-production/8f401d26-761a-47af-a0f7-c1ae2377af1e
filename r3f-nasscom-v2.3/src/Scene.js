import { Scroll, ScrollControls } from '@react-three/drei'
import { Html } from './components/Html'
import React, { Suspense } from "react";
import { Circularr } from './components/Object'
import { Canvas } from "@react-three/fiber";
import "./styles.css";

const Scene = () => {
    return(
        <>
        <Canvas>
            <ambientLight />
            <Suspense fallback={null}>
                <ScrollControls pages={5} distance={1}>
                    <Circularr />
                    <Scroll html>
                        <Html />
                    </Scroll>
                </ScrollControls>
            </Suspense>
        </Canvas>

        
        </>
    )
}

export default Scene