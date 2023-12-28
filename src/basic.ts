import React from "react";

function sum(x: number, y: number): number {
    return x + y;
}

const result: number = sum(1, 1);

function sumArray(numbers: number[]): number {
    return numbers.reduce((acc, current) => acc + current, 0);
}

const total: number = sumArray([1, 2, 3, 4, 5]);

function returnNothing(): void {
    console.log('모찌나간다');
}

returnNothing();

function returnStringOrNumber(): string | number {
    return '1';
}

let count = 0;
count += 1;

const message: string = 'hello world';
const done: boolean = false;

const numbers: number[] = [1, 2, 3];
const messages: string[] = ['hello', 'world']

messages.push('1');

let mightBeUndefined: string | undefined = undefined;
let nullableNumber: number | null = null;

let color: 'red' | 'origin' | 'yellow' = 'red';
color = 'yellow';

