/**
 * Created by Administrator on 2017/8/1.
 */

function Card(src,callback) {
    this.isOpen = false;
    this.view = document.createElement("li");
    this.image = document.createElement("img");
    this.image.src = src;
    this.image.style.display = "none";
    this.view.appendChild(this.image);
    this.view.style.cssText = "width:44px;height:44px;background:red;margin:2px";
    var self = this;
    this.view.onclick = function () {

        self.isOpen = !self.isOpen;
        self.image.style.display = self.isOpen?"block":"none";
        this.setAttribute("class",self.isOpen?"open":"");
        callback(self);
    };
}






function Box(superView,images) {

    var ul = document.createElement("ul");
    for (var i=0;i<images.length;i++){
        var li = new Card(images[i],function (info) {
            action(info,ul);
        });
        ul.appendChild(li.view);
        var li2 = new Card(images[i],function (info) {
            action(info,ul);
        });
        ul.appendChild(li2.view);
    }
    superView.appendChild(ul);
}

function action(info,ul) {
    var double = [];
    var openEles = document.getElementsByClassName("open");
    for(var i=0;i<openEles.length;i++){

        if (openEles[i].children[0].src === info.image.src){
            console.log(i);
            double.push(openEles[i]);
            if (double.length===2){
                double.forEach(function (item) {
                    ul.removeChild(item);
                })
            }
        }
    }
}

new Box(document.body,["image1.png","image2.png"]);