#pragma strict

public var itemGen:GameObject;

var timeElapse:System.Double = 0;
function Start () {
	
}

function Update () {
    Debug.Log("Update time :" + Time.deltaTime);
    timeElapse+= Time.deltaTime;
    if(timeElapse>1){
        var pos = Vector3 (-5, 6, 0);
        Instantiate(itemGen, pos, Quaternion.identity);
        timeElapse=0;
    }
    Debug.Log(timeElapse);
}
