//Expample of the product object
// {
//     "id": 4,
//     "title": "Handmade Fresh Table",
//     "slug": "handmade-fresh-table",
//     "price": 687,
//     "description": "Andy shoes are designed to keeping in...",
//     "category": {
//       "id": 5,
//       "name": "Others",
//       "image": "https://placehold.co/600x400",
//       "slug": "others"
//     },
//     "images": [
//       "https://placehold.co/600x400",
//       "https://placehold.co/600x400",
//       "https://placehold.co/600x400"
//     ]
//   }

import fetch from 'node-fetch';
const API_URL = 'https://api.escuelajs.co/api/v1/products';

export interface Category {
    id: number;
    name: string;
    image: string;
    slug: string;
    // Optional fields that might be present
    creationAt?: string;
    updatedAt?: string;
}

export interface Product {
    id: number;
    title: string;
    slug: string;
    price: number;
    description: string;
    category: Category;
    images: string[];
    creationAt?: string;
    updatedAt?: string;
}

export async function fetchProducts(): Promise<Product[]> {
    const response = await fetch(API_URL);
    if (!response.ok) {
        throw new Error(`Failed to fetch products: ${response.status}`);
    }
    const data = await response.json();
    return data as Product[];
}
