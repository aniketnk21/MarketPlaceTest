// PocketBase Setup Script
// Run this in PocketBase Admin UI > Settings > Import collections

const collections = [
  {
    "id": "products",
    "name": "products",
    "type": "base",
    "system": false,
    "schema": [
      {
        "id": "name",
        "name": "name",
        "type": "text",
        "system": false,
        "required": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "description",
        "name": "description",
        "type": "text",
        "system": false,
        "required": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "price",
        "name": "price",
        "type": "number",
        "system": false,
        "required": true,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "id": "category",
        "name": "category",
        "type": "text",
        "system": false,
        "required": true,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      },
      {
        "id": "image",
        "name": "image",
        "type": "file",
        "system": false,
        "required": false,
        "options": {
          "maxSelect": 1,
          "maxSize": 5242880,
          "mimeTypes": [
            "image/jpeg",
            "image/png",
            "image/svg+xml",
            "image/gif",
            "image/webp"
          ],
          "thumbs": null
        }
      },
      {
        "id": "stock",
        "name": "stock",
        "type": "number",
        "system": false,
        "required": true,
        "options": {
          "min": 0,
          "max": null
        }
      },
      {
        "id": "brand",
        "name": "brand",
        "type": "text",
        "system": false,
        "required": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  }
];

// Sample products to add manually in PocketBase Admin
const sampleProducts = [
  {
    name: "Gaming Mechanical Keyboard",
    description: "RGB backlit mechanical keyboard with Cherry MX switches",
    price: 129.99,
    category: "keyboards",
    stock: 15,
    brand: "TechPro"
  },
  {
    name: "Wireless Gaming Mouse",
    description: "High-precision wireless gaming mouse with RGB lighting",
    price: 79.99,
    category: "mice", 
    stock: 25,
    brand: "GameMax"
  },
  {
    name: "27\" 4K Gaming Monitor",
    description: "4K UHD gaming monitor with 144Hz refresh rate",
    price: 399.99,
    category: "monitors",
    stock: 8,
    brand: "ViewTech"
  }
];