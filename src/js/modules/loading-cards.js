function  loadingCards() {
    const URL_BASE ='https://jsonplaceholder.typicode.com/posts'
    const cardsContainer = document.querySelector('.cards__container');
    const loadMoreBtn = document.querySelector('.cards__load-more');

    let currentPage = 1;
    const limit = 5;
    const maxCards = 30;

    async function fetchPosts(page) {
        try {
            const response = await fetch(
                `${URL_BASE}?_page=${page}&_limit=${limit}`
            );
            return await response.json();
        } catch (error) {
            console.error('Ошибка загрузки:', error);
            return [];
        }
    }

    function createCardElement(post) {
        const card = document.createElement('article');
        card.className = 'card';
        card.role = 'listitem'
        card.innerHTML = `
                <figure class="card__image-wrapper">
                    <!-- Изображение с ленивой загрузкой и уникальным alt -->
                    <img src="./img/card.webp"
                         loading="lazy"
                         alt="Иллюстрация к статье: ${post?.title}"
                         class="card__image"
                         width="320"
                         height="185">
                </figure>
                <div class="card__body">
                    <a href="#" class="card__tag" aria-label="Фильтр по тегу bridge">bridge</a>
                    <h3 class="card__title">${post?.title}</h3>
                    <p class="card__excerpt">${post?.body}</p>
                    <div class="card__meta">
                        <span class="card__author">
                          Posted by <a href="#" class="card__author-name" rel="author">Eugenia</a>,
                          <time datetime="2019-07-24" class="card__date">July 24, 2019</time>
                        </span>
                    </div>
                    <a href="#" class="btn btn-primary card__link" aria-label="Читать статью полностью">
                        <span>Continue reading</span>
                    </a>
                </div>
            `;
        return card;
    }

    async function loadMoreCards() {
        const posts = await fetchPosts(currentPage);

        posts.forEach(post => {
            if (cardsContainer.children.length < maxCards) {
                cardsContainer.appendChild(createCardElement(post));
            }
        });

        currentPage++;


        if (cardsContainer.children.length >= maxCards) {
            loadMoreBtn?.classList.add('hidden');
        }
    }

    loadMoreBtn?.addEventListener('click', loadMoreCards);
}

export default loadingCards;