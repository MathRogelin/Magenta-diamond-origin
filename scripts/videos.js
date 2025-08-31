alert("Updating episodes (only from Hora Cartoon channel)")
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


const selecao = document.querySelector("select")
const video = document.querySelector("iframe")
const btnLeft = document.querySelector("#left")
const btnRight = document.querySelector("#right")

let contador = 0

btnRight.addEventListener("click", () => {
    contador++;
    if (contador >= videosHoraCartoon[0].length) { 
        contador = 0; // volta para o começo
    }
    video.src = videosHoraCartoon[0][contador]; 
});

btnLeft.addEventListener("click", () => {
    contador--;
    if (contador < 0) {
       contador = videosHoraCartoon[0].length - 1; // volta para o último
    }
    video.src = videosHoraCartoon[0][contador]; 
});
