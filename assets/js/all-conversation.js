
 //Rend all using group 
  export default async function groupRender(){

    // Rend all groups 
    var groupdata= await fetch('api/read-Groups.php').then(response=>response.json()).catch((err) => console.log(err));
  
    //Set all group data into an array
    var data=groupdata.data;
    // console.log(data.id)
    const groupId=data.map(res=> res.id);
    const groupName=data.map(res=> res.name);
    const groupShort_name=data.map(res=> res.short_name);


    //Rend group msg sender and exact time
    var msgarray=[];
    for(var i=0;i<groupId.length;i++){
      var messageResponse=await fetch('api/read-single-message-allgroup.php',{
        method:'POST',
        body:JSON.stringify({id:groupId[i]})
      }).then(response=>response.json())
      .catch((err) => console.log(err));
      
      var message=messageResponse.data;
      msgarray.push(message[0]);
    };
  
    //Set group msg and time into an array
    var lastMsg=msgarray.map(res => res.message);
    var lastMsgSender=msgarray.map(res => res.first_name);
    var lastMsgSendAt=msgarray.map(res => res.sent_at);
  
    //Set all group  data  in array object
     const allconversation=[];
      for(var i=0;i<groupName.length;i++){
      var data={
         "id":groupId[i],
         "group_name":groupName[i],
         "group_shortname":groupShort_name[i],
         "last_msg":lastMsg[i],
         "lastMsg_sender":lastMsgSender[i],
         "sendAt":lastMsgSendAt[i]
  
      };
      allconversation.push(data);
    }
  
    //Sort array object
    allconversation.sort((a,b)=> Date.parse(b.sendAt)-Date.parse(a.sendAt));
     
    //Get timer function
     function getTime(sendDate){
      sendDate=Date.parse(sendDate);
       var currentDate= Date.parse(new Date());
       var diffTime=(currentDate-sendDate)/1000;
       var minute=60;
       var hour=60*60;
       var day=24*60*60;
       var weak=7*24*60*60;
       var time;
       if(diffTime>=weak){
         time=parseInt(diffTime/weak);
         time=time+"w";
       }
       else if(diffTime>=day){
         time=parseInt(diffTime/day);
         time=time+"d";
       }
       else if(diffTime>=hour){
         time=parseInt(diffTime/hour);
         time=time+"h";
       }
       else if(diffTime>=minute){
         time=parseInt(diffTime/minute);
         time=time+"m";
       }
       else {
         time=diffTime+"s";
       }
      return time;
     }
  
   //Select all groups
    var groups=document.getElementById('groups');
    var groupsShow='';
     
    //Create all group  by exact data
    for(var i=0;i<allconversation.length;i++){
    var time=getTime(allconversation[i].sendAt);
    groupsShow +=' <div class="group" id="group" data-group-id='+allconversation[i].id+'> <div class="group_logo"><img width="100px" src="assets/img/groups/'+allconversation[i].group_shortname+'.png" /></div><div class="group_description"><div class="group_details"><h4 class="group_name">'+allconversation[i].group_name+'</h4><p class="last_msg"><span class="last_msg_person">'+allconversation[i].lastMsg_sender+': </span>'+allconversation[i].last_msg+'</p></div><div class="last_msg_time"><p class="time"><time>'+time+'</time></p></div></div></div>';
     };
  
     //Set the group data
    
       groups.innerHTML=groupsShow;
  
    
  };
  
 