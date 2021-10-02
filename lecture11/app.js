const wrapper = document.querySelector(".wrapper");

const addWelcome = () => {
    const div = document.createElement("div");
    const h1 = document.createElement("h1");

    h1.innerText = "Hello";
    div.append(h1);

    wrapper.append(div);
};

setTimeout(addWelcome,5000);