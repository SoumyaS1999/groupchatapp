function addchat(event){ 
    event.preventDefault();

    const chat=event.target.chat.value;



    const obj ={
     chat
    }

    const token  = localStorage.getItem('token')
    axios.post("http://localhost:5000/chat/add-chat",obj, { headers: {"Authorization" : token} })
    .then((response)=>{
        display(response.data.newChatDetail)
        console.log(response)
    })
    .catch((err)=>{
        console.log(err)
    })

    }
    function parseJwt (token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

    return JSON.parse(jsonPayload);
    }


    window.addEventListener("DOMContentLoaded",()=>{

        const token  = localStorage.getItem('token')
        const decodeToken = parseJwt(token)
        console.log(decodeToken)
        
        
        axios.get('http://localhost:5000/chat/get-chats',{ headers: {"Authorization" : token}} )
        .then((response)=>{
            console.log(response)
            for (var i=0; i<response.data.allChats.length;i++){
                display(response.data.allChats[i])
            }
        })
        .catch((error)=> {
            console.log(error)
        })


    })

    function display(obj){


        if (localStorage.getItem(obj.chat) !== null){
            removeUserfromscreen(obj.chat)
        }
    
        const parentElem= document.getElementById('item-list');
        const childElem = `<li id=${obj.id}> ${obj.chat} 
                           
                            
                            </li>`
        parentElem.innerHTML= parentElem.innerHTML+childElem ;
        }