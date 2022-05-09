const getreport4 = async(currentyear, deptName, studentdata) => {
    console.log(JSON.stringify(studentdata));
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    today = dd + '/' + mm + '/' + yyyy;
    console.log("*****", deptName);
    let reportDefination4 =[{   alignment:'right',
    text:`Date:${today}`,
    fontSize: 18,
},

{ alignment: 'center',
  text: 'TO WHOM IT MAY CONCERN:',
  fontSize:22,
  bold: true,
  },

  { 
      text:`This is to certify that ${studentdata.stuGender="Female"?"Miss":"Mr"} ${studentdata.stuTitle} ${studentdata.stuFirstname} ${studentdata.stuMiddlename} ${studentdata.stuLastname}(${studentdata.stuEnroll}) has been bonafide student of Four-yeardegree course in B.E. __________________________________________ since _______________. ${studentdata.stuGender="Female"?"She":"He"} result of B.E. semester I, II, III, IV, V, VI & VII examinations conducted by Gujarat Technology University have been declared and she has passed in all of them(CGPA______)`,
      fontSize: 20,
      margin:[0,20],
  },

  { text:`Presently, ${studentdata.stuGender="Female"?"She":"He"} is studying n B.E. semester VIII & the Gujarat Technological Universuty exam of B.E. semester VIII is likely to be announced by the ___________.`,
    fontSize:20,
    margin: [0,10],
  },

  {text:'This certificate is being issued as a requirement for the purpose Job.',
  fontSize:20,
  margin: [0,10],
  },

  { alignment: 'left',
    text: ' Dr. S.D. Toliwal                                                                                                                                   Principal                                                                                                                                   S.V.I.T - Vasad',
    fontSize:20,
    margin: [0,50],
    },]
    console.log(reportDefination4);
    return reportDefination4
}
export default getreport4;