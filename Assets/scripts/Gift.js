#pragma strict

public var type: int;
private var onFloor: System.Boolean = false;
private var timeOnFloor:System.Double = 0;

function Start () {
	
}

function Update () {
    if(onFloor){
        timeOnFloor+=Time.deltaTime;
        if( timeOnFloor>1){
            Destroy(gameObject);
        }
    }
}

//function OnCollisionEnter(collision : Collision) {
//    Destroy(collision.gameObject);
//}

function OnCollisionEnter(collision : Collision) {
    //if(collision.gameObject.tag == "Destroyer")    
    onFloor = true;
}