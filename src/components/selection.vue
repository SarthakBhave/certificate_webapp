<template>
<div class="select">
    <div class="title_cont">
        <h1 class="title">Welcome {{studentdata.stuFirstname}} </h1>
    </div>
    <div>
        <datas :studentdata="studentdata"/>
    </div>
    <form @submit.prevent="handleSubmit">
        <div class="form-check" v-for="item in Items" v-bind:key="item.id">
            <input @input="selecteditem=item.id" type="radio"  v-model="user.Certicollection" :id="item.name" :value="item.name">
            <label class="form-check-label" :for="item.id">{{item.name}}</label>
            
            <div v-if="selecteditem == item.id">
                <upload @onPreview="generateReport"/>
            </div>
        </div>
    <div class="form-check" v-for="item in Its" v-bind:key="item.id">
        <label class="form-other" :for="item.id">{{item.name}}
                <input type="text" v-model="userr.Certicollection" :id="item.name" >
                </label>
    </div>
        <!-- print result -->
        <div class="form-group">
                Your Choice:<b>{{user.Certicollection || userr.Certicollection}}</b>
        </div>
        <div class="form-group">
            <button class="btn-btn-primary">Submit</button>
        </div>
    
    </form>

</div>
</template>
<script>
import axios from 'axios';
import Datas from './datas.vue';
import upload from './simpleupload.vue'

export default {  
    components: {Datas,upload},
    data() {
        return { 
            selecteditem: -1,
            studentdata:null,
            Items: [
                { id:1,
                    name: 'Bonafied Certificate'
                }, 
                { id:2,
                    name: 'Fee Structure Certificate'
                }, 
                { id:3,
                    name: 'Medium of instruction Certificate'
                }, 
                { id:4,
                    name: 'Course Completion Certificate'
                },
                { id:5,
                    name: 'Passing Certificate'
                },
                { id:6,
                    name: 'First attempt Certificate'
                }                
            ],            
            user: {
                       Certicollection: []
            },
            Its:[
                { id:7,
                   name: "Others"
                }
            ],
            userr: {
                     Certicollection:[]
            }
        };
    },
    methods: {
         generateReport(){
      console.log("****");
      let reportDefination=[
          {style:'header',fontSize:14,bold:true,alignment:'center',text:'SARDAR VALLABHBHAI PATEL INSTITUTE OF TECHNOLOGY,VASAD'},
             
                  { 
                alignment: 'center',
                text: 'Bonafied Certificate',
                style: 'header',
                fontSize: 23,
                bold: true,
                margin: [0, 10],
            },
            
                   {
                        
                        alignment:"center",
                        text: 'This is to certify that Mr./Ms. ______________________________ S/o or D/O of',
                        fontSize: 23,
                        bold: true,
                        margin:[0,10]
                            
                   },
                   {
                       
                        text: 'Mr./Ms. ______________________ bearing Enrollment No._______________ is a',
                        fontSize: 23,
                        bold: true,
                        margin:[0,10]
                        
                   },
                   {
                       
                        text: 'student of _________ (year) ___________________ (course name) for the ',
                        fontSize: 23,
                        bold: true,
                        
                   },
                   {
                       
                        text: 'academic year ___________ . He/She is a bonafied student of ',
                        fontSize: 23,
                        bold: true,
                        
                   },
                   {
                       
                        text: '______________________ (College)',
                        fontSize: 23,
                        bold: true,
                        
                   },
                   {
                       text:"___________________",
                       bold:true,
                       fontSize: 20,
                       alignment:"left",
                       margin:[0,20],

                   },
                   {
                       
                       text:"Signature Principal",
                       bold:true,
                       fontSize: 20,
                       alignment:'left',
                       margin:[0,10]
                   },
                   {
                       text:"___________________",
                       bold:true,
                       fontSize: 20,
                       alignment:"center",
                       margin:[0,0],

                   },
                   {
                       text:"College Name and Address",
                       bold:true,
                       fontSize: 20,
                       alignment:"center",
                       margin:[0,10],

                   },

                   {
                     
                       text:"(Official Seal)",
                       bold:true,
                       fontSize: 20,
                       alignment:"center",
                       margin:[0,10],
                   },
                   {
                       text:"___________________",
                       bold:true,
                       fontSize: 20,
                       alignment:"right",
                       margin:[0,10],
                   },
                   {     
                       text:"Date",
                       bold:true,
                       fontSize: 20,
                       alignment:"right",
                       margin:[0,10],

 
                   },



               ]
            
            
        
    
      var pdfMake = require('pdfmake/build/pdfmake.js')
          if (pdfMake.vfs == undefined){
            var pdfFonts = require('pdfmake/build/vfs_fonts.js')
            pdfMake.vfs = pdfFonts.pdfMake.vfs;
          }
          pdfMake.createPdf({pageOrientation:'landscape',
            content:reportDefination,
            defaultStyle:{fontSize:11}
          }).open()
    },
        handleSubmit() {
            alert(JSON.stringify(this.user));
        }

    },
   async mounted(){
        const userId = localStorage.getItem("userId")
        const credential = localStorage.getItem("credentials")
        const url = `http://10.10.104.87:4040/cmsdbapi/UserAccounts/${userId}?access_token=${credential}`
        const response = await axios.get(url)
        if (response.data.userType == 2){
            const q = {where:{stuEnroll:response.data.username}}
        const url1 = `http://10.10.104.87:4040/cmsdbapi/StudentInfos?filter=${JSON.stringify(q)}&access_token=${credential}`
        const rr = await axios.get(url1)
        console.log(rr.data);
        this.studentdata=rr.data[0]    
        }        
    } 
};
</script>


<style>
.title_cont{
    padding-top: 1em ;
    text-align: center;
    width: 100%;
    border: 1px solid black;
    
}
.form-check {
    
    display: block;
    margin: 10px auto;
    background-color: blue;
    font-size: 20px;
    width: 80%;
    background-color: #eee;
    
}
.form-check-label{
     text-align: center;
     width: 100%;
     margin: 10px;
}
.btn-btn-primary{
    cursor: pointer;
    background: #0066A2;
    color: white;
    border-style: outset;
    border-color: #0066A2;
    height: 40px;
    width: 60px;
    font: arial,sans-serif;
    font-size: 18px;
    text-shadow: none;
    display: block;
    width: 10%;
    margin: 13px auto;
    border-radius: 25px;

}
.form-group{
    font-size: 20px;
    text-align: center;
}
</style>