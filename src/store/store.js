import { writable } from "svelte/store";

export const cart = writable([])

export const products = writable([
    {
        id: 1,
        name: "Grumpy Red Curry",
        price: 24,
        image: "https://images.unsplash.com/photo-1631671608525-07c5479fd5cf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 2,
        name: "Chocolate Poop with Pomegranate",
        price: 29.99,
        image: "https://images.unsplash.com/photo-1631671608597-36f59e7df460?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
    },
    {
        id: 3,
        name: "Airly Cheddar Cracker",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1631671608439-6fb3b561c879?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 4,
        name: "Olipop Strawberry Vanilla",
        price: 3,
        image: "https://images.unsplash.com/photo-1620631442557-ba85b70585de?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=719&q=80"
    },
    {
        id: 5,
        name: "Proteines Organic",
        price: 7,
        image: "https://images.unsplash.com/photo-1624278900732-5441bb13de47?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 6,
        name: "Coca'Cola Zero",
        price: 4,
        image: "https://images.unsplash.com/photo-1630404365865-97ff92feba6a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 7,
        name: "Doughp Cookie",
        price: 6,
        image: "https://images.unsplash.com/photo-1629993470881-09a7578cf96e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=701&q=80"
    },
    {
        id: 8,
        name: "Dandy",
        price: 10,
        image: "https://images.unsplash.com/photo-1629734553534-0f38b15d3830?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: 9,
        name: "Stark Mango",
        price: 15,
        image: "https://images.unsplash.com/photo-1601958228258-ac35848530f5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
    {
        id: 10,
        name: "Kariz Orange Juice",
        price: 7,
        image: "https://images.unsplash.com/photo-1599360889420-da1afaba9edc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80"
    },
    {
        id: 11,
        name: "Love Corn",
        price: 9,
        image: "https://images.unsplash.com/photo-1631671608618-5a6aba0e3a4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=701&q=80"
    },
    {
        id: 12,
        name: "Beverage Immunity boost",
        price: 14,
        image: "https://images.unsplash.com/photo-1631671608591-4624130ced70?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
    },
])