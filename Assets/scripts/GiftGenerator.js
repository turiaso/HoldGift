#pragma strict

public var itemsGen:  GameObject[];

private var timeElapse:System.Double = 0;

function Start () {
	
}

function Update () {
    timeElapse+= Time.deltaTime;
    if(timeElapse>1.5f){
        var randomType = Mathf.FloorToInt(Random.Range( 0.0f,itemsGen.length+1));
        var pos = Vector3 (-5, 6, 0);
        Instantiate(itemsGen[randomType], pos, Quaternion.identity);
        timeElapse=0;
    }
}
