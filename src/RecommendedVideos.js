import React from "react";
import "./RecommendedVideos.css";
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";

function RecommendedVideos() {
    return (
        <div className="recommendedVideos">
            {/*<div className="youtube__adds"></div>*/}

            <div className="videoCards">
                <Link to="/video" style={{ textDecoration: "none" }}>
                    <VideoCard
                        img="https://www.almanaltraining.ae/wp-content/uploads/2018/11/python-programming-language-training-in-abu-dhabi.png"
                        avatarImage="https://tse2.mm.bing.net/th?id=OIP.qHO_DagepnsjOuFUU0rAhAHaE8&pid=Api&P=0&w=312&h=209"
                        title="Simple projects to do over the weekend for beginner level."
                        channel="TechWithTim"
                        views="130K"
                        timestamp="1 week ago"
                    />
                </Link>

                <VideoCard
                    img="https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151"
                    avatarImage="https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151"
                    title="Python strengths and how to maximize each of them."
                    channel="LearnCodeAcademy"
                    views="13K"
                    timestamp="1 month ago"
                />
                <VideoCard
                    img="https://tse3.mm.bing.net/th?id=OIP.7ymWkA2xQqVaH1_FyjJ2HgHaE7&pid=Api&P=0&w=272&h=182"
                    avatarImage="https://tse3.mm.bing.net/th?id=OIP.QCQ6HUpXYpLaARix0pSKNwHaFj&pid=Api&P=0&w=223&h=168"
                    title="Technology stuff changing the world immensely."
                    channel="NASA Descendants"
                    views="1M"
                    timestamp="2 hours ago"
                />
                <VideoCard
                    img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCAC0ARYDASIAAhEBAxEB/8QAGwAAAQUBAQAAAAAAAAAAAAAAAgABAwQFBgf/xABWEAABAwIDAwYHCggKCQUAAAABAAIDBBEFITESQVEGEyJhcYEUFTJykbHRByNCUlOSk6GywSQlM0NUYoLSFjREc3SDhJSi0zVVY4WVs8Lw8WSjw+Hi/8QAGQEAAwEBAQAAAAAAAAAAAAAAAAECAwQF/8QAJxEAAgIBAwQCAgMBAAAAAAAAAAECEQMSITEEQVFSExQjQiIyccH/2gAMAwEAAhEDEQA/AN4XRgnimCIAKBji/FEL8UycIAIE8UVzxQhEgQQvxRC/FCEQQIfNPc8UyIIAe54lOCeKZEAEwHF+KcX4lMEQsmkKxZ8U+fFKycBMBs+JRXPFKyKydCGF+KLPiUgESoBhfiUQvxKQRgIEML8SjF8sykAjsgBhfiU9z1pBPZACuetNc8SiQlAEbr55lVZCb6lW3AZqrJqhgV8+djz+F/0lSXOWZ1Cj/OM84fZKk4doUMpF+nLr6laIJJ1P5M+tZ0GoWg3UfzbvWFbEiIXDQOHA3SSuC0AtvYkdHckrRDORCIJgnC5jYcDRFZNwTpgOiQqKV7gMikBYG5GLncpwHbEZB1a2+Q4BL3zj9QVUKyEaogpPfc8/qCaN8pla1xGzYkiwRQDWTo3AAntPrQ5BFCEAjCqTSua07JtqtCLnHQwOB1iYSbDO7QnHcTIwCiDVJ79xHoCYmf4w9AVUAOyishjlmM0bHOBab36I4Hep3tF0wIwnCY2Cp1NRIxp2DbI57/rSboDQDTwKINKNgkMUJabXjYT22TWqfjO+aEwHDTwKLZPAqJxqgL7ZHcEFPNUuqWRveS2zsrN3C+4IAsWSspXNsSgQIayEgqRCUAQuVaRWnhVZEAVz5bfOHqKLh2hD8NvnD1FFw7QpZSNCn1WgNR/Nu9YWfTjNaA8pvmO9YTYkV2gEabWZ0NgMgknaARk0uGemXBJaEM5MIwmCKy5zUViiAPBIbkQCABVebQ96tHRVptCkxo1W/ko/Mb6gucfjdLR4vjlJVzVeVTAKZkbHTBrTE0lkbGna37gukYPeo/Nb6guNxQMZjGIPibsyyTx87IG3dITExoG04EgDWwIW0UQaVXygwim55slRVbbG6Np5gC46gOfbTetqndtugd8eNrvnNBXDVRY+OaOWPbZYkh4cSQ4ZEH/v29zTAA0oGgiYM/MCJIaJ3antKA6KR4zPaUBSEUqjQrXps6Wm/mo/shZNT5JWxS/xSm/mo/sBTHljfBVc/wB8maCbse5tgSbHuKrullY0m7ztAEWJJvfrOiaSoiZNX3cC1ks0DgGF2w5o4WBJN77+rgoIJCHFrZC6NjTzrZXOc9riAA2MOaMsr2uuijM0o/4zH3/ZKtyaqrGPwiLtP2SrcgWKLK71nVfku7CtJwWbV6HsKUgR0FKAYKW+hZF6NkLi4p62SSpidW1QlfM52ZlIADgGNbcghturdddrR/xal/m4fstXGbdbTuqJJaKoqWPmqnxXgdI+N8cpa3bNtoAZEDrutICkakLpzNTu52VzHk3Ejjc2y0Jvl960acfhbP2/UsOnkxM+L55qebnJqmnieDG73uK/lFu7r0W7Tj8MZ+36kS5BGg/egUjt6jUjGQlGhKBEL1Vk1Vt4VSTVAFc+WO1vqKfh2hIjpDzm/elw7QpZUTQp9QtAeUzzH/cqFPqtAeVH5r/uTYIrg3a07Ln5nU7OluCSTRdoAjJFyfKsUlaM3ycuAnASCIBYmogNEWaYBEAgBrZdyqzaFXLJjGCk0FluN8XNRgvbfZbq5vAItuP5SP57fas400Z1aPqS8Ei4D0BWmLY0dph0lj+kb7UDAGyNeZIdkXB98bfPvVIUUJ3fUFKylp2WPNtJ3EgFOrFZdkttHtKjKYJJiKdT5JWtSTQCkpg6SMO5qO4L2AjojW5VIxB2qj8EhJJLBfsClKmOzW52D5eL6RntSL4D+fi75Ge1ZYpIfiD0BOKOH4g9AV7iLrWsEzJBPTkNJuBK25yIyF1YkzKox08MeYY3a3Gwy7FYuUAM5Z1Y07JsDv0WiRdRmIOOYSasC9S1FMymp2PliDhFECC9lwdgCxzUvhNLunj+kb7Vl+Ds4JxTt4Iodmi6WlcLc/F89qgiZC2oY8VELsz0Wm7jcFQNpmE6K1FEyPyRnvO9AFlyFNdK6AFZCURQlAEL1Vk3q09VZN6BFc+UPOb96XDtCe2Z7Wn1puHaFLKiaNPqtAas81w9Sz6bctEDNnY77k2CK/ScLlhNiR5Ry7SkhaSdobLdb2BPpSVmbOaARpgEVis6NBAaJ0raIgEUIQ3IkwGiKyAEnTZJEhMRVrMRpqF9FC+GtnmrDUCCKgp+fkIga17yW7TcgCFH42Z/qjlGP91PPqkUFU6/KDkkBugx93/swhdCCrQzGGLxb8L5Rjtwic+pxTjGKf8A1dyh/wCDVa2wSnunSFRieOKQa0HKD/g1Z9wS8dUX6Fyg/wCC137q29pNtEcTwA1JRSCjG8d0A1o8eHbgtd+6gl5S4JTBvhLcVp9ryRUYZUxE9gfYrI5R8q5aaSXD8LkHPxksqaoWPNO0McG7aG93cFx09PXiGHEalks0VU1sgqHPLwS+4AkJ6QPao1DpLk9C/hjyW/SK0/2Gb2qxFykwmdhkgp8bmjAaS+LCql7AHaEuGS85w9lLUPkM0DOZiaHP6bgXF1w0a3tvK6SpdWUmHYeYKkUta6pjmZsPLXudzTi9htkAAWi1rcdcs3kp0ZylWRY47tnVDGafK2G8ojfMWwiozHUSU/jmHdhPKI/7rf8Ae9Y+BcoXVL3UdTEIq5oLjEzKOpAF3OgboJAMy0ZO3WK6hsjXta9jg5rmhzXNOTmkXBC1jTNGmnTKBxlm7BuUZ7MOaPtTBBJj8MDOdnwjHoYg+Jj5Z6WnZGznZGxNLvfybXI3LSJWRyiP4lxQ5dHwJ/zayAqqA6INt3XHoRpj5T/Od606gBJ0yeyQCKFyKyEpgQvVWRWnqrIgRD8buQcO0I/jfsqPh2j1qZFRNOmWiPgdjvUs2m3LSHwOw+pNgiltEE3DRmbXac/Skltuu4FwJBOoGiS1MzBAzRJAZp7LKixAaJ0k6YhJi6yYkoHEpDEXqMy2QPcVC5xU2Oiu523yi5Nfq0WPO/w04XTtXKQEu5SYD+rhmNu9LqYLrWjJax4EJOisErBUAKxuUWJOwzC6yojdadzW09Od7ZprtDh2DaK27BcTy+c7wPDG/BNdIXdrYej6ys5vYFycRTUNfXc4aYRu2HDnS+Zoe0OzLyzN5Getl0L5J2YWzD3Ma4tpDTu2X9Hh0Q4X1sR/9rkoppoJmTwvMcsbtpj26jq7OIXRUmK+Hvjp52PEzhsgwxvlBGfksZ0wOoenhhnTrY4upWRtNbopYfI2ORkMoLDzwMu0LXayzyD6B6VexF2J4tW7dPFI6OGMRxCUtZ0QNtzy11rAm5ztonkhgieZ52yhkcj44mSWZUTujBL2sjYTYgXvnlpro1fi81fCaWnfSU9O+3ORQxTsllaLECV7rg6Z5i6whNzyNpAtTmpw5INqSSJsscgFZRSNdHNC64JYQ4Oa7K9tQvRMFr21tNTzABoqoPCgweTHMHmKojb1Bw2h5/UvOaVhhLto9Egg5A62XV8k5NmmpmDyWYti0DfMfTQTkekLoxyVtI9TLOOSMZp79zsDosjlH/oLGzwp4nfNqIithZXKIfiDlAeFBI75r2OXUc50WpJ6ynQNNw08QD6RdGoGOl3pkkgHQlOhKBET1Uk1Vp+9VJDmgCL4/co76Z7wnLs3/sqPa07QpkVE1ac6ZrQdIGNB1sCsyF1lYeXvdG0AEO2g4knKwvkqFZWkriw5Nac9+19ySjmpXB1yx2ydCQRmkmSUhqnSToGOmKSYlIBiono7qJ5zUsaIZDmFC9SvOfcoXKC0QUefKXCOrBsYPpmpguuC5Cht/CfDhwwHEz6aqnC664W8OCWEkEO0E4cFQgsly3LKjdU4VUOaLvpXx1rBxay7JAO51+5dRcKCqiE0bgAwvFy0PG003BaWuHAi4PUVllT02uwntujwwNLpAxoJJzAHDitmi8OpmujhqKlnPmzo6aR0JlJs2xewbdtN6mxfCJsOlfJTOe2imlLIXk/kpPK8FnduI+CfhCx42yHT1bNqORz2l2t+jcHXPgs3+RbMmUZSVx4Nqmjh8YyzPka9tJUMia1p6PNsAZZpzyJJ+s56mHFoaaOoJgjDGuYJBY+U652iLLNp6rmHOu4Bj8idzcrbQCvPjlr30vNAFrWO25TlGwOzAJGp6gspR0TXgwhiySzJR3sVGS6OeaZ5LWCzQTbMHeuy5OQyMjwSOS/OmnrsYmDtWiue2GnaR5jL9/WubpKSmqgZJtoYHQS7FVKMn4hUa+BU1tXvtZ5HkjrXdYXHO1s9XVNayqrXiWRjB0IY2tDI4WfqsFgFrjjbs9HMowqEeVyzY1WXyhF+T/KXqwqrPobdaIcFn8oCP4P8p+rBsQPohJXTRgbcRuyI8Y4z6WhSqvTHap6Q8aenPpjaVOoAdJNkkSkA5QEpFyjLkxAvKpynVWXlVZDmkwKxPSd+yo76ec1J0kbZhGT03kBo7BdK2nnNWV2zSPBpxFXYm3cw+d9lU4RmtGNttj9r1LUgkmtssBY5/U3UZapInQxvttXy0zKSSKOZSuqldiGH4bB4TXVAhg5xsQcWSPu9wJDQ2ME7isV3LTkqL/hp74Zh/wBKog6QkIS4LmTy05Lbq0/RTfuI2cruT8wkMM0kzmC5bHG8O/xgBAHQkqJxzSDwWgjQtBHeLoCbkqWNEbiSSo3AqSxN8tyRY4jRZ0XZgYk/lJS4lQ1+C00Mr2YfUUkrpzCWgSzNkIDJHtzyGaj8ee6b+hYd9HSf5q6IxHgm5krRSkhOmc94990z9Cw76Ok/zUvHvumfoeHfR0n+Yug5i+5EKfqT1MVI53x77pv6Jhw/qqT/ADEvHXuoH+S4f9FR/wCYulFP1KQQdSdsWxx01T7olQ57pKHD3CVnNTxmOiMM8d77M0bnkHiN44hUpMJ5VABtPRh8ZLi5lX4uLWG+QitI42716EIRwRiIcFOheBwk4f12PNGYJywa7a8VYff9bwI/VtKY4Ry6l6Jo6bm3OaZIxNSRxyBosGyCMi43HNej831I447HvRojd0afNOqTOC8C90cz003geH/grBFRwh1A2npWcIYW9AdeWfq0GO91h2kOHDqJoF2oYjjFiVa24MTiKif3VaOmqquoZhzKelgkqJ3M8Be5sUYu4hrRcqtTze6Pyiwys5g0D6Gtp56SQuNJA9zJYrEAbJcLgrucaAdgfKJvxsIxD6oHO+5YnueuvgEY4SN+uJiLYHV0rHxU1JG+wfHTwRvANwHMja02PcpyUF0ibJAPdCXIS7VROkaN6AJC7VCXDisTF8fpsHs6eGWSLmBM4wkc4NqXmgA1xAt3rLdy3wmwPg1dY3AJbFnbW3TToVnVuOtlXfmuYdy6wkfySu72xAfbVqg5TUGJVENPFBUMfK8sa52xsghpf0gDfclQE9R/pCj88/8ALcrY3ecFI6Fjn86R0mZt6jayAfB88LCqZqt0akAuQtJmRZ+16ln0wWjvYOp3qWzJRKLnekog6QkgPGXUElIzyTlpO1+GRxBwfLHWwzPjadotjax4JcBpqvNnvY5r+g8PL3PaCOiGndpu/wC+vuJoRM3ZcHEXv3qkaBud4bDiXj68lisp0/AjkmFgYQWv2rk32Ta3r/8AAV/C5WslqA4uAeGMb0XON+lckDhvW+KKMfmm/PCnhpWNz5to7ZAl8z8D+uvJ1keNYTzcd5KjJjAT4O+xsAN5RjGsHvfnJx/UO9q5vQWswW/2g9iYlu8Rj+tHsUPNLwUunj5OnZi2GzTsZE6dzRG9zyYwwNdcBtw853TNxKhZPIxwldzTJXzXYxpZsbrF17ndksCnxKDDG1M0scT4nsYxxMhIjINw9waCbbtN6pN5UxPFVsyQBvNEWipw1xJyBBA2r961jO1ZjPGoypHXxY1hGw3adM12ZsInPAF8ulfgpPHWDfKT/QO9q5RhMccfQj6McY6TwX9FoFjbekakgEljLakrB9RK9kdK6SLVtnWeO8F+Un/u7/al48wT5Wf+7v8AauONewEDm3Oy1a4Aego4qrni60bwG2z2xa53Cyp5siVuJK6fE3SkdgMdwT5Wo/u7/aiGO4L8pU/3d37y5F87Iml7+iACc3kE2F7NyzKreOKEkdF+7UHf7N6UeoyS3ihz6bFB1KVHcePcG+PU/QH95GMcwf41R9D/APpcL45ocveXjQHo6X70Qxqg3wvvYaN3k2tw61fyZvUj4sHudz46ws6GoP8AVN/fRsxnDriwqO9kf764Tx1RfIvPVsddtb96tsxrBvkqka/m2W1sPhXSeXN6lfF0/sdt43oTo2f5sf76NuJUxOTJ/RF++uchqqN8bXRvZZ2dpGtDh23ujmr4aekrZ2PpHPgp55Y2ykBrntaS1ptnmclmuqndNGj6THWpPY08YxmnjocSpjSV7nVOHVkUbm08j4y+SJ8bW7cLXi9+Nlh8ia04dhbaaop6nnXPjOy2KYvbYFnklgHD4SbA8Zq8YYGyupon32Hsia+Mg8Lvv610LGmJz4nyuBabWcQt55ZwSbXJzY8WPI2ovc1DXRD4Ep7Gj2pGtYfgP77Kk3Z+UPds+xEWNOryfR9wWX2JGv14E76sEGzHd5AVWSolObWA/tgfcj5v9Z1u1IsYNS7uJR88hfXh4OK5WtxKsjaIaGd55psTtiSJwDRMJbjMG+5YPMVr4g04ZXc63oteAwNLLk2c3b1F8l6k6ON3E8ASo+YbuB7y0+sJfamuxS6XG+7PLfF2Jv2WihrhdzSWlsIaS0WBzkW9gNBilNX0c0tK+KCmMz9mR8W08yNsbFjnLsnQM+EAOGbfYm5qJpFg0+bYlRLq8nZFrpMXlltkkb2usbEjyTkVGBm3zwgDIz8H0qZrW5cAQdVUOolL+yM59Oo7xZq0wzV74bPNcfqWfSzRCwedk8TorryAWPa9nkkdIXaR2ghdtp8HHTXIXNHaLgci0C3pKSEVHEMPWx4t/iASQTZ4vtP+I/0FLaJ8pkhHYsxlRRvLGNlie57gxjY59tznHIBrWkklXPBa25Boa3LLyHrztT8HrUvJZBZvjf6AiaYz8B3eB7Fnyvip383UB0Umy13NzkMcGu0Nib2KUM0UzxHAOekIc4Mhdtv2W6mzTdTb8Mr+PlGiWxZ3Y7LhYfckIqd+R2m9bsvUoRBWH+RVXe2RF4PW2ypKkdrX5KW5eC1o7tBy0dJLDJE5ziyQbLgHWu3gclSp+T+FRv2mB54bcryAQbjK1lY8FxHfBUdzJPYjbTV/yFV82RK8iHWJ9kSupQPz1u1x9irT0okY+MVrYy4EXBJt3EWVltPWnWCcdZa6/wBZT+C1JOcEx7Q77lCc07ouoNV/0yPFtXcXxeKwOf4O3NX6amZCxrX1kcjwLF7WmMuzvdwblf2K4Keo/R5e5h+9H4NP+jP+b61csmSSp2TDFhg7VX/pTmooqtmz4VI3ZJAfG4OtfIiz2kKv4ihaC4V1USLOAaymzIFhrGtAUlaT+Sktw2HKQUdduhce0e1CeWO0WwksMnckrMcYHDYAz4jYXts+C7+vm1IMDpvlsUvnvpAPRsLT8Er7DZp5L9ZH13KidR4sSfweW43iwH2lSeZ92S44F2RUbgdMDnPiAuLeVTWt12jUowalBB8Krb+fTgjK3ySvw0lc2NofA/azvci/rUvg9WPzR/w+1Q55k+WWodPW6Q9HT0lPCyBrppNknORzHOIJ4tAFh2JVWFYXXxOjmbMyx2muje5jtoA2sWX9SQiqh+bcO9t0gyoBAIdexOo0WNZbvc11Ya07UVcKwVuFzmSlqavZOrJ2xSgb8nWBXTRyOcXOdGS4+U52p+5Yjo5iCLPF94c26oQmdslWGtqHtp3ESkRvttb2x38oj9W63vNNfyt0Yfgg7jSs7Rr/APZgdpCkEguMmd5AXEx1UchkLef2GTx07nmGZkYklcGNze0CxJAv17rrQFLUnINv2uH3hGnJ6icsXsdQJGfGh+lZ7UjPEPKkpu+WP2rmhQVh0Y358fsWJWYxhtBV1FFUNqxUQOLJAyKJzbixuHbYyORGSenJ6kasPsehc/S/L0vX79F7UBlo7/xqAdk0ftXmp5T4KNGV3fDDb/mIXcp8MByjrMh8nCP/AJE9GT1Frxex6WZaLfVwfTM9qbnaAa1VP9NH7VyUJlmpKSraAI6mCOdgcDtBrxcB1gRfvVKpr56VjnvpS8NOjJ4g7uEjR61Xx5PUXy4fY70VGGi16yltvvKPuUnhmDjWupR+277gvM4cdfO8tFFLGwZ7c0sRHUA1gJupJcVfG+iZzd/CahlNt7fRjc/ySRs79NVcY5F+pEpYn+x6Y3EsEAzr6Xu5w+pqlbjOBNBBr4Lb7Mnt9TFwMbKh5AfUU8Wm1ttlJaNrYJsOBsD2q0cPBafxrTZ3v+Dy5WdsHV40XSoZ1+pzyl07/Y65+McnSbtxCIE7jFP6wxJcW7CamKTm3zDYMbXslERMUl9dk7RzCSt/KuUZ/gfcsw0GGU0nO09FSQy5jnIYImPsdek1t1ZOiZMVRmcLyrH43P8ARKT7JUfJcWxiH+jVfqapuVQ/G39kpfUUHJkfjeH+jVf2QqZB3gSSCKxUFjJJ7FPZAAprBHYZ2z7E9kAAiAT2RBqAsYBEAnA0RAIAGyfJPZJAAFA5SFAUgIXaqManuCmIzUehckME8FKxhJCaNm0b7lciYPqVpENkEtO2WKVsjQ9hb0mvF2kAg5gq22MDPsPpRFoLXji0j6k80gjbG7c+Nrh15WK0RmwxZupFli43TYBWRyeGU0b6jYEcdQwBtSzZzbsyAXsOB/8ACqsRLQQCsCoqzI4lzr9qG6GlZzdXgcFPDPM2qmfsbJDXRxtvdwGeyVlyN6ZHUPUulrpQ+lqNkOI6ILgDsjpjeuecOk4/96KEUFIamPZaJpR0I3ANmfshrmgjIGypzCV/5R732zG29zrHq2irM1VKz3vZieANlplja97NPJcc7dShNS86xwHtiaqYIrxukheHsc5tjnsG3pWtT4mHgRz7Lr2ttDeDca6EKiKoAfxajIuSA6AG19wuVE+cOJIhpm3zs2OwHYLpDO3ixrEJbbVXMb65tFyddB6Vox11a4D8Ikz6x7Fw+HSvINz8MgAaAWGQXTUkhLQpcpeQSRsCoqTrK/0pKs12SSWqXkrSjoLBKwSSTA4jlUAMW/slL6nIOTIHjiAf+nq/shJJU+DNHeBoRABJJSWFsjJPsixSSSYAtaM0WyEkkwC2R1p9kJJIAfZHqTho60kkgC2R1oS0JJIEAWhMWhJJBQDmi3eoXNG23zT60kkdhFuNjQArDWN69EklouDNh7I61UxMAUETwTdtQ9g80i5CSSYHH1T3knMqgSbjtCSSzfJZVr5ZDG9pd0bNyFgMiNwWM7yj2XSSTiSyrU/lD3qFJJNjQJQnekkkM0MP0/aPqC6ij8gdqSSljRpNGSSSSko//9k="
                    avatarImage="https://tse2.mm.bing.net/th?id=OIP.0A_ZnQ1liKQQ1f1wTvOP6wHaE8&pid=Api&P=0&w=254&h=170"
                    title="Best setups for work at home desk."
                    channel="RandomQl"
                    views="200"
                    timestamp="10 mins ago"
                />
                <VideoCard
                    img="https://th.bing.com/th/id/OIP.lODsmAHKNbkfAtNzsgxZ7QHaEK?pid=Api&rs=1"
                    avatarImage="https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151"
                    title="Simple projects to do over the weekend for beginner level."
                    channel="TechWithTim"
                    views="130K"
                    timestamp="1 week ago"
                />
                <VideoCard
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLrE8uuyxMMELMHZKn9YGEreb1OQVeo57b1g&usqp=CAU"
                    avatarImage="https://tse2.mm.bing.net/th?id=OIP.0A_ZnQ1liKQQ1f1wTvOP6wHaE8&pid=Api&P=0&w=254&h=170"
                    title="Best setups for work at home desk."
                    channel="RandomQl"
                    views="200"
                    timestamp="10 mins ago"
                />
                <VideoCard
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF5KR5sKCReT4R7O-ie5VBNO7RH6E88m3ubQ&usqp=CAU"
                    avatarImage="https://tse1.mm.bing.net/th?id=OIP.1TImSJW-SDQHsRapqDJf5QHaEK&pid=Api&P=0&w=293&h=166"
                    title="Python strengths and how to maximize each of them."
                    channel="LearnCodeAcademy"
                    views="13K"
                    timestamp="1 month ago"
                />
                <VideoCard
                    img="https://tse2.mm.bing.net/th?id=OIP.qHO_DagepnsjOuFUU0rAhAHaE8&pid=Api&P=0&w=312&h=209"
                    avatarImage="https://tse2.mm.bing.net/th?id=OIP.qHO_DagepnsjOuFUU0rAhAHaE8&pid=Api&P=0&w=312&h=209"
                    title="Python strengths and how to maximize each of them."
                    channel="LearnCodeAcademy"
                    views="13K"
                    timestamp="1 month ago"
                />
                <VideoCard
                    img="https://th.bing.com/th/id/OIP.BD1sDyHc-A1tM41jeCBn6wHaEK?w=281&h=180&c=7&o=5&pid=1.7"
                    avatarImage="https://tse1.mm.bing.net/th?id=OIP.1TImSJW-SDQHsRapqDJf5QHaEK&pid=Api&P=0&w=293&h=166"
                    title="Python strengths and how to maximize each of them."
                    channel="LearnCodeAcademy"
                    views="13K"
                    timestamp="1 month ago"
                />
                <VideoCard
                    img="https://tse3.mm.bing.net/th?id=OIP.i1AODAgmHYhGUSdfH7IR9AHaEK&pid=Api&P=0&w=275&h=155"
                    avatarImage="https://tse3.mm.bing.net/th?id=OIP.i1AODAgmHYhGUSdfH7IR9AHaEK&pid=Api&P=0&w=275&h=155"
                    title="Python strengths and how to maximize each of them."
                    channel="LearnCodeAcademy"
                    views="13K"
                    timestamp="1 month ago"
                />
                <VideoCard
                    img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1cryn55JAI83hCA8Ds-c7a53b4bBPVtwgTA&usqp=CAU"
                    avatarImage="https://tse1.mm.bing.net/th?id=OIP.1TImSJW-SDQHsRapqDJf5QHaEK&pid=Api&P=0&w=293&h=166"
                    title="Python strengths and how to maximize each of them."
                    channel="LearnCodeAcademy"
                    views="13K"
                    timestamp="1 month ago"
                />
                <VideoCard
                    img="https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151"
                    avatarImage="https://tse2.mm.bing.net/th?id=OIP.Smv6zLkITrqf1kfnb-yD4wHaEK&pid=Api&P=0&w=268&h=151"
                    title="Python strengths and how to maximize each of them."
                    channel="LearnCodeAcademy"
                    views="13K"
                    timestamp="1 month ago"
                />
                <VideoCard
                    img="https://d.ibtimes.co.uk/en/full/1561799/national-geographic-nature-photographer-year.jpg?w=400"
                    avatarImage="https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166"
                    title="Savage Kingdom - Episode 1002"
                    channel="NatGeo"
                    views="13M"
                    timestamp="1 week ago"
                />
                <VideoCard
                    img="https://tse2.mm.bing.net/th?id=OIP.bQax-0sqvRxjFBq1ivqRqQHaE8&pid=Api&P=0&w=263&h=176"
                    avatarImage="https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166"
                    title="Survival for the fittest- Episode 631."
                    channel="NatGeo"
                    views="1.5M"
                    timestamp="8 hours ago"
                />
                <VideoCard
                    img="https://tse2.mm.bing.net/th?id=OIP.iOhrS2-DG_aX3TLdXUGJOQHaEk&pid=Api&P=0&w=254&h=158"
                    avatarImage="https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166"
                    title="The world's fastest cat and its greatest enemies"
                    channel="NatGeo"
                    views="100M"
                    timestamp="1 year ago"
                />
                <VideoCard
                    img="https://tse4.mm.bing.net/th?id=OIP.nU8t4WsxxEboyp523eTUsQHaEK&pid=Api&P=0&w=278&h=157"
                    avatarImage="https://tse3.mm.bing.net/th?id=OIP.9XG_sZwIj4jnXq7-1mC_4AHaE8&pid=Api&P=0&w=247&h=166"
                    title="50th Anniversary celebrations in peru preparation."
                    channel="NatGeo"
                    views="700K"
                    timestamp="3 hours ago"
                />
                <VideoCard
                    img="https://tse3.mm.bing.net/th?id=OIP.YJqDpMsnprgfkDzlzXiTrwHaEV&pid=Api&P=0&w=287&h=169"
                    avatarImage="https://tse1.mm.bing.net/th?id=OIP.ZsOoUIB6cAHsnGbXhXfrywHaEo&pid=Api&P=0&w=273&h=171"
                    title="World cup 2022 preperations."
                    channel="FIFA"
                    views="500K"
                    timestamp="3 days ago"
                />
                <VideoCard
                    img="https://tse4.mm.bing.net/th?id=OIP.pINdZWn42_1DnB5xMDAS-AHaEK&pid=Api&P=0&w=273&h=154"
                    avatarImage="https://tse3.mm.bing.net/th?id=OIP.8c8KBmZdFWnhnDn5LjeFcAHaED&pid=Api&P=0&w=309&h=169"
                    title="How to maximize on the wilcard chips for 2020/2021 season"
                    channel="eplFantasy"
                    views="2K"
                    timestamp="1 hour ago"
                />
                <VideoCard
                    img="https://tse4.mm.bing.net/th?id=OIP.P7kdUY4S47-IWbky168kDAHaEK&pid=Api&P=0&w=319&h=180"
                    avatarImage="https://tse4.mm.bing.net/th?id=OIP.1mXbec7by0KwJ-8iM8N2jAHaEK&pid=Api&P=0&w=338&h=191"
                    title="The best League in the world."
                    channel="EPL"
                    views="21M"
                    timestamp="3 weeks ago"
                />
                <VideoCard
                    img="https://tse1.mm.bing.net/th?id=OIP.zeTkF7-bvtm_W_Ft4nTjrgHaEq&pid=Api&P=0&w=291&h=184"
                    avatarImage="http://d279m997dpfwgl.cloudfront.net/wp/2018/06/0615_world-cup.jpg"
                    title="Women football making even bigger steps forward."
                    channel="WorldOfSoccer"
                    views="100K"
                    timestamp="2 weeks ago"
                />
            </div>
        </div>
    );
}

export default RecommendedVideos;
