import { OrbitControls, Stage } from "@react-three/drei";
import { useConfigurator } from "../contexts/Configurator";
import { Table } from "./Table";

export const Experience = () => {
  const { legs } = useConfigurator(); // Force rerender the stage & shadows
  return (
    <>
      <Stage
        intensity={1.5}
        environment={null}
        shadows={{
          type: "accumulative",
          color: "#d9afd9",
          colorBlend: 2,
          opacity: 2,
        }}
        adjustCamera={2}
      >
        <Table />
      </Stage>
      <OrbitControls
        makeDefault
        minPolarAngle={0}
        maxPolarAngle={Math.PI / 2}
      />
    </>
  );
};
