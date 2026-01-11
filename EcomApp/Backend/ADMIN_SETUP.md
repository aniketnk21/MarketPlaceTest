# PocketBase Admin Setup Guide

## 1. Start PocketBase
```bash
cd Backend
./pocketbase.exe serve
```

## 2. Access Admin Panel
- URL: http://127.0.0.1:8090/_/
- Create admin account on first visit

## 3. Create Products Collection
- Go to Collections → New Collection
- Name: `products`
- Type: Base collection

## 4. Add Fields to Products Collection:
- `name` (Text, Required)
- `description` (Text, Optional)  
- `price` (Number, Required, Min: 0)
- `category` (Text, Required)
- `image` (File, Optional, Max: 1 file, Images only)
- `stock` (Number, Required, Min: 0)
- `brand` (Text, Optional)

## 5. Set Collection Rules (Optional):
- List rule: "" (empty = public read)
- View rule: "" (empty = public read)
- Create/Update/Delete: null (admin only)

## 6. Add Sample Products:
Go to Collections → products → New Record and add:

**Product 1:**
- name: Gaming Mechanical Keyboard
- description: RGB backlit mechanical keyboard with Cherry MX switches
- price: 129.99
- category: keyboards
- stock: 15
- brand: TechPro

**Product 2:**
- name: Wireless Gaming Mouse  
- description: High-precision wireless gaming mouse with RGB lighting
- price: 79.99
- category: mice
- stock: 25
- brand: GameMax

**Product 3:**
- name: 27" 4K Gaming Monitor
- description: 4K UHD gaming monitor with 144Hz refresh rate
- price: 399.99
- category: monitors
- stock: 8
- brand: ViewTech

## 7. Categories to use:
- keyboards
- mice
- monitors
- storage
- accessories