
//header

function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
}


    const headerTemplate = document.createElement("template");

    headerTemplate.innerHTML =`
    <style>
        nav {
            height: 40px;
            display: flex;
            flex-direction: row;
            flex-wrap: nowrap;
            justify-content: space-between;
            align-items: center;
            padding-inline: 5px;
            background: linear-gradient(black , rgb(38, 38, 221) 70%); /*rgb(38, 38, 221)*/
        }

        ul {
            padding: 0;
            display: inline-block;
            align-items:center;
        }

        ul li {
            list-style: none;
            display: inline;
        }

        a {
            font-weight: 700;
            margin: 0 2px;
            color: #fff;
            text-decoration: none;
        }

        a:hover {
            /*padding-bottom: 5px;*/
            color:red
            /*box-shadow: inset 0 -2px 0 0 #fff;  effet de soulignement*/ 
        }

        span {
            font-weight:bolder;
            color: #fff;
        }

        #acceuil {
            width: 50px;
        }

        #arrow {
            width: 30px;
        }

        .item {
        }
    </style>

    <header>
        <nav>
            <div class="item">
            <a href="/index.html">
                <img src="/img/acc.png" alt="acceuil" title="Acceuil" id="acceuil">
                </a>
                <img src="/img/arrow.png" alt="arrow" id="arrow">
                <span>Acceuil</span>
            </div>

            <ul class="item">
                <li><span>[</span></li>
                <li><a href="/boards/APS1/index.html" title="Observations clinique">APS1</a></li>
                <li><span>/</span></li>
                <li><a href="/boards/APS2/index.html" title="Activités de la vie quotidienne">APS2</a></li>
                <li><span>/</span></li>
                <li><a href="/boards/APS3/index.html" title="Prévention et sécurité">APS3</a></li>
                <li><span>]</span></li>
                <li><span>[</span></li>
                <li><a href="/boards/APS4/index.html" title="Relation et communication avec les usagers">APS4</a></li>
                <li><span>/</span></li>
                <li><a href="/boards/APS5/index.html" title="Collaboration et travail en équipe">APS5</a></li>
                <li><span>/</span></li>
                <li><a href="/boards/APS6/index.html" title="Apprendre">APS6</a></li>
                <li><span>]</span></li>
                <li><span>[</span></li>
                <li><a href="/boards/APS7/index.html" title="Projet personnel">APS7</a></li>
                <li><span>/</span></li>
                <li><a href="/boards/APS8/index.html" title="Stage dans une institution socio-médicale">APS8</a></li>
                <li><span>/</span></li>
                <li><a href="/boards/APS9/index.html" title="Stage dans le monde du travail">APS9</a></li>
                <li><span>]</span></li>
            </ul>

            
            <ul class="item">
            <li><span>[</span></li>
            <li><a href="/credit.html">Autre</a></li> <!-- mettre le bon lien-->
            <li><span>]</span></li>
            <li><span>[</span></li>
            <li><a href="/credit.html">FAQ</a></li>
            <li><span>]</span></li>
            </ul>
        </nav>

    </header>
    `;

    class Header extends HTMLElement {
        constructor() {
            super();
        }

        connectedCallback() {
            const shadowRoot = this.attachShadow({ mode: 'closed' });

            shadowRoot.appendChild(headerTemplate.content);

        }
    }

customElements.define("board-menu", Header);