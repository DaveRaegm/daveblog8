async function loadPosts() {
    const postsContainer = document.getElementById('posts');
    const postFiles = ['posts/post1.md', 'posts/post2.md']; // Ensure these paths are correct

    for (const file of postFiles) {
        const response = await fetch(file);
        if (!response.ok) {
            console.error(`Could not fetch ${file}: ${response.statusText}`);
            continue; // Skip this file if there's an error
        }
        const markdown = await response.text();
        const html = marked(markdown);
        const postElement = document.createElement('div');
        postElement.className = 'post bg-white p-4 rounded shadow mb-4';
        postElement.innerHTML = html;
        postsContainer.appendChild(postElement);
    }
}

document.addEventListener('DOMContentLoaded', loadPosts);