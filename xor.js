define(['./_arrayFilter', './_baseXor', './isArrayLikeObject', './rest'], function(arrayFilter, baseXor, isArrayLikeObject, rest) {

  /**
   * Creates an array of unique values that is the
   * [symmetric difference](https://en.wikipedia.org/wiki/Symmetric_difference)
   * of the given arrays. The order of result values is determined by the order
   * they occur in the arrays.
   *
   * @static
   * @memberOf _
   * @since 2.4.0
   * @category Array
   * @param {...Array} [arrays] The arrays to inspect.
   * @returns {Array} Returns the new array of values.
   * @see _.difference, _.without
   * @example
   *
   * _.xor([2, 1], [4, 2]);
   * // => [1, 4]
   */
  var xor = rest(function(arrays) {
    return baseXor(arrayFilter(arrays, isArrayLikeObject));
  });

  return xor;
});
