
const grades = { a: 0, b: 0, c: 0, d: 0, f: 0 }; 
const scores = [82, 71, 62, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87, 60];

for (var i = 0; i < scores.length; i++) {
        if ( 89<scores[i] && scores[i] >= 100 ) {grades.a += 1;} 
        else if (79 < scores[i] && scores[i] >= 90) {grades.b += 1;}
        else if (69 < scores[i] && scores[i] >= 80) {grades.c += 1;} 
        else if (59 < scores[i] && scores[i] >= 70) {grades.d += 1;}
        else if (0 < scores[i] && scores[i] >=59) {grades.f += 1;} 
        };
for (var prop in grades){
        console.log(`${prop}= ${grades[prop]}`)
}




//=====================================
    var lowest = scores[0];
    var highest = scores[0];
    var scoreLowToHigh = scores.sort(function (a, b) { return a - b });
        for (var i=0; i<scores.length; i++){
           if(scores[i] > highest){
                 highest = scores[i];
           }
           
           else if (scores[i] < lowest){
                 lowest = scores[i]; 
    }
 }
console.log("the highest score is",highest);
console.log("the lowesr score is", lowest);


//========================================
var mostGrade = Object.values(grades);
console.log(Math.max(...mostGrade));
//=======================================
console.log(Math.min(...mostGrade));