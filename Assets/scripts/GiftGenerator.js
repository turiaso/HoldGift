﻿#pragma strict

public var itemsGen:  GameObject[];
public var kingsMaterial:  Sprite[];
public var maxGifts:int;

private var timeElapse:System.Double = 0;
public var gifts:int = 0;

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
        var posKing = Vector3 (x, y-2, 0.4f);
        var king = GameObject.FindGameObjectsWithTag("King")[0];
        king.transform.position= posKing;
        var randomKingSkin = Mathf.FloorToInt(Random.Range( 0.0f,4f));
        //var rend = king.GetComponent.<Renderer>(); para cambiar en 3D de Material
        var rend = king.GetComponent.<SpriteRenderer>(); //para cambiar en 2D de Sprite
        if(randomKingSkin==0){
            //    rend.sharedMaterial= kingsMaterial[0]; para cambiar en 3D de Material
            rend.sprite = kingsMaterial[0];
        }else if (randomKingSkin==1){
            rend.sprite= kingsMaterial[1];
        }else if (randomKingSkin==2){
            rend.sprite= kingsMaterial[2];
        }else if (randomKingSkin==3){
            rend.sprite= kingsMaterial[3];
        }
        Instantiate(itemsGen[randomType], pos, Quaternion.identity);
        timeElapse=0;
        gifts++;
    }
}

function getGifts(){
    return gifts;
}

function setGifts(_gifts:int){
    gifts = _gifts;
}
