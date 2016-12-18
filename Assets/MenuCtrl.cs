using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;

public class MenuCtrl : UnityEngine.MonoBehaviour
{

	public void loadScene(string sceneName)
    {
        SceneManager.LoadScene(sceneName);
    }
}
