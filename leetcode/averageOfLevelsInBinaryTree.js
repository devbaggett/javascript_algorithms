// 637. Average of Levels in Binary Tree

// Given a non-empty binary tree, return the average value of the nodes on each level in the form of an array.

// Input:
//      3
//     / \
//    9  20
//      /  \
//     15   7

// Output: [3, 14.5, 11]
// Explanation:
// The average value of nodes on level 0 is 3,  on level 1 is 14.5, and on level 2 is 11. Hence return [3, 14.5, 11].


function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
}

const tree = new TreeNode(3, new TreeNode(9), new TreeNode(20, new TreeNode(15), new TreeNode(7)));

const averageOfLevels = root => {
    if (!root) return 0;

    const result = [];

    const tree = [root];
    while (tree.length) {
        const treeLen = tree.length;
        let sum = 0;
        for (let i = 0; i < treeLen; i++) {
            const node = tree.shift();
            sum += node.val;
            if (node.left) tree.push(node.left);
            if (node.right) tree.push(node.right);
        }
        result.push(sum / treeLen);
    }

    return result;
};

console.log(averageOfLevels(tree));
