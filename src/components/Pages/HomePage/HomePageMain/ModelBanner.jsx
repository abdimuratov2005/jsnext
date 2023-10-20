'use client'
import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";
import Scene from "@/components/Model/src/Scene";
import {OrbitControls} from "@react-three/drei";


export default function ModelBanner() {
    return (
        <Suspense fallback={null}>
            <Canvas shadows flat linear>
                <Scene />
                <OrbitControls />
            </Canvas>
        </Suspense>
        )

}
