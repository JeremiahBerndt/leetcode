/*
Given the roots of two binary trees p and q, write a function to check if they are the same or not.

Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.

 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

var isSameTree = function (p, q) {
  // if both p and q nodes are falsey, return true
  if (!p && !q) {
    return true;
  };
  // if the nodes are not the same return false
  if (p.val !== q.val) {
    return false
  }
  return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)