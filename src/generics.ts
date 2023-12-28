import React from "react";

function merge<T1, T2>(a: T1, b: T2) {
    return {
        ...a,
        ...b
    };
}

const merged = merge({foo: 1}, {bar: 2});

function wrap<T>(param: T) {
    return {
        param
    };
}

const wrapped = wrap('10');

interface Items<T> {
    list: T[]
}
const items: Items<String> = {
    list: ['a', 'b', 'c']
};

type ItemsType<T, V> = {
    list: T[],
    value: V[]

};
const itemsType: ItemsType<string, number> = {
    list: ['a', 'b', 'c'],
    value: [1, 2, 3]
};
