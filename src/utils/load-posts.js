export const loadPosts = async () => {
    const postsResponse = fetch('https://jsonplaceholder.typicode.com/posts')
    const photosResponse = fetch('https://jsonplaceholder.typicode.com/photos')
    const comentarisoResponse = fetch('https://jsonplaceholder.typicode.com/comments')

    const [posts, photos, emails] = await Promise.all([postsResponse, photosResponse, comentarisoResponse]);

    const postsJson = await posts.json();
    const photosJson = await photos.json();
    const emailsJson = await emails.json();

    const postsAndPhotos = postsJson.map((post, index) => {
      return { ...post, cover: photosJson[index].url, email: emailsJson[index].email }
    })

    return postsAndPhotos;
} 