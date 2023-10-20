'use client'
import {Suspense} from "react";
import {Canvas} from "@react-three/fiber";

import {OrbitControls} from "@react-three/drei";
import Scene from "@/components/Model/Scene";


export default function ModelFree() {
    return (
        <div className={'w-[500px] h-[500px]'}>
            <Suspense fallback={null}>
                <Canvas shadows flat linear>
                    <Scene />
                    <OrbitControls />
                </Canvas>
            </Suspense>
        </div>

        )

}
