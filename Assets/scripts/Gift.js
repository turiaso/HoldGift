#pragma strict

public var type: int;
public var bonusMaterial:Sprite[];
private var onFloor: System.Boolean = false;
private var timeOnFloor:System.Double = 0;

private var rb: Rigidbody;

function Start () {
    rb = GetComponent.<Rigidbody>();
    if(type == 4){
        var randomKingSkin = Mathf.FloorToInt(Random.Range( 0.0f,3f));
        var rend = GetComponent.<SpriteRenderer>(); //para cambiar en 2D de Sprite
        if(randomKingSkin==0){
            //    rend.sharedMaterial= kingsMaterial[0]; para cambiar en 3D de Material
            rend.sprite = bonusMaterial[0];
        }else if (randomKingSkin==1){
            rend.sprite= bonusMaterial[1];
        }else if (randomKingSkin==2){
            rend.sprite= bonusMaterial[2];
        }
    }
}

function Update () {
    
    var axisz=0.5f;
    if(onFloor){
        timeOnFloor+=Time.deltaTime;
        if( timeOnFloor>1){
            Destroy(gameObject);
        }
    }
    if(transform.position.y<-6.0f){
        Destroy(gameObject);
        var script = GameObject.FindGameObjectsWithTag("GiftsGenerator")[0].GetComponent(GiftGenerator);
        script.setGifts(script.getGifts()-1);
    }
    
    transform.Rotate(0, 0, axisz);
    var rotation = transform.rotation;
    rotation.x = 0.0f;
    rotation.y = 0.0f;
    transform.rotation = rotation;
}

function OnCollisionEnter(collision : Collision) {  
    if(collision.gameObject.tag=="Floor"){
        if(!onFloor){
            var script = GameObject.FindGameObjectsWithTag("GiftsGenerator")[0].GetComponent(GiftGenerator);
            script.setGifts(script.getGifts()-1);                       
        } 
        if(type == 5 && type == 4){
            GetComponent.<AudioSource>().Play();
        }
        onFloor = true;
    }   
    if((collision.gameObject.tag=="kid1"||collision.gameObject.tag=="kid2"||collision.gameObject.tag=="kid3"
               || collision.gameObject.tag=="kid4")
        && !onFloor){
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
    if(!onFloor){
        rb.AddForce(0,15,0,ForceMode.Impulse);
    }
    if(type == 5){
        GetComponent.<AudioSource>().Play();
        Destroy(gameObject);
        var script = GameObject.FindGameObjectsWithTag("GiftsGenerator")[0].GetComponent(GiftGenerator);
        script.setGifts(script.getGifts()-1); 
    }
}