import { ReactFlow, Background } from '@xyflow/react';
import "@xyflow/react/dist/style.css";
import './App.css'

import { StartNode, EndNode, ActionNode } from './CustomNodes';
import AdditionEdge from './AdditionEdge';

// Initial list of nodes.
const nodes = [
  {
    id: "Start",
    position: {x: 500, y:0},
    data: {},
    type: "startNode"
  },
  {
    id: "End",
    position: {x: 500, y:150},
    data: {},
    type: "endNode"
  }
];

// Initial list of edges.
const edges = [
  {id: "Start-End", source: "Start", target: "End", type: "additionEdge"}
];

// List of custom edge types.
const edgeType = {
  additionEdge: AdditionEdge
}

// List of custom node types.
const nodeType = {
  startNode: StartNode,
  endNode: EndNode,
  actionNode: ActionNode
};

// This function renders the app.
function App() {
  return (
    <>
      <ReactFlow nodes={nodes} edges={edges} edgeTypes={edgeType} nodeTypes={nodeType}>
        <Background />
      </ReactFlow>
    </>
  )
}

export default App;