const header = `<div class="outer-header">
<div class="header">
    <!-- Сделать меню фиксированным и чтобы оно находилось всегда сверху, где бы мы не находились  -->
    <a href="./register.html">
        <img src="../../assets/logo.png"
    /></a>
    <!-- Исправить путь до логотипа -->
    <ul>
        <li>
            <a href="./price.html">Акции</a>
        </li>
        <li>Доставка</li>
        <li><a href="./login.html">Вход</a></li>
        <li>
            <a href="./personalkobinet.html"
                >Личный кабинет
            </a>
        </li>
    </ul>
</div>
</div>`

const slides = [
    { id: 1, header: "Первый раздел", desc: "Описание первого раздела" },
    { id: 2, header: "Второй раздел", desc: "Описание второго раздела" },
    { id: 3, header: "Третий раздел", desc: "Описание третьего раздела" },
]

const content = document.getElementById('content')
content.innerHTML += header

function changeSlide(e) {
    if (e.path[0].innerHTML) {
        const { header, desc } = slides.find(slide => slide.id == e.path[0].innerHTML)
        document.getElementById('slide_header').innerHTML = header
        document.getElementById('slide_desc').innerHTML = desc
    }
}



