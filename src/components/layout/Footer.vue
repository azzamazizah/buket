<template>
  <footer class="bg-gray-800 text-white mt-12">
    <div class="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div>
          <h3 class="text-xl font-bold mb-4">Zahra Bouquet</h3>
          <p class="text-gray-300">Beautiful flowers for every occasion</p>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Quick Links</h4>
          <ul class="space-y-2">
            <li><router-link to="/" class="text-gray-300 hover:text-white">Home</router-link></li>
            <li><router-link to="/products" class="text-gray-300 hover:text-white">Products</router-link></li>
            <li><router-link to="/about" class="text-gray-300 hover:text-white">About</router-link></li>
            <li><router-link to="/contact" class="text-gray-300 hover:text-white">Contact</router-link></li>
          </ul>
        </div>
        <div>
          <h4 class="text-lg font-semibold mb-4">Contact Us</h4>
          <ul class="text-gray-300 space-y-2">
            <li>123 Flower Street</li>
            <li>Jakarta, Indonesia</li>
            <li>Phone: (123) 456-7890</li>
            <li>Email: info@zahrabouquet.com</li>
          </ul>
        </div>
      </div>
      <div class="mt-8 pt-8 border-t border-gray-700 text-center text-gray-300">
        <p>&copy; {{ new Date().getFullYear() }} Zahra Bouquet. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>