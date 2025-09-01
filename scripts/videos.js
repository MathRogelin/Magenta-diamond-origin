alert("Updating episodes (All episodes and seasons available)")
const videosHoraCartoon = [
    [
        "https://www.youtube.com/embed/Y1cxYy9Xk9g?si=kltdKVU099aY_ejd",
        "https://www.youtube.com/embed/Ww8IoHZrQeU?si=-1UgLT4deoGibxCc",
        "https://www.youtube.com/embed/_6JOn-1ppT0?si=4AYwF2vWha3r8Bg7",
        "https://www.youtube.com/embed/S4PtYzAQgg8?si=WShrtAbk2uuTMNXG",
        "https://www.youtube.com/embed/CrCSvsi0V7I?si=u1skLZBU1kD-alDy",
        "https://www.youtube.com/embed/l89mHD48_LA?si=VYYWaDHo8kWinYT6",
        "https://www.youtube.com/embed/K8s64--6qQA?si=-rBWbFNaCHAiWEti",
        "https://www.youtube.com/embed/MaMjwrSt_LA?si=ie7tL20IgI1ZTBJR",
        "https://www.youtube.com/embed/rl1v-OG_qns?si=emmKHxI6reCmYMca",
        "https://www.youtube.com/embed/CD4WSrBfrmE?si=bQbHC2F58fX03qKU",
        "https://www.youtube.com/embed/OmUxSyLeZOY?si=zJ7tJN-TvB07HDls",
        "https://www.youtube.com/embed/MfpH44zb_XA?si=yjuqNdG1RimIjpHP",
        "https://www.youtube.com/embed/dPo3q3LZCS4?si=3F-RJmD90muBU0zU",
        "https://www.youtube.com/embed/WzRrs26nUKc?si=tkYd1YWjoKxXt3AG",
        "https://www.youtube.com/embed/FT-335OgOvE?si=hFYqLGXllpXNegrd",
        "https://www.youtube.com/embed/nubxb-4-cxo?si=2V6wfC-RR41Kn-8P",
        "https://www.youtube.com/embed/CDYF8u_rmwk?si=q4380xKygGYSrgNE",
        "https://www.youtube.com/embed/V6h5JohAxSw?si=kx15DZjKYlJkY4CQ",
        "https://www.youtube.com/embed/uF1If-GJEPo?si=RXUY5gIoDKVxEmBF",
        "https://www.youtube.com/embed/Ytuc2oIdaRA?si=TCmjK2XWkyIzFbc-",
        "https://www.youtube.com/embed/jWwGMa8B5FA?si=T8rCnn_RxvoutrCT",
        "https://www.youtube.com/embed/cTIezTe6U-U?si=j7bgQflBa4t2E0xR",
        "https://www.youtube.com/embed/JDp1UAigcdg?si=UYSlwtFWlPAonuee",
        "https://www.youtube.com/embed/BzFJtX8UKnQ?si=j4I-SGD2ZTrKkG4z",
        "https://www.youtube.com/embed/m-654ZSVjlc?si=iVhQ0cirwe8tn35l",
        "https://www.youtube.com/embed/djhPWp_wwME?si=w_tXTmyuJTuT7lGA"
    ],
    [
        "https://www.youtube.com/embed/9lWJwIbO_yQ?si=XHTQ2tyxc1wzWzDB",
        "https://www.youtube.com/embed/6APxoIlA16c?si=KjfFEs-cSKoLkZ1d",
        "https://www.youtube.com/embed/0iSoUfqub5s?si=Vi5pqhxmeK4VZQ8-",
        "https://www.youtube.com/embed/b3KPNgMiFjY?si=MEh31rR343tQCWxp",
        "https://www.youtube.com/embed/tVGJp6cgiDQ?si=77kpMS2sSzTYVT4G",
        "https://www.youtube.com/embed/yBug1oYbo4s?si=XuJHjiDs1IwG44h5",
        "https://www.youtube.com/embed/eWvYxp364TU?si=bxZM1N9CzUkUyxM5",
        "https://www.youtube.com/embed/9sfL9sTzLTI?si=cXm0OSuzQC4d20UM",
        "https://www.youtube.com/embed/s3fOIwxpeI0?si=zJZWLTL1uNVlKIX4",
        "https://www.youtube.com/embed/-H5lQ-FqOiQ?si=SHGJbcY9iJ8WRHXh",
        "https://www.youtube.com/embed/V9hVgQpdRA4?si=O5OJpSl51jyqMHub",
        "https://www.youtube.com/embed/mSJzj4rpqAI?si=UkiSYYUa3zn95vPD",
        "https://www.youtube.com/embed/IO8Ximnl-l4?si=nIIHp2SDC5mMt-o-",
        "https://www.youtube.com/embed/TrdWGZKOF20?si=VMCTudGQQoT5sYSa",
        "https://www.youtube.com/embed/WmbJL41WJcQ?si=LUgoY7W604rTlVc2",
        "https://www.youtube.com/embed/dpsSMT4EMVw?si=-eWs3SSOB2a2riZw",
        "https://www.youtube.com/embed/u6gOfT2yuNY?si=ZV68YqUwXwt2STKc",
        "https://www.youtube.com/embed/wFy-GuSlHsg?si=pCKybn5b_2m2ycYE",
        "https://www.youtube.com/embed/jFAC5rXHZQk?si=OryUnpKBhul8nSeT",
        "https://www.youtube.com/embed/hENMqc-FOpA?si=fQjVKbpH1JP3dMaw",
        "https://www.youtube.com/embed/8JXVSze13N4?si=W1Hvfj4K4o8zNbbF",
        "https://www.youtube.com/embed/Hkn92x7NY-s?si=MVeUzOC4SDDtoKCv",
        "https://www.youtube.com/embed/mrnLmHtCMU4?si=YkWfF2OxdphE73va",
        "https://www.youtube.com/embed/aoQCuxn1vJo?si=46VCzofLSOrABFrF",
        "https://www.youtube.com/embed/zROt-q05ph8?si=DeToIUBuXtP9R-A1",
        "https://www.youtube.com/embed/MzQegY5i7t4?si=Hec0hp2JlPtC_Hj0",
        "https://www.youtube.com/embed/5kL0bxI05Ac?si=jJsKg8UEIcqBXVpN",
        "https://www.youtube.com/embed/sclF7JHfq-w?si=DVxz0Tqo5T6DKU-T",
        "https://www.youtube.com/embed/M20P207JlUs?si=w0xV32uOxkQI48Pn",
        "https://www.youtube.com/embed/RSiroeoP6ao?si=AjoFJVeOKvznmrvD",
        "https://www.youtube.com/embed/tafxrayeflo?si=dQ_WZnCgHyO9hBgk",
        "https://www.youtube.com/embed/zBFF-2Eok74?si=psp22qPd7dfojrpT",
        "https://www.youtube.com/embed/Fz5gJtAUHB8?si=fO84TqgsVPXMMBLV",
        "https://www.youtube.com/embed/ZryGueR-mpE?si=LDDj1wA2F68Eb5-C",
        "https://www.youtube.com/embed/QrkMcsotU6M?si=hxr7YoErFdzrloq_",
        "https://www.youtube.com/embed/IL6Eqt-6ZGM?si=5O3TB-CeUv-34jw1",
        "https://www.youtube.com/embed/N0PSwyLOHTM?si=jghe5bOzUJ5TBTIY",
        "https://www.youtube.com/embed/RaspdNK6B70?si=nB5fW-h0yDybmlPj",
        "https://www.youtube.com/embed/GHpjuRt9FS0?si=aGLJBwXWVR1RVYJ-",
        "https://www.youtube.com/embed/2yH9M90DrKM?si=ftkMatRyoNaqTRQA",
        "https://www.youtube.com/embed/XzaATaxYGPM?si=rB5AK9Kky1kquVIs",
        "https://www.youtube.com/embed/JTmVcO5WHhY?si=dd3SvCI7Ki3xwsXK",
        "https://www.youtube.com/embed/uk4r9oKKATY?si=U0FS-gSVvTgDid1x",
        "https://www.youtube.com/embed/VI7acgAsEG0?si=GMx9bfSyYSJR66_Q",
        "https://www.youtube.com/embed/BjRL_yEj6ZY?si=4IK1qfIwiDysjyeO",
        "https://www.youtube.com/embed/nK2cc8SMgmM?si=hR3BNLHdrcX2OLZ_",
        "https://www.youtube.com/embed/vs9jxqGWeQY?si=X8u8EUfNPBBO7HtY",
        "https://www.youtube.com/embed/-8qt8ldam2I?si=Nj5Rqvh2FDzpj4P4",
        "https://www.youtube.com/embed/YLl0QIp-D6E?si=_nxVPdCUeAFiZ2P2",
        "https://www.youtube.com/embed/faFJdE9_pU4?si=N4GnO2FylM9qOC2Q",
        "https://www.youtube.com/embed/Fcu4jUFBpbQ?si=RFG7fPRQJiSFrH5j",
        "https://www.youtube.com/embed/2sNvAGtLK2Y?si=je1JRDUK_B-9aR-3",
        "https://www.youtube.com/embed/QtUwOQIP7qw?si=bnHLpj7dJXG3Ko07",
        "https://www.youtube.com/embed/QKWLNCs07gE?si=xFMR1zBLQ8Uy_jgh",
        "https://www.youtube.com/embed/hvyA0anyVt0?si=Ib5jBDAJoC7kY8IB",
        "https://www.youtube.com/embed/kWLDlKYk_zI?si=3NfQ6mQU9JpTJYbV",
        "https://www.youtube.com/embed/RmH89uqJnRs?si=kNMDSQghToAz7lN4"
    ]
]

const videosProjetoDublagem = [
    [
        "https://www.youtube.com/embed/4WJnJVy3WOc?si=pxg0_wsN0spcl4Vh",
        "https://www.youtube.com/embed/5L9Cn6ps6L8?si=To62SEDF64jucyB9",
        "https://www.youtube.com/embed/Vx9ox-jI_Us?si=FJ2pScD4zLwwsOhS",
        "https://www.youtube.com/embed/cwBxp-pZU6w?si=sWwE1U7TW0XCSWyp",
        "https://www.youtube.com/embed/f5sAGacTFyo?si=ai8lBQXXwBREPMMR",
        "https://www.youtube.com/embed/Lu6QFH8fGJ0?si=QosiNVP91XWunJbf",
        "https://www.youtube.com/embed/HSR0VpQA9uU?si=tmFm8cKsCtT9BP3N",
        "https://www.youtube.com/embed/MQwKhSrNZqQ?si=aYWasGW2wCBgu0pb",
        "https://www.youtube.com/embed/fLOMFyF2Vso?si=cjxGeYzoPyjweQ7V",
        "https://www.youtube.com/embed/72w7UtunB5w?si=p7ba_oyiWgXQD4o1",
        "https://www.youtube.com/embed/GqM4Pm-keKI?si=HJjKtwYjCkOT1_9I",
        "https://www.youtube.com/embed/UjNyYtt3aW0?si=2mJdtFjDaQsCHc7i",
        "https://www.youtube.com/embed/44zOhYSdwGg?si=g0rPFLy_BHsmUuuw",
        "https://www.youtube.com/embed/4iZuElsLsF8?si=ohsjZNkXAG70z__k",
        "https://www.youtube.com/embed/3bazFSu7z-E?si=3riFU9y1p2_-L03k"
    ],
    [
        "https://www.youtube.com/embed/vR_8vRPOm_E?si=T0lrtyWKWCuJCRuc",
        "https://www.youtube.com/embed/XWIXdvE5Z-Q?si=CYbS9-nHnV5bXPxE",
        "https://www.youtube.com/embed/Mbi1RzFQ954?si=Pwjjrph8cHbMbaGq",
        "https://www.youtube.com/embed/Mfe2tBH-6OA?si=YjZyksrLvGoZpokG",
        "https://www.youtube.com/embed/mdYI23gzgMo?si=4qLIUxYcXilmtMbb",
        "https://www.youtube.com/embed/F3tfkF-L6UI?si=DrE-lEqq24msEftm",
        "https://www.youtube.com/embed/3r1X8sD-me0?si=u_h5ipJ4hPRVzEYI",
        "https://www.youtube.com/embed/_ob20l8ceqs?si=f3Yp9cOMToKjlykn",
        "https://www.youtube.com/embed/3cc-5UwBjSU?si=LK-tFrDBlNnHs_iM",
        "https://www.youtube.com/embed/sIk68RuVr0g?si=98Ml2T2JGDdmic_4",
        "https://www.youtube.com/embed/GFdvLF1sw6U?si=os8LTxxNKmPA99g9",
        "https://www.youtube.com/embed/m8OqTQ3XMK8?si=B5EMLJyrhuCVCKcG",
        "https://www.youtube.com/embed/Ps-QazcvrUk?si=QItLuKBBJVaCU52d",
        "https://www.youtube.com/embed/9X-vKV8_1GI?si=bRDjTCjCS5i2-3eE",
        "https://www.youtube.com/embed/aQBjBfWddMw?si=F5joi3X4OGyXG-vu",
        "https://www.youtube.com/embed/mSEPzS65wMY?si=XUn3XHniRZkBL9LS"
    ]
]

const videosMagentaAU = [
    [
        "https://www.youtube.com/embed/UADPMkgRbAY?si=-p15oE9Hl82g1Wj8",
        "https://www.youtube.com/embed/GbWLIPX5meo?si=-VXFqEJDJaTX2Xfm",
        "https://www.youtube.com/embed/gvhy_Y7hI1o?si=bLju5cF1CJbpftCj",
        "https://www.youtube.com/embed/1yX1-SoH91I?si=B0f-UkGYQ75oISNm",
        "https://www.youtube.com/embed/w_DCYBSKp5Y?si=HC4nnxlQOu8cXzTk",
        "https://www.youtube.com/embed/TdmL8seh-WA?si=QF11-3-g-MndIkSg",
        "https://www.youtube.com/embed/T0gTdwgVSYw?si=JnChkRCjnqMilsuP",
        "https://www.youtube.com/embed/mikzH5PHWGE?si=CGr1Ym7VR3MGJwSk",
        "https://www.youtube.com/embed/qiV9mUwIHzc?si=kv8ZVfgmb4GspJvw",
        "https://www.youtube.com/embed/bY3cMjNsFk4?si=Uc-_49xjgzOFKoFE",
        "https://www.youtube.com/embed/wfgzwLEQAIQ?si=Wv5e5HbUZVumLU2L",
        "https://www.youtube.com/embed/bl7ybJ340Xs?si=_F4yJO9gWFI3uam_",
        "https://www.youtube.com/embed/iDfwSQHbfro?si=uTTyEwx0faeNdYJq",
        "https://www.youtube.com/embed/HzoQSq3jbik?si=-XL7CIJG8qJdqkFl",
        "https://www.youtube.com/embed/DOrlpINu4Pk?si=Q2jljRqLtrNbonLh",
        "https://www.youtube.com/embed/yzIdqBtoVJ8?si=3USR_WggHxYn2Nnw",
        "https://www.youtube.com/embed/_7dyOAQx7Q4?si=XjvqOL7FTSR-3e0U",
        "https://www.youtube.com/embed/eozsWgbxjag?si=eZhP4Q7BbUPIZQDO"
    ],
    [
        "https://www.youtube.com/embed/8O-MxydF9Hw?si=Bbgk9Pfg4-gIfVGT",
        "https://www.youtube.com/embed/Qaz245D9aEs?si=OaoAAEgEtohkwQPU",
        "https://www.youtube.com/embed/LSIe6Bbor1k?si=JyAbvcBUCV6zpUQl",
        "https://www.youtube.com/embed/7cJVBunpq60?si=PAfxtEBfiRWLYetH",
        "https://www.youtube.com/embed/ZcsN8Amku-0?si=J8ZELHCWWTEh9qBG",
        "https://www.youtube.com/embed/shQP01Qkb3g?si=g1mRljjg5Ivjtdiy",
        "https://www.youtube.com/embed/bow0X-XLvxE?si=Z3kH5UqvWRPbKHyG",
        "https://www.youtube.com/embed/V8loEqH_NuQ?si=Ia5j4nV66KGoyn1u",
        "https://www.youtube.com/embed/aM5osr1TWMk?si=a_8hxsOYrpurSWoG",
        "https://www.youtube.com/embed/GF2wM41bAtk?si=ePTdsRyNs9a75tT_",
        "https://www.youtube.com/embed/8BohAK-KuK4?si=H7xM90PIk9mfblQC",
        "https://www.youtube.com/embed/xzvc3AsTiM4?si=xtkMxKb-OmB4zqPm",
        "https://www.youtube.com/embed/ysphqk_hbd0?si=bV1KwxB9vrs1xwH2",
        "https://www.youtube.com/embed/yTG9VCh9U84?si=jpfNDW3CDmHshW-6",
        "https://www.youtube.com/embed/p0DgOtzbBmI?si=RxMWzm4Z12Vi5vRc",
        "https://www.youtube.com/embed/QhoMztN28t8?si=nphQ8gZfNwp2LQCW",
        "https://www.youtube.com/embed/FUY-VtS4RRo?si=30k7rRhX4vNAJzWb",
        "https://www.youtube.com/embed/pwd9PALdiWs?si=3TtBzw5CpqEXtjiP",
        "https://www.youtube.com/embed/de_LaSpVskQ?si=wXVxeXaEio_rwcOh",
        "https://www.youtube.com/embed/OQkRi3QR6NI?si=KfqKqGvWlPngwElM"
    ]
]


const selectSeason = document.getElementById("seasons")
const selectChannel = document.getElementById("channel")
const video = document.querySelector("iframe")
const btnLeft = document.querySelector("#left")
const btnRight = document.querySelector("#right")

let contador = 0
let listaAtual = []

function atualizarLista() {
    console.log("Função atualizarLista() chamada")
    const seasonIndex = parseInt(selectSeason.value) - 1
    const canal = selectChannel.value

    console.log("Season index:", seasonIndex, "Canal selecionado:", canal)

    if (canal === "1") {
        console.log("Carregando vídeos Hora Cartoon")
        listaAtual = videosHoraCartoon[seasonIndex]
    } else if (canal === "2") {
        console.log("Carregando vídeos Projeto Dublagem")
        listaAtual = videosProjetoDublagem[seasonIndex]
    } else if (canal === "3") {
        console.log("Carregando vídeos Magenta Diamond AU")
        listaAtual = videosMagentaAU[seasonIndex]
    } else {
        console.warn("Nenhum canal válido selecionado")
        listaAtual = []
    }

    contador = 0
    if (listaAtual && listaAtual.length > 0) {
        console.log("Primeiro vídeo carregado:", listaAtual[contador])
        video.src = listaAtual[contador]
    } else {
        console.warn("Lista de vídeos vazia")
        video.src = ""
    }
}

// Navegar para direita
btnRight.addEventListener("click", () => {
    console.log("➡️ Botão RIGHT clicado")
    if (!listaAtual || listaAtual.length === 0) {
        console.warn("Nenhuma lista de vídeos disponível")
        return
    }
    contador++
    if (contador >= listaAtual.length) contador = 0
    console.log("Mudando para vídeo:", contador, listaAtual[contador])
    video.src = listaAtual[contador]
})

// Navegar para esquerda
btnLeft.addEventListener("click", () => {
    console.log("⬅️ Botão LEFT clicado")
    if (!listaAtual || listaAtual.length === 0) {
        console.warn("Nenhuma lista de vídeos disponível")
        return
    }
    contador--
    if (contador < 0) contador = listaAtual.length - 1
    console.log("Mudando para vídeo:", contador, listaAtual[contador])
    video.src = listaAtual[contador]
})

// Troca de filtros
selectSeason.addEventListener("change", () => {
    console.log("Troca de temporada detectada")
    atualizarLista()
})

selectChannel.addEventListener("change", () => {
    console.log("Troca de canal detectada")
    atualizarLista()
})

// Inicializa
console.log("Inicializando lista de vídeos...")
atualizarLista()
