const feedback = [
  { id: 1, name: "Игорь", text: "Спасибо сотрудникам за работу, понимание, отзывчивость и оперативность в решении вопросов.", pic: "./assets/image-first 1.png", class: "icon-namber-one" },
  { id: 2, name: "Иван", text: "Спасибо сотрудникам за работу, понимание, отзывчивость и оперативность в решении вопросов.", pic: "./assets/image-second 1.png", class: "icon-namber-two" },
  { id: 3, name: "Мария", text: "Спасибо сотрудникам за работу, понимание, отзывчивость и оперативность в решении вопросов.", pic: "./assets/image-third 1.png", class: "icon-namber-three" },
  { id: 4, name: "Глеб", text: "Спасибо сотрудникам за работу, понимание, отзывчивость и оперативность в решении вопросов.", pic: "./assets/image-fourth 1.png", class: "icon-namber-four" },
]

const feedback_row = document.getElementById('feedback_row')

feedback.map(obj => {
  let button = document.createElement('button')
  button.id = obj.id
  button.onclick = function () {
    let div = document.createElement("div");
    div.className = "popup-block";
    div.id = "popup-block";

    let close_div = document.createElement("div");
    close_div.className = "popup-close";
    close_div.onclick = function () {
      let obj = document.getElementById("popup-block");
      obj.remove();
    };

    let content_div = document.createElement("div");
    content_div.className = "popup-content";
    content_div.innerHTML = `
      <h1>${feedback.find(obj => obj.id == button.id).name}</h1>
      <p>${feedback.find(obj => obj.id == button.id).text}</p>
      <img src =" ${feedback.find(obj => obj.id == button.id).pic}"/>
      
    `; // --- Здесь пишешь html код
    content_div.onclick = function (e) {
      e.preventDefault();
    };

    div.appendChild(content_div);
    div.appendChild(close_div)

    body.appendChild(div)
  }

  let img = document.createElement('img')
  img.src = obj.pic
  img.alt = obj.pic

  button.appendChild(img)

  feedback_row.appendChild(button)
})


// feedback_row.innerHTML = "ASDASDASDASDASDAS"
