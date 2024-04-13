import React from 'react';
import './styles/GraphHolder.css'

class GraphHolder extends React.Component {
    render() {
        return (
            <div className="graph-holder">
                <h2>Magic Rod</h2>
                <div id="graph">
                    <canvas id="chart"></canvas>
                </div>
            </div>
        );
    }
}

export default GraphHolder;