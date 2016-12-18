#pragma strict

public var type: int;
private var onFloor: System.Boolean = false;
private var timeOnFloor:System.Double = 0;

private var rb: Rigidbody;

function Start () {
    rb = GetComponent.<Rigidbody>();
}

function Update () {
    
    var axisX=Random.Range(1, 3);
    var axisY=Random.Range(1, 3);
    if(onFloor){
        timeOnFloor+=Time.deltaTime;
        if( timeOnFloor>1){
            Destroy(gameObject);
        }
    }
    
    transform.Rotate(Time.deltaTime, axisX, axisY);
}

function OnCollisionEnter(collision : Collision) {  
    if(collision.gameObject.tag=="Floor"){
        if(!onFloor){
            var script = GameObject.FindGameObjectsWithTag("GiftsGenerator")[0].GetComponent(GiftGenerator);
            script.setGifts(script.getGifts()-1);
            
        }
        GetComponent.<AudioSource>().Play();
        onFloor = true;
    }   
    if(collision.gameObject.tag=="kid1"||collision.gameObject.tag=="kid2"||collision.gameObject.tag=="kid3"
               || collision.gameObject.tag=="kid4"){
        var scripter = GameObject.FindGameObjectsWithTag("GiftsGenerator")[0].GetComponent(GiftGenerator);
        scripter.setGifts(scripter.getGifts()-1);
        var player = GameObject.FindGameObjectsWithTag("Player")[0].GetComponent(Player);

        if(type==3){
            player.setScore(player.getScore()-1);
        }
        if(type==0){
            player.setScore(player.getScore()+1);
        }
        if(type==1){
            player.setScore(player.getScore()+2);
        }
        if(type==2){
            player.setScore(player.getScore()+3);
        }
        Destroy(gameObject);
    }
}

function OnMouseDown () {        
    Debug.Log("OnMouseDown ");
    transform.Rotate(Time.deltaTime, 20, 30);
    rb.AddForce(0,15,0,ForceMode.Impulse);
}