#pragma strict

public var itemsGen:  GameObject[];
public var maxGifts:int;

private var timeElapse:System.Double = 0;
private var gifts:int = 0;

function Start () {
	
}

function Update () {
    timeElapse+= Time.deltaTime;
    if(timeElapse>3f && gifts<maxGifts){
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
        gifts++;
    }
}

function getGifts(){
    return gifts;
}

function setGifts(_gifts:int){
    gifts = -gifts;
}
