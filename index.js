// TASK 1
async function fetchFirstPost() {
    const endpoint = 'https://jsonplaceholder.typicode.com/posts/1';

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP Xato: ${response.status}`);
        }

        const post = await response.json();

        console.log("\n--- 1-TOPSHIRIQ NATIJASI: ---");
        console.log("Post sarlavhasi:", post.title);

    } catch (error) {
        console.error("1-Topshiriq Xatoligi:", error.message);
    }
}

// TASK 2
async function fetchUsersList() {
    const endpoint = 'https://jsonplaceholder.typicode.com/users';

    console.log("\n--- 2-TOPSHIRIQ NATIJASI: ---");
    console.log("Foydalanuvchilar ismlari ro'yxati:");

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`HTTP Xato: ${response.status}`);
        }

        const users = await response.json();

        users.forEach((user, index) => {
            console.log(`<li>${user.name}</li>`);
        });

    } catch (error) {
        console.error("2-Topshiriq Xatoligi:", error.message);
    }
}

// TASK 3
async function searchAlbumById(albumId) {
    console.log(`\n--- 3-TOPSHIRIQ NATIJASI (ID: ${albumId}): ---`);

    if (!albumId || albumId <= 0) {
        console.error("3-Topshiriq Xatoligi: Haqiqiy Album ID kiriting.");
        return;
    }

    const endpoint = `https://jsonplaceholder.typicode.com/albums/${albumId}`;

    try {
        const response = await fetch(endpoint);

        if (response.status === 404) {
             throw new Error(`Album topilmadi. ID ${albumId} mavjud emas.`);
        }
        if (!response.ok) {
            throw new Error(`HTTP Xato: ${response.status}`);
        }

        const album = await response.json();

        console.log("Albom ma'lumotlari:");
        console.log(`ID: ${album.id}, Sarlavha: ${album.title}`);

    } catch (error) {
        console.error("3-Topshiriq Xatoligi:", error.message);
    }
}

(async () => {
    await fetchFirstPost();
    await fetchUsersList();
    
    await searchAlbumById(5); 
    
    await searchAlbumById(9999);
})();