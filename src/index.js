import "./styles.css";

if (document.readyState !== "loading") {
  console.log("Document is ready.");
  runCode();
} else {
  document.addEventListener("DOMContentLoaded", function () {
    console.log("The document has been downloaded.");
    runCode();
  });
}

function runCode() {
  //funktiot tämän ulkopuolelle ja kutsua niitä funktiossa
  const AddButton = document.getElementById("add-comment");
  console.log(AddButton);
  AddButton.addEventListener("click", function () {
    //Add comment
    const UserInput = document.getElementById("text-area").value;
    let NewComment = document.createElement("LI");
    NewComment.innerHTML = UserInput;
    const CommentArea = document.getElementById("comment-area");
    CommentArea.appendChild(NewComment);

    document.getElementById("text-area").value = "";
  });

  const RemoveButton = document.getElementById("remove-comments");
  RemoveButton.addEventListener("click", function () {
    var result = window.confirm("Want to delete?");
    if (result === true) {
      const CommentArea = document.getElementById("comment-area");
      CommentArea.innerHTML = "";
    }
  });

  const review = document.getElementById("submit");
  review.addEventListener("click", function () {
    const Emoji = document.getElementById("emoji");
    const text = Emoji.options[Emoji.selectedIndex].text;

    const div1 = document.createElement("div");
    const div_emoji = document.createTextNode(text);

    div1.appendChild(div_emoji);
    document.getElementById("comment-rating").appendChild(div_emoji);

    const Teksti = document.getElementById("kommentti").value;
    const div2 = document.createElement("div");
    const div_teksti = document.createTextNode(Teksti);

    div2.appendChild(div_teksti);
    document.getElementById("comment-text").appendChild(div_teksti);
  });
}
