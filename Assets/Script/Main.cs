using UnityEngine;
using System.Collections;

public class Main : MonoBehaviour {

	// Update is called once per frame
	void Update () {

		//Androidで戻るキーでアプリを終了させる
		if(Input.GetKey(KeyCode.Escape)){
			Application.Quit();
		}

	}
}
