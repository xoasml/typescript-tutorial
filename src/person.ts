import React from "react";

interface Person {
    name: string;
    age?: number;
}

const person: Person = {
    name: '김사람',
    age: 20,
};

interface Developer extends Person{
    skills: string[];
}

const expert: Developer = {
    name: '김개발',
    skills: ['js', 'react', 'ts']
}




type PersonType = {
    name: string;
    age?: number;
}
const personType: PersonType = {
    name: '김사람',
    age: 20,
};

type DeveloperType = PersonType &{
    skills: string[];
}
const expertType: DeveloperType = {
    name: '김개발',
    skills: ['js', 'react', 'ts']
}

type People = PersonType[];
const people: People = [person, expert];

type Color = 'red' | 'origin' | 'yellow';
const color: Color = "origin";



