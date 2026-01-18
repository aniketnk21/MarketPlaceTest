# PocketBase Database Setup

## Quick Setup Steps:

1. **Start PocketBase:**
   ```bash
   cd Backend
   ./pocketbase.exe serve
   ```

2. **Access Admin Panel:**
   - Open: http://127.0.0.1:8090/_/
   - Create admin account

3. **Import Schema:**
   - Go to Settings > Import collections
   - Upload `pb_schema.json`

4. **Add Sample Products:**
   Go to Collections > products > New record:

   **Product 1:**
   - name: Gaming Mechanical Keyboard
   - description: RGB backlit mechanical keyboard with Cherry MX switches
   - price: 129.99
   - category: keyboards
   - stock: 15
   - brand: TechPro
   - image: https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=300

   **Product 2:**
   - name: Wireless Gaming Mouse
   - description: High-precision wireless gaming mouse with RGB lighting
   - price: 79.99
   - category: mice
   - stock: 25
   - brand: GameMax
   - image: https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300

   **Product 3:**
   - name: 27" 4K Gaming Monitor
   - description: 4K UHD gaming monitor with 144Hz refresh rate
   - price: 399.99
   - category: monitors
   - stock: 8
   - brand: ViewTech
   - image: https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300

5. **Start Frontend:**
   ```bash
   cd frontend
   npm run dev
   ```

The database will be automatically created when you start PocketBase for the first time.