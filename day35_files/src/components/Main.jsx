
 import Card from './Card';
 import Navbar from './Navbar'
 import Story from './Story'
 function Main(){
     return (
         <div className="page">
             <Navbar />
             <div className = "Part1">
             <Story /> 
                 <Card  username ="Anshika" image="https://qph.fs.quoracdn.net/main-qimg-7df1a6cde9d4f37a22709c7b2992db04" />
                 <Card username="XYZ" image="https://img.devrant.com/devrant/rant/r_1377334_eq6v1.jpg" />
                 <Card username="Smile_Please" image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyIczocQoCWZJpTxfocdZlOi1YEfODCWTg6g&usqp=CAU" />
             </div>
            <div className="Part2">
                 <div className="userdp">
                     <img className="userdp" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf9sMqt6_Bph5Mcbj0CgiO6BN8zXeceQ4Y3A&usqp=CAU" alt="" />
                 </div>
                 <div className="username">SMILE</div>
                 <div className="follow">FOLLOW</div>
               </div>
      
         </div>
     )
 }
 export default Main;