import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter',() =>{

    const count = ref(0);

    return {
        count
    }

})// Generated by https://quicktype.io

export interface Client {
    id:       number;
    isActive: boolean;
    picture:  string;
    age:      number;
    eyeColor: string;
    name:     string;
    gender:   Gender;
    company:  string;
    email:    string;
    phone:    string;
    address:  string;
}

export enum Gender {
    Female = "female",
    Male = "male",
}
