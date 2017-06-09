(function(){



  document.getElementById("requestResourceButton").addEventListener('click', buttonRequest)
var value= document.getElementById('resourceType')

  function buttonRequest() {
    var x = document.getElementById("resourceId").placeholder;
    var oReq = new XMLHttpRequest();
    if (value.value==='people') {
      oReq.addEventListener('load', button)
      oReq.open('GET', `http://www.swapi.co/api/people/${x}/`)
        oReq.send()
        console.log(x)
    }  if (value.value==='planets') {
        oReq.addEventListener('load', button)
        oReq.open('GET', "http://www.swapi.co/api/planets/1")
          oReq.send()
      }if (value.value==='starships') {
          oReq.addEventListener('load', button)
          oReq.open('GET', "http://www.swapi.co/api/starships/9")
            oReq.send()
        }


}
function button(){

 if(value.value==='people'){
    var res = JSON.parse(this.responseText)
    var per = document.createElement('div')
    console.log(res)
    per.className= "per"
    per.innerHTML = res.name
    contentContainer.appendChild(per)
  }if(value.value==="planets"){
    var res = JSON.parse(this.responseText)
    var per = document.createElement('div')
      console.log(res)
    per.className= "per"
    per.innerHTML = res.name
    contentContainer.appendChild(per)
  }if(value.value==="starships"){
    var res = JSON.parse(this.responseText)
    var per = document.createElement('div')
      console.log(res)
    per.className= "per"
    per.innerHTML = res.name
    contentContainer.appendChild(per)
  }
}

})()
