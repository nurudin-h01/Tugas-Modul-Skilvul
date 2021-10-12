const elFormusername = document.querySelector("#form-username");
const elCard = document.querySelector(".card");
const elCardImg = document.querySelector(".card-img-top");
const elCardBtn = document.querySelector("#card-btn");
const elCardTitle = document.querySelector("#card-title");

const getGitHubUser = async(username) => {
    try {
        const users = await fetch(`https://api.github.com/users/${username}`);
        const json = await users.json()
        const data = await json;
        console.log(data);
        return data;

    } catch (error) {
        console.log(error);
    }
}
elFormusername.onsubmit = async(e) => {
    e.preventDefault();
    let input = elFormusername.firstElementChild.value
    let data = await getGitHubUser(input)

    if (data.login) {
        elCardImg.classList.remove("d-none")
        elCard.classList.remove("d-none")
        elCardBtn.classList.remove("d-none")
        elCardTitle.innerText = data.login
        elCardImg.src = data.avatar_url
        elCardBtn.href = data.html_url
        elFormusername.firstElementChild.value = ""
        return elCard
    } else {
        elCardImg.classList.add("d-none")
        elCardBtn.classList.add("d-none")
        elCardTitle.innerText = `Not Found`;
        return elCard
    }
};