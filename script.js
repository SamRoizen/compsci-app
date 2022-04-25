let request = new XMLHttpRequest();
request.open("GET", "callook.info/kd2yyk/kml");
request.send();
request.onload = () => {
  console.log(request);
  if request.status == 200{
    console.log(JSON.parse(request.response));
  }else{
    console.log(`error ${request.status} ${request.statusText}`)
  }
}


document.getElementByld("entered");

