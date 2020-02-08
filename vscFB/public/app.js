(function(){

  
    const firebaseConfig = {
        apiKey: "AIzaSyCs9LfncfautAKhRs6xiBzV7wPqcUn8Ygo",
        authDomain: "webt-b830b.firebaseapp.com",
        databaseURL: "https://webt-b830b.firebaseio.com",
        projectId: "webt-b830b",
        storageBucket: "webt-b830b.appspot.com",
        messagingSenderId: "259144708288",
        appId: "1:259144708288:web:556746266253fb945a7d25",
        measurementId: "G-D0F7WG3MJQ"
      };
    
      firebase.initializeApp(firebaseConfig);


      var firestore = firebase.firestore();

      const db = firestore;

      const txtEmail = document.getElementById('txtEmail');
      const txtPassword = document.getElementById('txtPassword');

      const ureq = document.getElementById('req');
     // const txtBio = document.getElementById('txtBio');


      const btnLogin = document.getElementById('btnLogin');
      const btnSignUp = document.getElementById('btnSignUp');
     // const btnLogout = document.getElementById('btnLogout');



      btnLogin.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassword.value;
        // const bio = txtBio.value;
        const auth = firebase.auth();


        const promise = auth.signInWithEmailAndPassword(email, pass);
        
     //   db.collection('users').doc(auth.currentUser.uid).set({
          //  address : bio
       // });

        promise.catch(e => console.log(e.message));

        


      });

      btnReq.addEventListener('click', e => {

        const request = ureq.value;
       // const useremail = txtEmail.value;

        db.collection("request").add({
           
            preq : request
          
        }).then(function(docRef) {
            console.log("Document written with ID: ", docRef.id);
            var para = document.createElement("P");
            para.innerHTML = "request id " + docRef.id;
            document.getElementById("rep").appendChild(para);
        })
        .catch(function(error) {
            console.error("Error adding document: ", error);
        });


        db.collection("users").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        console.log(`${doc.id} => ${doc.data()}`);
    });
});
           
          

      });

 

      

      btnSignUp.addEventListener('click', e => {

        const email = txtEmail.value;
        const pass = txtPassword.value;
       
        const auth = firebase.auth();


        const promise = auth.createUserWithEmailAndPassword(email, pass);
        
        promise.catch(e => console.log(e.message));


       


      });


      btnLogout.addEventListener('click', e =>{

        firebase.auth().signOut();

        location.reload();


      });


     

      

firebase.auth().onAuthStateChanged(firebaseUser => {
    
    if(firebaseUser){
       // console.log(firebaseUser);

     //   window.location.href ="log.html"; 
     
     
     document.getElementById("btnLogout").style.visibility = "visible";

     for (let el of document.querySelectorAll('.log')) el.style.visibility = 'hidden';

    [].forEach.call(document.querySelectorAll('.log'), function (el) {
        el.style.visibility = 'hidden';

             });

             for (let el of document.querySelectorAll('.post')) el.style.visibility = 'visible';

             [].forEach.call(document.querySelectorAll('.post'), function (el) {
                el.style.visibility = 'visible';
        
                     });

     //   window.location.assign('log.html');

 
    
     
    
   //  alert("your in");
   //     document.getElementById("address").innerHTML = db.collection('users').doc(auth.currentUser.uid) ;
        
    }else{
        console.log('not logged in');
  
        document.getElementById("btnLogout").style.visibility = "hidden";

        for (let el of document.querySelectorAll('.appBanner')) el.style.visibility = 'hidden';

     

    }

    
    
    
});


    
})();
