import { Hexagon, HexGrid, Layout } from "react-hexgrid";

const Tree = () => {
  return (
    <HexGrid width={1200} height={1000}>
      <Layout>
        <Hexagon q={0} r={0} s={0} className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500" />
        <Hexagon q={0} r={1} s={-1} className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500" />
        <Hexagon q={0} r={-1} s={1} className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500" />
        <Hexagon q={1} r={0} s={-1} className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500" />
        <Hexagon q={-1} r={0} s={1} className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500" />
        <Hexagon q={1} r={-1} s={0} className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500" />
        <Hexagon q={-1} r={1} s={0} className="fill-slate-300 stroke-slate-500 stroke-[0.2] transition-all duration-300 hover:fill-slate-500" />
      </Layout>
    </HexGrid>
  );
};

export default Tree;
