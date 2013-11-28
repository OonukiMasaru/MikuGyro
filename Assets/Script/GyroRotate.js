#pragma strict

private var myTransform:Transform;

function Start () {
	Input.gyro.enabled = true;
	myTransform = transform;
}

function Update () {
	var gyro:Quaternion = Input.gyro.attitude;

	// gyro.x *= -1.0;
	// gyro.y *= -1.0;
	myTransform.localRotation = gyro;
}
