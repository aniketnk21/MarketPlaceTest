# Manual PocketBase Setup

## Steps to Create Database:

1. **Start PocketBase:**
   ```bash
   ./pocketbase.exe serve
   ```

2. **Open Admin Panel:**
   - Go to: http://127.0.0.1:8090/_/
   - Create admin account

3. **Create Products Collection:**
   - Click "New Collection"
   - Name: `products`
   - Type: Base collection

4. **Add Fields:**
   - `name` (Text, Required)
   - `description` (Text, Optional)
   - `price` (Number, Required, Min: 0)
   - `category` (Text, Required)
   - `image` (Text, Optional)
   - `stock` (Number, Required, Min: 0)
   - `brand` (Text, Optional)

5. **Set API Rules:**
   - List rule: "" (empty = public read)
   - View rule: "" (empty = public read)
   - Create/Update/Delete: null (admin only)

6. **Add Sample Products:**
   Click "New Record" and add:

   **Product 1:**
   - name: Gaming Mechanical Keyboard
   - description: RGB backlit mechanical keyboard
   - price: 129.99
   - category: keyboards
   - stock: 15
   - brand: TechPro
   - image: https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300

   **Product 2:**
   - name: Wireless Gaming Mouse
   - price: 79.99
   - category: mice
   - stock: 25
   - brand: GameMax

   **Product 3:**
   - name: 4K Gaming Monitor
   - price: 399.99
   - category: monitors
   - stock: 8
   - brand: ViewTech

Now your database is ready!