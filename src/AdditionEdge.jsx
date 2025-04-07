import { BaseEdge, EdgeLabelRenderer, getStraightPath, useReactFlow, useNodes, useEdges } from "@xyflow/react";

// This function defines edges of the type additionEdge.
export default function AdditionEdge({id, sourceX, sourceY, targetX, targetY}) {
    // Get parameters to build a straight path for the edge.
    const [ path, labelX, labelY ] = getStraightPath({
        sourceX,
        sourceY,
        targetX,
        targetY
    });
    // Get the source and target nodes of the additionEdge.
    const { setEdges, setNodes } = useReactFlow();
    const {source, target} = useEdges().filter((edge) => edge.id === id)[0];
    const sourceNode = useNodes().filter((nodes) => nodes.id === source)[0];
    const targetNode = useNodes().filter((nodes) => nodes.id === target)[0];

    // Attempt at creating addActionNode function to be put in the onClick prop for button.
    function addActionNode() {
        const targetNodeY = targetNode.position.y;
        /* Display all nodes with a position.y value
        * more than the target node's by 150 units.
        */
        setNodes((nodes) => nodes.map(
            (node) => node.position.y >= targetNodeY
            ? ({
                ...node,
                position: {
                    x: node.position.x,
                    y: node.position.y + 150
                }
            })
            : node
        ));

        // Create the new actionNode to be created.
        const newId = id + "-extend";
        const newNode = {
            id: newId,
            position: {x: 500, y:targetNodeY},
            data: {label: "Action Node"},
            type: "actionNode"
        };
        // Add new actionNode to the list of nodes.
        setNodes((nodes) => nodes.concat([newNode]));
        // Add edges connected to the new actionNode to the list of edges.
        setEdges((edges) => edges.filter(
            (edge) => edge.id !== id
        ));
        setEdges(edges =>
            edges.concat([
                {
                    id: source + "-" + newId,
                    source: sourceNode,
                    target: newNode,
                    type: "additionEdge"
                },
                {
                    id: newId + "-" + target,
                    source: newNode,
                    target: targetNode,
                    type: "additionEdge"
                }
        ]));
    };

    // Return the rendered edge.
    return (
        <>
            <BaseEdge path={path} />
            <EdgeLabelRenderer>
                <div
                style={{
                    transform: `translate(-50%, -50%) translate(${labelX}px,${labelY}px)`,
                    pointerEvents: 'all',
                    zIndex: 1000,
                }}
                >
                    <button className="addition-edge-button" onClick={addActionNode}>
                        +
                    </button>
                </div>
            </EdgeLabelRenderer>
        </>
    );
}