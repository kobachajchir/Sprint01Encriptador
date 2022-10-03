function encryptText() {
  let text = document.getElementById("inputText").value;
  text = text.toLowerCase();
  let encryptedText = "";
  for (letter in text) {
    switch (text.charAt(letter)) {
      case "a":
        encryptedText += "ai";
        break;
      case "e":
        encryptedText += "enter";
        break;
      case "i":
        encryptedText += "imes";
        break;
      case "o":
        encryptedText += "ober";
        break;
      case "u":
        encryptedText += "ufat";
        break;
      default:
        encryptedText += text.charAt(letter);
        break;
    }
    console.log(encryptedText);
  }
  document.getElementById("encryptedText").innerText = encryptedText;
  document.getElementById("encryptedDiv").style = "display: block";
  document.getElementById("btnDecrypt").style = "display: block";
}

function decryptText() {
  let text = document.getElementById("encryptedText").innerText;
  let decryptedText = "";
  let counter = 0;
  while (counter < text.length) {
    switch (text[counter]) {
      case "a":
        if (text[counter + 1] == "i") {
          decryptedText += "a";
          counter += 2;
        }
        break;
      case "e":
        if (
          text[counter + 1] == "n" &&
          text[counter + 2] == "t" &&
          text[counter + 3] == "e" &&
          text[counter + 4] == "r"
        ) {
          decryptedText += "e";
          counter += 5;
        }
        break;
      case "i":
        if (
          text[counter + 1] == "m" &&
          text[counter + 2] == "e" &&
          text[counter + 3] == "s"
        ) {
          decryptedText += "i";
          counter += 4;
        }
        break;
      case "o":
        if (
          text[counter + 1] == "b" &&
          text[counter + 2] == "e" &&
          text[counter + 3] == "r"
        ) {
          decryptedText += "o";
          counter += 4;
        }
        break;
      case "u":
        if (
          text[counter + 1] == "f" &&
          text[counter + 2] == "a" &&
          text[counter + 3] == "t"
        ) {
          decryptedText += "u";
          counter += 4;
        }
        break;
      default:
        decryptedText += text[counter];
        counter++;
        break;
    }
  }
  document.getElementById("decryptedDiv").style = "display: block";
  document.getElementById("decryptedText").innerText = decryptedText;
}

function checkIfBlank() {
  let text = document.getElementById("inputText").value;
  if (text == "") {
    document.getElementById("btnEncrypt").disabled = true;
    document.getElementById("btnDecrypt").style = "display: none";
    document.getElementById("encryptedDiv").style = "display: none";
    document.getElementById("decryptedDiv").style = "display: none";
  } else {
    document.getElementById("btnEncrypt").disabled = false;
  }
}
