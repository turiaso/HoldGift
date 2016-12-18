#pragma strict

public var type: int;
private var onFloor: System.Boolean = false;
private var timeOnFloor:System.Double = 0;

private var rb: Rigidbody;

function Start () {
    rb = GetComponent.<Rigidbody>();
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

function OnMouseDown () {
        
    Debug.Log("OnMouseDown ");
    rb.AddForce(0,10,0,ForceMode.Impulse);
}