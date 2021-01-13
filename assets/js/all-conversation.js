
 //Rend all using group 
  export default async function groupRender(){
    
    // Rend all groups 
    var groupdata= await fetch('api/read-Groups.php').then(response=>response.json()).catch((err) => console.log(err));

    // Rend group status api  data  use letter
    var group_status=await fetch('api/read-group-status.php').then((response)=>response.json());
   
  
    // Set all group data into an array
    var data=groupdata.data;
    // console.log(data.id)
    const groupId=data.map(res=> res.id);
    const groupName=data.map(res=> res.name);
    const groupShort_name=data.map(res=> res.short_name);


    // Rend group msg sender and exact time
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
    // console.log(msgarray);
  
    // Set group msg and time into an array
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
     
    // Create Get timer function
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
         time=1+"m";
       }
      return time;
     }


    //  set group data 
    var groups= document.getElementById('groups');
     var groupsShow='';
    for(var i=0;i<allconversation.length;i++){
      groupsShow +=' <div class="group"  data-group-id='+allconversation[i].id+'> <div class="group_logo"><img width="100px" src=assets/img/groups/'+allconversation[i].group_shortname+'.png  /></div><div class="group_description"><div class="group_details"><h4 class="group_name">'+allconversation[i].group_name+'</h4><p class="last_msg"><span class="last_msg_person">'+allconversation[i].lastMsg_sender+' :  </span>'+allconversation[i].last_msg+'</p></div><div class="last_msg_time"><p class="time"><time></time></p></div></div></div>';
    }
       groups.innerHTML=groupsShow;

  
  //  Select all groups
    var allgroup=document.querySelectorAll('.group');
   
    //  Set msg sender time 
    var msgTime=document.querySelectorAll('.last_msg_time .time time');
      for(var i=0;i<msgTime.length;i++){
        msgTime[i].innerHTML=getTime(allconversation[i].sendAt);
      }


    // group Header function 
    function groupHeader(src, groupName,dataset){
      var head_img=document.getElementById('head_img');
      var group_title=document.querySelector('#group-title h3');
      var group_header=document.querySelector('.conversation_header');
     
       head_img.src=src;
       group_title.innerHTML=groupName;
     var dataSet=document.createAttribute('data-group-head-id'); 
     group_header.setAttributeNode(dataSet);
     dataSet.value=dataset;
     }


    // Set group active status 
      // var group_status=await fetch('api/read-group-status.php').then((response)=>response.json());
      var group_status_data=group_status.data;
     for(var i=0;i<group_status_data.length;i++){
       if(group_status_data[i].status==1){

         var active_group=group_status_data[i].group_id;

        for(var j=0;j<allgroup.length;j++){

          var group_data=allgroup[j].dataset.groupId;
              if(active_group == group_data){

                // set active class in active group 
                allgroup[j].classList.add('active');


                // Set  Group header

                //Select current group img(src) group name and group dataset
                var img=allgroup[j].querySelector('.groups .group img');
                 var src=img.getAttribute('src');
                 var groupname=allgroup[j].querySelector('.group_name').innerText;

                 var dataid=allgroup[j].dataset.groupId;


                //  Call group header  function 
                 groupHeader(src, groupname,dataid);
              }
        }
       }
     }



    //  Update group status use click event 
    for(var i=0;i<allgroup.length;i++){
      allgroup[i].addEventListener('click',(e)=>{
         var id=e.currentTarget.dataset.groupId;
         fetch('api/update-group-status.php',{
          method:'POST',
          body:JSON.stringify({'group_id':id})  
        }).then(response =>response.json())
        .catch((err)=>console.log(err));

        
        });
    };
 

    //  User send messages 
     var a=0;
    var msgSend=document.querySelector('.sent_logo');
    msgSend.addEventListener('click',(e)=>{
      e.preventDefault();
     
      console.log("hello");
      // console.log(msgSend);
      // var msgInput=document.getElementById('msgSend').value;
      // console.log(msgInput);

      // var headDataset=document.querySelector('.conversation_header').dataset.groupHeadId;
      //  var msgInput=document.getElementById('msgSend').value;
      //  if(msgInput!=""){
      //     fetch('api/send-Messages.php',{
      //   method:'POST',
      //   body:JSON.stringify({'group_id':headDataset, 'message':msgInput})  
      // }).then(response =>response.json())
      // .catch((err)=>console.log(err));
      //  }
    });


   
    
  };
 

  
 