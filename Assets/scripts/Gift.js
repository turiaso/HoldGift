#pragma strict

public var type: int;
private var onFloor: System.Boolean = false;
private var timeOnFloor:System.Double = 0;

public var bonusMaterial:  Material[];

private var rb: Rigidbody;

function Start () {
    if(type==4){
        var randomBonusSkin = Mathf.FloorToInt(Random.Range( 0.0f,4f));
        var rend = GetComponent.<Renderer>();  
        if(randomBonusSkin==0){
            rend.sharedMaterial= bonusMaterial[0];
        }else if (randomBonusSkin==1){
            rend.sharedMaterial= bonusMaterial[1];
        }else if (randomBonusSkin==2){
            rend.sharedMaterial= bonusMaterial[2];
        }
    }
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
<<<<<<< HEAD
            
        }
        GetComponent.<AudioSource>().Play();
=======
            GetComponent.<AudioSource>().Play();            
        }    
>>>>>>> b767b3e29ec06c597ce37d51a5f5a15579af8795
        onFloor = true;
    }   
    if(collision.gameObject.tag=="kid1"||collision.gameObject.tag=="kid2"||collision.gameObject.tag=="kid3"
               || collision.gameObject.tag=="kid4"){
        var scripter = GameObject.FindGameObjectsWithTag("GiftsGenerator")[0].GetComponent(GiftGenerator);
        scripter.setGifts(scripter.getGifts()-1);
        Destroy(gameObject);
    }
}

function OnMouseDown () {        
    Debug.Log("OnMouseDown ");
    transform.Rotate(Time.deltaTime, 20, 30);
    rb.AddForce(0,15,0,ForceMode.Impulse);
}