async function loadPosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    console.log('Fetch response:', response);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const posts = await response.json();
    console.log('Posts:', posts);
    const list = document.getElementById('post-list');

    list.innerHTML = '';

    posts.forEach(post => {
      const li = document.createElement('li');
      const h1 = document.createElement('h1');
      const p = document.createElement('p');

      h1.textContent = post.title;
      p.textContent = post.body;

      li.appendChild(h1);
      li.appendChild(p);
      list.appendChild(li);
    });
  } catch (error) {
    console.error('Error fetching posts:', error);
  }
}

loadPosts();
