var c = 1;
var ghost = ["Green","","Red",];
var cells = [];
for (var i = 0; i < 4; i++) {
    cells[i] = [];
    for (var j = 0; j < 4; j++) {
        cells[i][j] = 0;
    }
}
function CLICK(p) {
	let i = Math.floor(p/4);
  let j = p%4;
	if(cells[i][j]==0){
  	cells[i][j]=c;
    document.getElementById(p).className = ghost[c+1];
		FLIP(i+1,j);
    FLIP(i-1,j);
    FLIP(i,j+1);
    FLIP(i,j-1);
		CHECK();
  }
}
function CHOOSE(id) {
	if(id=='R')
		c = 1;
  else
  	c = -1;
}
function FLIP(i,j) {
	if(i>=0 && i<4 && j>=0 && j<4){
  	let c2 = cells[i][j];
  	if(c!=0){
    	cells[i][j] = -c2;
      p = 4*i+j;
      document.getElementById(p).className = ghost[-c2+1];
    }
  }
}
function CHECK(){
	for (let i = 0; i < 4; i++) {
  	c2 = cells[i][0];
  	for (let j = 1; j < 4; j++) {
    	if(cells[i][j]!=c2)
      	break;
      if(j==3)
      	LINE(1,i);
    }
  }
  for (let j = 0; j < 4; j++) {
  	c2 = cells[0][j];
  	for (let i = 1; i < 4; i++) {
    	if(cells[i][j]!=c2)
      	break;
      if(i==3)
      	LINE(2,j);
    }
  }
  c2 = cells[0][0];
  for (let k = 1; k < 4; k++) {
    if(cells[k][k]!=c2)
      break;
    if(k==3)
      LINE(3,0);
  }
  c2 = cells[0][3];
  for (let k = 1; k < 4; k++) {
    if(cells[k][3-k]!=c2)
      break;
    if(k==3)
      LINE(4,0);
  }
}
function LINE(mode,k) {
	if(mode==1){
  	i=k;
    for (let j = 0; j < 4; j++){
    	cells[i][j] = 0;
      p = 4*i+j;
      document.getElementById(p).className = ghost[1];
    }
  }
  else if(mode==2){
  	j=k;
    for (let i = 0; i < 4; i++){
    	cells[i][j] = 0;
      p = 4*i+j;
      document.getElementById(p).className = ghost[1];
    }
  }
  else if(mode==3){
    for (let k = 0; k < 4; k++) {
      cells[k][k] = 0;
      p = 5*k;
      document.getElementById(p).className = ghost[1];
    }
  }
  else if(mode==4){
    for (let k = 0; k < 4; k++) {
      cells[k][3-k] = 0;
      p = 3*k+3;
      document.getElementById(p).className = ghost[1];
    }
  }
}
