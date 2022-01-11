/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumRootToLeaf = function (root) {
  var dfs = function (root, val) {
    if (root == null) return 0;
    val = val * 2 + root.val;

    console.log(val);
    return root.left == root.right
      ? val
      : dfs(root.left, val) + dfs(root.right, val);
  };

  return dfs(root, 0);
};

console.log(sumRootToLeaf([1, 0, 1, 0, 1, 0, 1]));
console.log(sumRootToLeaf([0]));
