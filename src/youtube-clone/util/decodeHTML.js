// string에 #&39 같은 형태의 html 특수문자가 있는 경우 해결하는 방법
// html 문서 안에 넣었다가 빼준다.
export function decodeHTMLEntities(text) {
    const textArea = document.createElement("textarea");
    textArea.innerHTML = text;
    return textArea.value;
}
