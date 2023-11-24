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