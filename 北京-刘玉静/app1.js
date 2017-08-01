/**
 * Created by Administrator on 2017/8/1.
 */

document.getElementById("all").onclick = function () {
  console.log(this.checked);

  var items = document.getElementsByClassName("item");

  console.log(items);
  for (var i=0;i<items.length;i++){
      var item = items[i];
      var checkBox = item.getElementsByTagName("input")[0];
      checkBox.checked = this.checked;
  }
};

document.getElementById("other").onclick = function () {

    var items = document.getElementsByClassName("item");

    for (var i=0;i<items.length;i++){
        var item = items[i];
        var checkBox = item.getElementsByTagName("input")[0];
        checkBox.checked = !checkBox.checked;
    }
};

var items = document.getElementsByClassName("item");

for (var i=0;i<items.length;i++){
    var item = items[i];
    item.onclick = function () {
        var p = this.getElementsByTagName("p")[0];
        alert(p.textContent);
    }
}


