
const mouseId = document.getElementById("mouseId");
const mouseTumorSize = document.getElementById("mouseTumorSize");
mouse = {
    id : "" ,
    tumorSize : "",
}
mouseId.addEventListener("keyup",(e)=>{
    mouse["id"] = mouseId.value.split("\n");
    requestMouseSeparation();

})

mouseTumorSize.addEventListener("keyup",(e)=>{
    mouse["tumorSize"] = mouseTumorSize.value.split("\n");
    requestMouseSeparation();
})



function requestMouseSeparation(){
    if(mouse["id"] !== '' && mouse["tumorSize"] !== ''){
        axios.post("/mouseGroup",mouse)
        .then(result=>{
            console.log(result);
        })
        .catch(fail => {
            console.log(fail);
        })
    }
}