import { useCubeTexture, MeshDistortMaterial, Sphere, Float } from '@react-three/drei'


const Circularr = () => {
    const envMap = useCubeTexture(['px.png', 'nx.png', 'py.png', 'ny.png', 'pz.png', 'nz.png'], { path: '/cube/' })
    return(
        <>
        <Float
        speed={1} // Animation speed, defaults to 1
        rotationIntensity={1} // XYZ rotation intensity, defaults to 1
        floatIntensity={1} // Up/down float intensity, works like a multiplier with floatingRange,defaults to 1
        floatingRange={[1, -1]} 
        >
            <Sphere args={[1.3,64,64]}>
            <MeshDistortMaterial
                color={'#010101'}
                roughness={0.1}
                metalness={1}
                bumpScale={0.005}
                clearcoat={1}
                clearcoatRoughness={1}
                radius={1}
                distort={0.3}
                envMap={envMap}
        />
        </Sphere>
        </Float>
        
        </>
    )
}

export { Circularr }