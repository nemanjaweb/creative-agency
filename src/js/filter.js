const newsContainer = document.querySelector('#news')
const allApiBtns = document.querySelectorAll('.get_all_news')

const fetchNews = async (dataFilter) => {
  const data = await fetch(`https://api.nytimes.com/svc/topstories/v2/${dataFilter}.json?api-key=IIiCedQu6MqFJCKhPBLjxdTf5IxN5nNe`);
  const response = await data.json();
  return response;
}

const writeResToDom = (results) => {
  results.forEach(res => {
    const card = /*html*/ `
        <div class="pt-8 lg:pt-0 ">
          <div class="flex flex-col items-center lg:p-5"> 
              <img src="${res.multimedia[0].url}" alt="" class="rounded-lg" width="370px" height="300px">
              <div class="z-10 flex flex-col items-center p-6 -mt-8 bg-white rounded-lg w-60 drop-shadow-2xl ">
                <a href="${res.url}" class="rounded-sm bg-slate-400">
                <p class="text-sm font-semibold text-blue">${res.title}</p>
                <p>${res.abstract.slice(0,80)}...</p>
                </a>
            </div>
          </div>
        </div>
      `;
    newsContainer.innerHTML += card;
  });
}

allApiBtns.forEach(btn => {
  btn.addEventListener("click", async () => {
    const dataFilter = btn.getAttribute("data-filter")
    const data = await fetchNews(dataFilter)
    const results = data.results.slice(3,9)

    newsContainer.innerHTML = ''
    writeResToDom(results);
  })
});



