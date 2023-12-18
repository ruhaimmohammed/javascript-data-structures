const Graphs = () => {
    // #. example of undirectedGraph in JS way as Json
    var undirectedGraph = {
        NodeA: ["NodeB"],
        NodeB: ["NodeA", "NodeC"],
        NodeC: ["NodeB"]
    };

    // #. Adjacency matrix representation in js 
    var adjMat = [
        [0, 1, 0],
        [1, 0, 1],
        [0, 1, 0],
    ];
}

export default Graphs;