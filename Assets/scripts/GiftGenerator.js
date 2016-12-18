#pragma strict

public var itemsGen:  GameObject[];

var timeElapse:System.Double = 0;

function Start () {
	
}

function Update () {
    timeElapse+= Time.deltaTime;
    if(timeElapse>1){
        var randomType = Mathf.FloorToInt(Random.Range( 0.0f,itemsGen.length+1));
        Debug.Log("randomType :" + randomType);
        var pos = Vector3 (-5, 6, 0);
        Instantiate(itemsGen[randomType], pos, Quaternion.identity);
        timeElapse=0;
    }
    Debug.Log(timeElapse);
}
