#pragma strict

private var timeToShow:System.Double = 0;
private var timeToHide:System.Double = 0;
private var timeElapse=0.0;
private var iAmTop;
private var timeShowed=0.0;
private var timeHidden=0.0;
function Start () {
    
    timeToShow= Random.Range(1,3);
    timeToHide= Random.Range(1,10);
    iAmTop=false;
    
}

function Update () {
    if(iAmTop){
        
        timeShowed+= Time.deltaTime;
        if(timeShowed > timeToShow){
            timeShowed=0;
            iAmTop=false;
            gameObject.transform.position.y=-10;
        }
        
    }else{
        timeHidden+=Time.deltaTime;
        if(timeHidden>=timeToHide){
            timeHidden=0;
            iAmTop=true;
            gameObject.transform.position.y=-3.9;
        }
    }
   
    
    //timeHidden= Time.deltaTime+timeHidden;
}
