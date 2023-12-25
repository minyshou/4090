var face_x = []
var face_y = []
var face_size = []
var face_num = 6 //臉的數量在這改即可
var song
var songIsplay=false//設定此變數為 假(fasle)，收到按下滑鼠把變數改為真，音樂開始播放
var amp
var vol
 

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES)

  for(var i=0;i<face_num;i++){
    face_size[i]=random(100,300)//臉的大小100~300
    face_x[i]=random(0,width)
    face_y[i]=random(0,height)
  }
}

function draw() {
  background("#edede9");
  
  
  for(var j=0;j<face_num;j++){
   push() 
   var f_s = face_size[j]
   translate(face_x[j],face_y[j])

   noStroke()
   fill("#fde4cf")
   
   ellipse(0,0,f_s)//臉
   
   fill(255)
   stroke(0)
   ellipse(f_s/6,-f_s/20,f_s/6.6)//左眼睛
   ellipse(-f_s/6,-f_s/20,f_s/6.6)//右眼睛

   fill(0)
   ellipse(f_s/6+map(mouseX,0,width,-f_s/60,f_s/30),-f_s/20+map(mouseY,0,height,-f_s/60,f_s/30),f_s/10)//左眼珠
   ellipse(-f_s/6+map(mouseX,0,width,-f_s/60,f_s/30),-f_s/20+map(mouseY,0,height,-f_s/60,f_s/30),f_s/10)//右眼珠

   noStroke()
   fill("#c6ac8f")
   arc(0,-f_s/5,f_s/1.2,f_s/1.5,180,360)//瀏海
   fill("#fde4cf")
   noStroke()
   triangle(-f_s/7.5,-f_s/2.7,-f_s/10,-f_s/5,-f_s/4.2,-f_s/5)
   triangle(0,-f_s/3.3,-f_s/30,-f_s/5,f_s/30,-f_s/5)
   triangle(f_s/8.5,-f_s/3.1,f_s/20,-f_s/5,f_s/7.5,-f_s/5)
  
   fill("#c6ac8f")
   noStroke()
   beginShape()//左邊頭髮
      curveVertex(f_s/5,-f_s/1.8)
      curveVertex(f_s/5,-f_s/1.8)
      curveVertex(-f_s/3.75,-f_s/1.8)
      curveVertex(-f_s/2,-f_s/5)
      curveVertex(-f_s/1.875,f_s/2.1)
      curveVertex(-f_s/7.5,f_s/2.1)
      curveVertex(-f_s/3.1,f_s/3.3)
      curveVertex(-f_s/2.7,-f_s/10)
      curveVertex(-f_s/6.6,-f_s/4.2)
      curveVertex(f_s/30,-f_s/2.5)
      curveVertex(f_s/30,-f_s/2.5)
   endShape()

   beginShape()//右邊頭髮
      curveVertex(0,-f_s/1.8)
      curveVertex(0,-f_s/1.8)
      curveVertex(f_s/3.75,-f_s/1.8)
      curveVertex(f_s/2,-f_s/5)
      curveVertex(f_s/1.875,f_s/2.1)
      curveVertex(f_s/7.5,f_s/2.1)
      curveVertex(f_s/3.1,f_s/3.3)
      curveVertex(f_s/2.7,-f_s/10)
      curveVertex(f_s/6.6,-f_s/4.2)
      curveVertex(-f_s/30,-f_s/2.5)
      curveVertex(-f_s/30,-f_s/2.5)
   endShape()

   fill("#c6ac8f") 
   beginShape();//左邊眉毛
      curveVertex(-f_s/3.75,-f_s/6.3)
      curveVertex(-f_s/3.75,-f_s/6.3)
      curveVertex(-f_s/5.45,-f_s/5.7)
      curveVertex(-f_s/10,-f_s/5.6)
      curveVertex(-f_s/13,-f_s/5.7)
      curveVertex(-f_s/12,-f_s/7.1)
      curveVertex(-f_s/12,-f_s/7.1)
   endShape()

   fill("#c6ac8f") 
   beginShape();//右邊眉毛
      curveVertex(f_s/3.75,-f_s/6.3)
      curveVertex(f_s/3.75,-f_s/6.3)
      curveVertex(f_s/5.45,-f_s/5.7)
      curveVertex(f_s/10,-f_s/5.6)
      curveVertex(f_s/13,-f_s/5.7)
      curveVertex(f_s/12,-f_s/7.1)
      curveVertex(f_s/12,-f_s/7.1)
   endShape()
   
  fill("#fde4cf")
  ellipse(-f_s/2.7,0,f_s/7.5)//左耳
  ellipse(f_s/2.7,0,f_s/7.5)//右耳

  noFill()
  stroke("#582f0e")
  curve(f_s/6.6,f_s/20,f_s/2.7,f_s/20,f_s/2.6,-f_s/30,f_s/7.5,-f_s/20)//右耳渦
  curve(-f_s/6.6,f_s/20,-f_s/2.7,f_s/20,-f_s/2.6,-f_s/30,-f_s/7.5,-f_s/20)//左耳渦

  
  fill(255)//鼻子
  line(f_s/150,f_s/20,-f_s/60,f_s/7.5) 
  line(f_s/30,f_s/7.5,-f_s/60,f_s/7.5) 

  noStroke()//左腮紅
  fill("#fbc4ab")
  ellipse(-f_s/4,f_s/10,f_s/7.5,f_s/15)
  stroke("#e71d36")
  // strokeWeight(3)
  line(-f_s/4.6,f_s/8.5,-f_s/4.2,f_s/12)//腮紅內線
  line(-f_s/4,f_s/8.5,-f_s/3.75,f_s/12)//腮紅內線

  noStroke()//右腮紅
  fill("#fbc4ab")
  ellipse(f_s/4,f_s/10,f_s/7.5,f_s/15)
  stroke("#e71d36")
  // strokeWeight(3)
  line(f_s/3.5,f_s/8.5,f_s/3.75,f_s/12)//腮紅內線
  line(f_s/4,f_s/8.5,f_s/4.2,f_s/12)//腮紅內線

  if(mouseIsPressed)//如果按下滑鼠會
    {
      fill("#e56b6f")
      noStroke()
      arc(0,f_s/4,f_s/5,f_s/6.6,0,180)//嘴巴
    }
    else//否則
    {
      fill("#f4978e")
      noStroke()
      arc(0,f_s/4,f_s/5,f_s/6.6,0,180)//嘴巴弧度 上 arc弧度，全嘴唇，pi角度
    }

    if(mouseIsPressed)//如果按下滑鼠會
    {
      fill("#fde4cf")
      noStroke()
      ellipse(f_s/2.7,0,f_s/7.5)//右耳
      ellipse(-f_s/2.7,0,f_s/7.5)//左耳
      stroke("#582f0e");
      curve(f_s/6.6,f_s/20,f_s/2.7,f_s/20,f_s/2.6,-f_s/30,f_s/7.5,-f_s/20);//右耳渦
      curve(-f_s/6.6,f_s/20,-f_s/2.7,f_s/20,-f_s/2.6,-f_s/30,-f_s/7.5,-f_s/20);//左耳渦
    }
    else//否則
    {
      fill("#fde4cf")
      noStroke()
      ellipse(f_s/2.7,0,f_s/5)//右耳
      ellipse(-f_s/2.7,0,f_s/5)//左耳
      stroke("#582f0e");
      // strokeWeight(2)
      // curve(f_s/6.6,f_s/20,f_s/2.7,f_s/20,f_s/2.6,-f_s/30,f_s/7.5,-f_s/20);//右耳渦
      // curve(-f_s/6.6,f_s/20,-f_s/2.7,f_s/20,-f_s/2.6,-f_s/30,-f_s/7.5,-f_s/20);//左耳渦
      
      if(!songIsplay){
        fill("#fde4cf")
        noStroke()
        ellipse(f_s/2.7,0,f_s/7.5)//右耳
        ellipse(-f_s/2.7,0,f_s/7.5)//左耳
        stroke("#582f0e");
        curve(f_s/6.6,f_s/20,f_s/2.7,f_s/20,f_s/2.6,-f_s/30,f_s/7.5,-f_s/20);//右耳渦
        curve(-f_s/6.6,f_s/20,-f_s/2.7,f_s/20,-f_s/2.6,-f_s/30,-f_s/7.5,-f_s/20);//左耳渦
         //沒有播放
      }
      else{
      vol = amp.getLevel() //取得聲音值(值為0~1之間)
      // console.log(vol)//顯示網頁中console 數字
      fill("#fde4cf")
      noStroke()
      ellipse(f_s/2.7,0,f_s/5)//右耳
      ellipse(-110,0,f_s/2.7,0,f_s/5)//左耳
      noFill();
      // curve(f_s/6.6,f_s/20,f_s/2.7,f_s/20,f_s/2.6,-f_s/30,f_s/7.5,-f_s/10);//右耳渦
      // curve(-f_s/6.6,f_s/20,-f_s/2.7,f_s/20,-f_s/2.6,-f_s/30,-f_s/7.5,-f_s/10);//左耳渦
    }
    noFill()
    pop()
    }
    }
  }
