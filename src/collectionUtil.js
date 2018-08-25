/**
 * 集合扩展 demo
 */

export function customSet() {
    let set1 = new Set(['aaa', 'bbb', 'ccc', 'ddd', 'ccc']);

    let length = set1.size;
    let keys = [...set1.keys()];
    let values = [...set1.values()];
    let entries = [...set1.entries()];

    return { length, keys, values, entries };
}

export function customMap() {
    const dic = new Map([
        [{ sex: 'male' }, 1],
        [{ name: 'haha' }, 'zhang three']
    ]);

    dic.set({ name: 'haha' }, 'li four');

    return dic;
}