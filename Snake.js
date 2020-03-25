var data={"snake": {"direction": "DOWN",
"body": 
    [{"xCoor": 11, "yCoor": 11},
    {"xCoor": 11,"yCoor": 10},
    {"xCoor": 11, "yCoor": 9},
    {"xCoor": 12, "yCoor": 9},
    {"xCoor": 13,"yCoor": 9},
    {"xCoor": 13,"yCoor": 10}]},
    "food": {"xCoor": 10, "yCoor": 17},
    "gamestate": "IN_PROGRESS",
    "boundary": {"height": 30,
    "width": 50}}

function renderScore(data){
    let score=data.snake.body.length-1;
    document.getElementById("score").innerText="Score: "+score;
}
renderScore(data)
function startGame(){    
}

let width=50;
let height=30;
var grid=""
grid +="<tr style='height:10px'>"
grid +="<th style='width:10px'></th>"
var jsonResponse='{"food":[{"xCoor":10,"yCoor":17}]}';
        var foodCoor=JSON.parse(jsonResponse);
        

// for body
        var jsonResponseBody='{"body":[{"xCoor": 11, "yCoor": 11}, {"xCoor": 11,"yCoor": 10},{"xCoor": 11, "yCoor": 9},{"xCoor": 12, "yCoor": 9},{"xCoor": 13,"yCoor": 9},{"xCoor": 13,"yCoor": 10}]}';
        var bodyCoor=JSON.parse(jsonResponseBody);
      
for(var i=0;i<width;i++){
    grid +="<th>"+(i+1)+"</th>"
}
for(var i=1;i<=height;i++){
    grid +="<tr>"
    grid +="<th>"+(i)+"</th>"


    for(var j=1;j<=width;j++){
        var id="cell_"+(i+1)+"_"+(j+1)
        grid +="<td id='"+id+"'>"+"."+"</td>"
        if(i===foodCoor.food[0].yCoor && j===foodCoor.food[0].xCoor){
            position="<canvas id='food'></canvas>";
            grid +="<td id='food'>"+(i+1)*(j+1)+"</td>"
        }


// for head
        else if(i===bodyCoor.body[0].yCoor && j+2===bodyCoor.body[0].xCoor){
            position="<canvas id='head'></canvas>";
            grid +="<td id='head'>"+(i+1)*(j+1)+"</td>"
        }
        // for body
        for( var z=1;z<Object.keys(bodyCoor.body).length;z++){
        if(i===bodyCoor.body[z].yCoor && j+2===bodyCoor.body[z].xCoor){
            position="<canvas id='body'></canvas>";
            grid +="<td id='body'>"+(i+1)*(j+1)+"</td>"
        }
    }
console.log(Object.keys(bodyCoor.body).length);

    }
    grid+="</tr>"
   
}
document.getElementById("grid").innerHTML=grid;
    // document.getElementById("cell_8_20").style.backgroundColor="blue";