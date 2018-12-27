
    function allowDrop(ev) {
      ev.preventDefault();
    }

    function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    }

    function drop(ev) {
      ev.preventDefault();
      var data = ev.dataTransfer.getData("text");
      ev.target.appendChild(document.getElementById(data));
    }
    for (var items = document.querySelectorAll(".dd-item"),
      len = items.length, i = 0; i < len; i ++){
        items[i].setAttribute("draggable","true");
        items[i].addEventListener('drop', function(e){
  e.preventDefault();
  e.stopPropagation();
}, false);
        items[i].addEventListener( "dragstart" ,function drag(ev) {
      ev.dataTransfer.setData("text", ev.target.id);
    });
    }