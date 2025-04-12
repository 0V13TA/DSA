/**
 * Class representing an extended Set with additional functionality.
 * @extends Set
 */
export class ExtendedSet extends Set {
  /**
   * Create an ExtendedSet.
   * @param {Iterable} [iterable] - An optional iterable to initialize the set.
   */
  constructor(iterable) {
    super(iterable);
  }

  /**
   * Get the union of this set and another set.
   * @param {Set} otherSet - The other set to union with.
   * @returns {ExtendedSet} The union of the two sets.
   */
  union(otherSet) {
    return new ExtendedSet([...this, ...otherSet]);
  }

  /**
   * Get the intersection of this set and another set.
   * @param {Set} otherSet - The other set to intersect with.
   * @returns {ExtendedSet} The intersection of the two sets.
   */
  intersection(otherSet) {
    return new ExtendedSet([...this].filter((item) => otherSet.has(item)));
  }

  /**
   * Get the difference of this set and another set.
   * @param {Set} otherSet - The other set to difference with.
   * @returns {ExtendedSet} The difference of the two sets.
   */
  difference(otherSet) {
    return new ExtendedSet([...this].filter((item) => !otherSet.has(item)));
  }

  /**
   * Check if this set is a subset of another set.
   * @param {Set} otherSet - The other set to check against.
   * @returns {boolean} True if this set is a subset of the other set, otherwise false.
   */
  isSubsetOf(otherSet) {
    return [...this].every((item) => otherSet.has(item));
  }

  /**
   * Check if this set is a superset of another set.
   * @param {Set} otherSet - The other set to check against.
   * @returns {boolean} True if this set is a superset of the other set, otherwise false.
   */
  isSupersetOf(otherSet) {
    return [...otherSet].every((item) => this.has(item));
  }
}
