#pragma strict

private var score:int =0;

function Start () {
	
}

function Update () {
    score = getScore();
}

public function getScore(){
    return score;
}

public function setScore(score:int){
    this.score = score;
}


function OnGUI()
{
    var style = new GUIStyle();
    style.fontSize=40;
    GUI.Label(Rect(0,0,650,650),"Score "+ score.ToString(), style);
}