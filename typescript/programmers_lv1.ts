

const line: string = "=============================================================================";
// ================================ 달리기 경주 =====================================================
// https://school.programmers.co.kr/learn/courses/30/lessons/178871
/*
function runningRace(players: string[], callings: string[]){
    console.log("수정전 : " + players)
    let result: string[] = [];
    let rank: number;
    callings.forEach(calling => {
        // console.log(calling);
        players.forEach((player, index) => {
            if(player === calling){
                // let temp: string = players[index-1];
                // players[index-1] = player;
                // players[index] = temp;

                // ES6 문법 사용(Array destructuring)
                [players[index], players[index-1]] = [players[index-1], players[index]]
            }
        });
    });
    
    console.log("수정후 : " + players)
    return players;
}
*/
function runningRace(players: string[], callings: string[]) {
    let idx;
    let player1;
    let player2;
    const map: { [key: string]: number } = {};


    players.forEach((name,index)=>map[name]=index)
    console.log(map["mine"]);

    for(var call of callings){
        idx = map[call];
        player1 = players[idx];
        player2 = players[idx-1];
        map[call] -= 1;
        map[player2] += 1;
        players[idx] = player2;
        players[idx-1] = player1;
    }

    console.log(players);
    console.log(line)
}


runningRace( ["mumu", "soe", "poe", "kai", "mine"]  , ["kai", "kai", "mine", "mine"] );


// =================================== 추억점수 ================================================
// https://school.programmers.co.kr/learn/courses/30/lessons/176963

function oldScore(name: string[], yearning: number[], photo: string[][]){
    const scoreMap: { [key: string]: number } = {};
    var answer: number[] = new Array(photo.length).fill(0);
    name.forEach((n, index) => {
        scoreMap[n] = yearning[index];
    });
    console.log(scoreMap);
    photo.forEach((row, idx) => {
        row.forEach(col => {
            // console.log("<<<<<<<<<<<<<<배열: "+idx);
            // console.log(col);
            // console.log(scoreMap[col]);
            if (scoreMap.hasOwnProperty(col)) {
                answer[idx] += scoreMap[col];
            }
        });
    });
    console.log(answer);
    console.log(line);
    return answer;
}
oldScore( ["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
)

function oldScore2(name: string[], yearning: number[], photo: string[][]){
    console.log("점수2");
    // console.log( name.indexOf("may") );
    // console.log(photo.map((v) => v.reduce((a, c) => a)));
    console.log(photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)] ?? 0, 0)));
    return photo.map((v)=> v.reduce((a, c)=> a += yearning[name.indexOf(c)]??  0, 0));
}
oldScore2( ["may", "kein", "kain", "radi"],
        [5, 10, 1, 3],
        [["may", "kein", "kain", "radi"],["may", "kein", "brin", "deny"], ["kon", "kain", "may", "coni"]]
)



