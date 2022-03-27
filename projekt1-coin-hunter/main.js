var panacek;
var mince;
var skore;
var div = document.getElementById("score");

function startGame() {
  panacek = new component(30, 30, "obrazky/panacek.png", getX(), getY());
  mince = new component(30, 30, "obrazky/mince.png", getX(), getY());
  window.addEventListener("keydown", function (event) {
    mycanvas.key = event.keyCode;
  });
  window.addEventListener("keyup", function (event) {
    mycanvas.key = false;
  });
  mycanvas.start();
}

var mycanvas = {
  //canvas = prosterdi, aktivni pozadi
  canvas: document.createElement("canvas"),
  start: function () {
    this.canvas.width = 600;
    this.canvas.height = 600;
    this.context = this.canvas.getContext("2d");
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    this.interval = setInterval(updateMyCanvas, 20);
    skore = 0;
    div.innerHTML = skore;
  },
  clear: function () {
    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
  },
};

function component(width, height, img, x, y) {
  this.width = width;
  this.height = height;
  this.newX = 0;
  this.newY = 0;
  this.x = x;
  this.y = y;
  this.myImg = new Image();
  this.myImg.src = img;
  this.update = function () {                         
    ctx = mycanvas.context;
    ctx.drawImage(this.myImg, this.x, this.y, this.width, this.height);            
  };
  this.newPosition = function () {
    this.x += this.newX;
    this.y += this.newY;
  };
}

function updateMyCanvas() {
  mycanvas.clear();
  panacek.newX = 0;
  panacek.newY = 0;
  if (mycanvas.key && mycanvas.key == 37) {
    if (panacek.x > 2) {
      panacek.newX = -1;
      panacek.myImg.src = "obrazky/panacek-vlevo.png";
      //panacek.update();
    }
    //leva
  }
  if (mycanvas.key && mycanvas.key == 38) {
    if (panacek.y > 5) {
      panacek.newY = -1;
      panacek.myImg.src = "obrazky/panacek-nahoru.png";
      //panacek.update();
    }
    // nahoru
  }
  if (mycanvas.key && mycanvas.key == 39) {
    if (panacek.x < 565) {
      panacek.newX = 1;
      panacek.myImg.src = "obrazky/panacek-vpravo.png";
      //panacek.update();
    }
    //prava
  }
  if (mycanvas.key && mycanvas.key == 40) {
    if (panacek.y < 563) {
      panacek.newY = 1;
      panacek.myImg.src = "obrazky/panacek.png";
      //panacek.update();
    }
    //dolu
  }
  panacek.newPosition();
  panacek.update();
  mince.update();
  nasePanacekMinci();
}

function getX() {
  return (randomNumberX = Math.floor(Math.random() * (600 - 60)));
}

function getY() {
  return (randomNumberY = Math.floor(Math.random() * (600 - 60)));
}

function nasePanacekMinci() {
  if (
    !(
      panacek.x + 30 < mince.x ||
      mince.x + 30 < panacek.x ||
      panacek.y + 30 < mince.y ||
      mince.y + 30 < panacek.y
    )
  ) {
    mince.x = getX();
    mince.y = getY();
    panacek.update();
    mince.update();
    skore += 1;
    div.innerHTML = skore;
    if (skore == 5) {
      window.alert("Vyhra!!!!!!!");
      mycanvas.start();
    }
  }
}
