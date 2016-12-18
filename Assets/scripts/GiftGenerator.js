#pragma strict

public var itemsGen:  GameObject[];

private var timeElapse:System.Double = 0;

function Start () {
	
}

function Update () {
    timeElapse+= Time.deltaTime;
    if(timeElapse>1.5f){
        var randomType = Mathf.FloorToInt(Random.Range( 0.0f,itemsGen.length+1));
        if(randomType>=itemsGen.length){
            randomType=0;
        }
        var x= Random.Range(-6, 6);
        var y= 6;
        var z= 0;
        var pos = Vector3 (x, y, z);
        Instantiate(itemsGen[randomType], pos, Quaternion.identity);
        timeElapse=0;
    }
}
