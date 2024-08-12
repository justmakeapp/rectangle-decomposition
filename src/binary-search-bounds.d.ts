declare module "binary-search-bounds" {
    interface BSearch {
        /**
         * Returns the index of the first item in the array > y. This is the same as a successor query.
         */
        gt<T>(array: T[], y: T, compare?: (a: T, b: T) => number | null | undefined, lo?: number, hi?: number): number;
        /**
         * Returns the index of the first item in the array >= y. This is a successor query which also returns the item if present.
         */
        ge<T>(array: T[], y: T, compare?: (a: T, b: T) => number | null | undefined, lo?: number, hi?: number): number;
        /**
         * Returns the index of the last item in the array < y. This is the same as a predecessor query.
         */
        lt<T>(array: T[], y: T, compare?: (a: T, b: T) => number | null | undefined, lo?: number, hi?: number): number;
        /**
         * Returns the index of the last item in the array <= y. This is a predecessor query which also returns the item if present.
         */
        le<T>(array: T[], y: T, compare?: (a: T, b: T) => number | null | undefined, lo?: number, hi?: number): number;
        /**
         * Returns an index of some item in the array == y or -1 if the item is not present.
         */
        eq<T>(array: T[], y: T, compare?: (a: T, b: T) => number | null | undefined, lo?: number, hi?: number): number;
    }
    const bsearch: BSearch;
    export = bsearch;
}
