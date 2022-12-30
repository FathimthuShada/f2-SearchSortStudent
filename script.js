import data from"./data.json"assert{type:'json'};

let searchInput=document.getElementById("search");
let searchBtn=document.getElementById("searchBtn");

let students=document.getElementById("students");
let azSort=document.getElementById("azSort");
let zaSort=document.getElementById("zaSort");
let sortMark=document.getElementById("sortMark");
let sortPassing=document.getElementById("sortPassing");
let sortClass=document.getElementById("sortClass");
let sortGender=document.getElementById("sortGender");

azSort.addEventListener("click",azSorting);
zaSort.addEventListener("click",zaSorting);
sortMark.addEventListener("click",sortingMark);
sortClass.addEventListener("click",sortingClass);
sortPassing.addEventListener("click",sortingPassing);
sortGender.addEventListener("click",sortingGender);
searchBtn.addEventListener("click",searching);

function loadData(data) {
    students.innerHTML = "";
    data.map( (item) =>{
        let lItem=document.createElement("tr");
        lItem.innerHTML= `
        <td> ${item.id} </td>
        <td> <img src=${item.img_src} alt="photo"/> ${item.first_name} ${item.last_name} </td>
        <td> ${item.gender} </td>
        <td> ${item.class} </td>
        <td> ${item.marks} </td>
        <td> ${item.passing? "Passed" : "Failed"} </td>
        <td> ${item.email} </td> `
        students.append(lItem);
    }
        
    )
}
loadData(data);

function zaSorting(){
    let za=data.sort((a,b) =>{
        if(a.first_name<b.first_name) return 1;
        else if(a.first_name>b.first_name) return -1;
        else return 0; 
    })
    loadData(za);
}

function azSorting(){
    let az=data.sort((a,b) =>{
        if(a.first_name<b.first_name) return -1;
        else if(a.first_name>b.first_name) return 1;
        else return 0; 
    })
    loadData(az);
}

function sortingMark(){
    let mark=data.sort((a,b) =>{
        if(a.marks<b.marks) return -1;
        else if(a.marks>b.marks) return 1;
        else return 0; 
    })
    loadData(mark);
}

function sortingPassing(){
    let passedOrfail=data.filter((item)=>{
        return item.passing;
    })
    loadData(passedOrfail);
}
function sortingClass(){
    let std=data.sort((a,b) =>{
        if(a.class<b.class) return -1;
        else if(a.class>b.class) return 1;
        else return 0; 
    })
    loadData(std);
}

function sortingGender(){
    let gendersort=data.sort((a,b) =>{
        if(a.gender<b.gender) return -1;
        else if(a.gender>b.gender) return 1;
        else return 0; 
    })
    loadData(gendersort);
}

//function searching(){
    // let s=searchInput.value;
    // let matchings = data.filter((item)=>{
    //     return item.first_name.toLowerCase().includes(s.toLowerCase());
    // }) 
    // loadData(matchings);
    
    function searching(event) {
        event.preventDefault();
        let value = searchInput.value.trim().toLowerCase();
        if (value.length) {
          // something to filter
          let filtered = data.filter((item) =>
              item.first_name.toLowerCase().includes(value) ||
              item.email.toLowerCase().includes(value)||
              item.last_name.toLowerCase().includes(value) 
          );
            loadData(filtered);
          
        } 
      }
      
