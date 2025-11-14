document.addEventListener('DOMContentLoaded', () => {
    // menu toggle for mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    // wishlist & orders logic
    const wishlist = [];
    const orders = [];

    const wishlistEl = document.getElementById('wishlist-items');
    const ordersEl = document.getElementById('order-items');

    document.querySelectorAll('.add-wishlist').forEach(btn => {
        btn.addEventListener('click', e => {
            const card = e.target.closest('.product-card');
            const productName = card.querySelector('h3').innerText;
            if (!wishlist.includes(productName)) {
                wishlist.push(productName);
                updateWishlist();
                alert(`${productName} added to wishlist`);
            } else {
                alert(`${productName} is already in wishlist`);
            }
        });
    });

    document.querySelectorAll('.place-order').forEach(btn => {
        btn.addEventListener('click', e => {
            const card = e.target.closest('.product-card');
            const productName = card.querySelector('h3').innerText;
            orders.push(productName);
            updateOrders();
            alert(`Order placed for ${productName}`);
        });
    });

    function updateWishlist() {
        wishlistEl.innerHTML = '';
        if (wishlist.length === 0) {
            wishlistEl.innerHTML = '<li>No items in wishlist.</li>';
        } else {
            wishlist.forEach(item => {
                const li = document.createElement('li');
                li.innerText = item;
                wishlistEl.appendChild(li);
            });
        }
    }
    function updateOrders() {
        ordersEl.innerHTML = '';
        if (orders.length === 0) {
            ordersEl.innerHTML = '<li>No orders placed yet.</li>';
        } else {
            orders.forEach((item, idx) => {
                const li = document.createElement('li');
                li.innerText = `${idx+1}. ${item}`;
                ordersEl.appendChild(li);
            });
        }
    }

    // reviews logic
    const reviewForm = document.getElementById('submit-review');
    const reviewList = document.getElementById('review-list');

    reviewForm.addEventListener('click', () => {
        const textEl = document.getElementById('review-text');
        const userEl = document.getElementById('review-user');
        const text = textEl.value.trim();
        const user = userEl.value.trim();
        if (text === '' || user === '') {
            alert('Please enter both your name and review text.');
            return;
        }
        const div = document.createElement('div');
        div.className = 'review';
        div.innerHTML = `<strong>${user}</strong><p>${text}</p>`;
        reviewList.prepend(div);
        textEl.value = '';
        userEl.value = '';
    });

    // contact / reporting form validation
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('contact-name').value.trim();
        const email = document.getElementById('contact-email').value.trim();
        const msg = document.getElementById('contact-message').value.trim();
        if (name === '' || email === '' || msg === '') {
            alert('Please fill all fields.');
            return;
        }
        // Simple email format check
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Please enter a valid email.');
            return;
        }
        alert('Thank you for your message! We will get back to you.');
        contactForm.reset();
    });

    // Login form validation
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('login-email').value.trim();
        const pwd = document.getElementById('login-password').value;
        if (email === '' || pwd === '') {
            alert('Please fill both email and password.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Enter a valid email.');
            return;
        }
        if (pwd.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }
        alert('Login successful (demo).');
        loginForm.reset();
    });

    // Registration form validation
    const registerForm = document.getElementById('register-form');
    registerForm.addEventListener('submit', e => {
        e.preventDefault();
        const name = document.getElementById('reg-name').value.trim();
        const email = document.getElementById('reg-email').value.trim();
        const pwd = document.getElementById('reg-password').value;
        const pwd2 = document.getElementById('reg-password2').value;
        if (name === '' || email === '' || pwd === '' || pwd2 === '') {
            alert('Please fill all registration fields.');
            return;
        }
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
            alert('Enter a valid email.');
            return;
        }
        if (pwd.length < 6) {
            alert('Password must be at least 6 characters.');
            return;
        }
        if (pwd !== pwd2) {
            alert('Passwords do not match.');
            return;
        }
        alert('Registration successful (demo).');
        registerForm.reset();
    });

});
