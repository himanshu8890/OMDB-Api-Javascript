  
async function fetch_api(m_name) {
    let url = 'https://www.omdbapi.com/?apikey=51783d91&q='+m_name+'&plot=full';
    try {
        let res = await fetch(url);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
}
async function renderUsers() {
    let movie_name=$('#movie_title').val();
    // console.log(movie_name);
    let details = await fetch_api(movie_name);
    // console.log(details);
    let html = '';
   
        let htmlSegment = `<div class="movie_details">
                            <table border='2px'>
                            <tr>
                                <th>Title</th>
                                <th>Type</th>
                                <th>Year</th>
                                <th>Poster</th>
                            </tr>
                            <tr>
                                <td>${details.Title}</td>
                                <td>${details.Type}</td>
                                <td>${details.Year}</td>
                                <td class="img_poster"><img class="movie_poster" src="${details.Poster}"></img></td>
                            </tr>
                            </table>
                        </div>`;

        html += htmlSegment;


    let container = document.querySelector('.container');
    container.innerHTML = html;
}
   