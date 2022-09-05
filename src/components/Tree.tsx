import createPanZoom from "panzoom";
import { useEffect } from "react";
import { GridGenerator, Hexagon, HexGrid, Layout } from "react-hexgrid";

const HEX_GRID_ID = "hexgrid";
const HEX_GRID_RADIUS = 6; // TODO: take this as a prop
const HEX_RADIUS = 3;

const Tree = () => {

  const hexes = GridGenerator.hexagon(HEX_GRID_RADIUS);

  /**
   * Make the hexgrid SVG pannable and zoomable
   */
  useEffect(() => {
    const hexgrid = document.querySelector(`#${HEX_GRID_ID}`) as SVGElement;
    createPanZoom(hexgrid, {
      bounds: true,
      boundsPadding: 0.75,
      minZoom: 0.8,
      maxZoom: 4,
    });
  }, []);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <HexGrid
        className="block w-full h-full"
        id={HEX_GRID_ID}
      >
        <Layout size={{ x: HEX_RADIUS, y: HEX_RADIUS }}>
          {hexes.map(({ q, r, s }) => (
            <Hexagon
              key={`${q}-${r}-${s}`}
              q={q}
              r={r}
              s={s}
              className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500"
            />
          ))}
        </Layout>
      </HexGrid>
    </div>
  );
};

export default Tree;
