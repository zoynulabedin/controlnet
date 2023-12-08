import { useRef, Suspense } from "react";
import { Canvas, extend, useLoader } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera, useGLTF } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Mesh } from "three";
import { useProgress, Html } from "@react-three/drei";
import { isEmpty } from "../../../utility/isEmpty";

extend({ OrbitControls, PerspectiveCamera });

const ModelView = ({ model_src }) => {
  return (
    <div
      className="flex justify-center items-center"
      style={{ width: "100%", height: "400px" }}
    >
      {!isEmpty(model_src) ? (
        <Canvas style={{ width: "100%", height: "100%" }}>
          <PerspectiveCamera makeDefault position={[30, 20, 30]} />
          <OrbitControls />
          <ambientLight />
          <pointLight position={[20, 20, 20]} />
          <Suspense fallback={<Loader />}>
            <MeshComponent model_src={model_src} />
          </Suspense>
        </Canvas>
      ) : (
        <></>
      )}
    </div>
  );
};

function MeshComponent({ model_src }) {
  const fileUrl = model_src;
  const mesh = useRef();
  const gltf = useLoader(GLTFLoader, fileUrl);

  return (
    <mesh ref={mesh}>
      <primitive object={gltf.scene} />
    </mesh>
  );
}

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div style={{ whiteSpace: 'nowrap' }}  className=" text-white">Generating Model</div>
    </Html>
  );
}

export default ModelView;
