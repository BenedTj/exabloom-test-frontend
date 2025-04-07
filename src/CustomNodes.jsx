import { Handle, Position } from "@xyflow/react";

// This function defines nodes of the type "startNode".
export function StartNode() {
    return (
        <>
            <div className="start-action-node">
                <div className="logo-div">
                    <img src="/src/assets/startnode.png" width="40" height="40"></img>
                </div>
                <div className="start-action-node-text">
                    <div className="start-node-title">Start Node</div>
                    <div>Start</div>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} style={{ visibility: "hidden" }}/>
        </>
    );
};

// This function defines nodes of the type "actionNode".
export function ActionNode({ data }) {
    return (
        <>
            <div className="start-action-node">
                <div className="logo-div">
                    <img src="/src/assets/people.png" width="40" height="40"></img>
                </div>
                <div className="start-action-node-text">
                    <div className="action-node-title">{data.label}</div>
                </div>
            </div>
            <Handle type="source" position={Position.Bottom} style={{ visibility: "hidden" }}/>
        </>
    );
}

// This function defines nodes of the type "endNode".
export function EndNode() {
    return (
        <>
            <div className="end-node">
                <div>END</div>
            </div>
            <Handle type="target" position={Position.Top} style={{ visibility: "hidden" }}/>
        </>
    );
};