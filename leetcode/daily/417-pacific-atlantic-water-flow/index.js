/**
 * @param {number[][]} heights
 * @return {number[][]}
 */
var pacificAtlantic = function(heights) {
    const m = heights.length;
    const n = heights[0].length;

    const pacific = Array.from({ length: m }, () => Array(n).fill(false));
    const atlantic = Array.from({ length: m }, () => Array(n).fill(false));

    const directions = [[1,0], [-1,0], [0,1], [0,-1]];

    function dfs(r, c, visited, prevHeight) {
        if (r < 0 || r >= m || c < 0 || c >= n) return;
        if (visited[r][c]) return;
        if (heights[r][c] < prevHeight) return;

        visited[r][c] = true;
        for (const [dr, dc] of directions) {
            dfs(r + dr, c + dc, visited, heights[r][c]);
        }
    }

    for (let c = 0; c < n; c++) {
        dfs(0, c, pacific, heights[0][c]);
        dfs(m - 1, c, atlantic, heights[m - 1][c]);
    }
    for (let r = 0; r < m; r++) {
        dfs(r, 0, pacific, heights[r][0]);
        dfs(r, n - 1, atlantic, heights[r][n - 1]);
    }

    const result = [];
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (pacific[r][c] && atlantic[r][c]) {
                result.push([r, c]);
            }
        }
    }

    return result;
};
